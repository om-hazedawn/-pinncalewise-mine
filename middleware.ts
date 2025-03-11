import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the response
  const response = NextResponse.next()

  // Add security headers
  const headers = response.headers

  // Content Security Policy
  headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self' https://api.openai.com https://*.googleapis.com https://identitytoolkit.googleapis.com https://*.firebaseio.com https://*.firebase.googleapis.com https://*.firebaseapp.com https://www.google-analytics.com",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "base-uri 'self'",
      "object-src 'none'",
    ].join('; ')
  )

  // HSTS (HTTP Strict Transport Security)
  headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )

  // Prevent MIME type sniffing
  headers.set('X-Content-Type-Options', 'nosniff')

  // Referrer Policy
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Frame Options
  headers.set('X-Frame-Options', 'DENY')

  // XSS Protection
  headers.set('X-XSS-Protection', '1; mode=block')

  // Permissions Policy
  headers.set(
    'Permissions-Policy',
    'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()'
  )

  // Cache Control
  if (request.nextUrl.pathname.startsWith('/api/')) {
    headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    headers.set('Pragma', 'no-cache')
    headers.set('Expires', '0')
  }

  return response
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
