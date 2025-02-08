type RateLimitEntry = {
  count: number
  timestamp: number
  blocked: boolean
  consecutiveFailures: number
}

class RateLimiter {
  private static instance: RateLimiter
  private rateLimitMap: Map<string, RateLimitEntry>
  private readonly RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
  private readonly MAX_REQUESTS = 10 // Maximum requests per window
  private readonly MAX_CONSECUTIVE_FAILURES = 5 // Maximum consecutive failures before temporary block
  private readonly BLOCK_DURATION = 15 * 60 * 1000 // 15 minutes

  private constructor() {
    this.rateLimitMap = new Map()
  }

  public static getInstance(): RateLimiter {
    if (!RateLimiter.instance) {
      RateLimiter.instance = new RateLimiter()
    }
    return RateLimiter.instance
  }

  public isRateLimited(identifier: string): boolean {
    const now = Date.now()
    const entry = this.rateLimitMap.get(identifier)

    if (!entry) {
      this.rateLimitMap.set(identifier, {
        count: 1,
        timestamp: now,
        blocked: false,
        consecutiveFailures: 0
      })
      return false
    }

    // Check if blocked
    if (entry.blocked) {
      if (now - entry.timestamp > this.BLOCK_DURATION) {
        // Reset if block duration has passed
        this.rateLimitMap.set(identifier, {
          count: 1,
          timestamp: now,
          blocked: false,
          consecutiveFailures: 0
        })
        return false
      }
      return true
    }

    // Reset window if expired
    if (now - entry.timestamp > this.RATE_LIMIT_WINDOW) {
      entry.count = 1
      entry.timestamp = now
      return false
    }

    // Check rate limit
    if (entry.count >= this.MAX_REQUESTS) {
      return true
    }

    entry.count++
    return false
  }

  public recordFailure(identifier: string): void {
    const entry = this.rateLimitMap.get(identifier)
    if (!entry) return

    entry.consecutiveFailures++
    if (entry.consecutiveFailures >= this.MAX_CONSECUTIVE_FAILURES) {
      entry.blocked = true
      entry.timestamp = Date.now()
    }
  }

  public recordSuccess(identifier: string): void {
    const entry = this.rateLimitMap.get(identifier)
    if (!entry) return

    entry.consecutiveFailures = 0
  }

  public getRemainingRequests(identifier: string): number {
    const entry = this.rateLimitMap.get(identifier)
    if (!entry) return this.MAX_REQUESTS

    if (Date.now() - entry.timestamp > this.RATE_LIMIT_WINDOW) {
      return this.MAX_REQUESTS
    }

    return Math.max(0, this.MAX_REQUESTS - entry.count)
  }

  public getBlockStatus(identifier: string): { blocked: boolean; remainingTime?: number } {
    const entry = this.rateLimitMap.get(identifier)
    if (!entry || !entry.blocked) return { blocked: false }

    const remainingTime = Math.max(0, this.BLOCK_DURATION - (Date.now() - entry.timestamp))
    return { blocked: true, remainingTime }
  }
}
