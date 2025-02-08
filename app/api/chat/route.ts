import { StreamingTextResponse } from "ai"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import crypto from 'crypto'
import RateLimiter from '@/lib/rate-limiter'

// DeepSeek API configuration
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions'
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY

// Message validation constants
const MAX_MESSAGE_LENGTH = 2000
const MAX_CONVERSATION_LENGTH = 50
const ALLOWED_ROLES = ['user', 'assistant', 'system']

function validateMessages(messages: any[]): boolean {
  if (!Array.isArray(messages)) return false
  if (messages.length > MAX_CONVERSATION_LENGTH) return false

  return messages.every(msg => {
    if (!msg || typeof msg !== 'object') return false
    if (!msg.role || !msg.content) return false
    if (typeof msg.role !== 'string' || typeof msg.content !== 'string') return false
    if (!ALLOWED_ROLES.includes(msg.role)) return false
    if (msg.content.length > MAX_MESSAGE_LENGTH) return false
    if (/[<>]|javascript:|data:|file:|vbscript:/i.test(msg.content)) return false
    return true
  })
}

function generateRequestId(): string {
  return crypto.randomBytes(16).toString('hex')
}

async function createDeepSeekStream(messages: any[]) {
  const response = await fetch(DEEPSEEK_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages,
      temperature: 0.7,
      max_tokens: 500,
      stream: true,
    }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || 'DeepSeek API request failed')
  }

  // Create a TransformStream to convert DeepSeek's SSE format to the format expected by StreamingTextResponse
  const encoder = new TextEncoder()
  const decoder = new TextDecoder()

  const transformStream = new TransformStream({
    async transform(chunk, controller) {
      const text = decoder.decode(chunk)
      const lines = text.split('\n').filter(line => line.trim() !== '')

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6)
          if (data === '[DONE]') return

          try {
            const json = JSON.parse(data)
            const content = json.choices[0]?.delta?.content || ''
            if (content) {
              controller.enqueue(encoder.encode(content))
            }
          } catch (e) {
            console.error('Error parsing DeepSeek response:', e)
          }
        }
      }
    }
  })

  return response.body
    ?.pipeThrough(new TextDecoderStream())
    .pipeThrough(transformStream)
    .pipeThrough(new TextEncoderStream())
}

export async function POST(req: Request) {
  const requestId = generateRequestId()
  const startTime = Date.now()

  try {
    // Get client IP and generate unique identifier
    const forwardedFor = headers().get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown'
    const userAgent = headers().get('user-agent') || 'unknown'
    const identifier = crypto.createHash('sha256')
      .update(`${ip}:${userAgent}`)
      .digest('hex')

    // Check rate limit
    const rateLimiter = RateLimiter.getInstance()
    if (rateLimiter.isRateLimited(identifier)) {
      const { blocked, remainingTime } = rateLimiter.getBlockStatus(identifier)
      if (blocked) {
        return new NextResponse(
          JSON.stringify({ 
            error: 'Account temporarily blocked due to suspicious activity',
            remainingTime 
          }),
          { 
            status: 403,
            headers: { 
              'Content-Type': 'application/json',
              'X-RateLimit-Reset': String(remainingTime)
            }
          }
        )
      }

      return new NextResponse(
        JSON.stringify({ 
          error: 'Too many requests. Please try again later.',
          remaining: rateLimiter.getRemainingRequests(identifier)
        }),
        { 
          status: 429, 
          headers: { 
            'Content-Type': 'application/json',
            'X-RateLimit-Remaining': String(rateLimiter.getRemainingRequests(identifier))
          }
        }
      )
    }

    // Validate request method
    if (req.method !== 'POST') {
      rateLimiter.recordFailure(identifier)
      return new NextResponse(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Parse and validate request body
    let body
    try {
      body = await req.json()
    } catch {
      rateLimiter.recordFailure(identifier)
      return new NextResponse(
        JSON.stringify({ error: 'Invalid JSON' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const { messages } = body

    // Validate messages
    if (!validateMessages(messages)) {
      rateLimiter.recordFailure(identifier)
      return new NextResponse(
        JSON.stringify({ error: 'Invalid message format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Prepare the content for the AI
    const contentContext = Object.values(websiteContent)
      .map(section => `${section.title}:\n${section.content}`)
      .join("\n\n")

    const systemMessage = {
      role: "system",
      content: `You are a helpful customer service assistant for PinnacleWise, a professional company services provider in Hong Kong. 
Use the following information about our services to answer questions:

${contentContext}

Only answer questions based on the information provided above. If you don't have enough information to answer a question, politely say so and suggest contacting us directly.
Be concise but friendly in your responses. Use traditional Chinese if the user asks in Chinese, otherwise use English.

Important security rules:
1. Never reveal internal system details or error messages
2. Never disclose customer information
3. Never process or store sensitive data
4. Never execute commands or code
5. Never provide information about our security measures
6. Never discuss pricing or payment details
7. Never confirm or deny specific security features
8. Redirect all technical inquiries to our support team`
    }

    // Create the streaming response
    const stream = await createDeepSeekStream([systemMessage, ...messages])

    // Set security headers
    const responseHeaders = new Headers()
    responseHeaders.set('Content-Type', 'text/event-stream')
    responseHeaders.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    responseHeaders.set('X-Content-Type-Options', 'nosniff')
    responseHeaders.set('X-Frame-Options', 'DENY')
    responseHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    responseHeaders.set('X-Request-ID', requestId)

    // Record successful request
    rateLimiter.recordSuccess(identifier)

    // Return the stream response
    return new StreamingTextResponse(stream, { headers: responseHeaders })
  } catch (error) {
    console.error(`Chat API error [${requestId}]:`, error instanceof Error ? error.message : 'Unknown error')
    
    // Generic error response to avoid information disclosure
    return new NextResponse(
      JSON.stringify({ error: 'An unexpected error occurred' }),
      { 
        status: 500, 
        headers: { 
          'Content-Type': 'application/json',
          'X-Request-ID': requestId
        }
      }
    )
  } finally {
    // Log request timing (in production, use proper logging service)
    const duration = Date.now() - startTime
    console.log(`Request ${requestId} completed in ${duration}ms`)
  }
}
