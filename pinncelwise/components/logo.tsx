import { Mountain } from 'lucide-react'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className = "", width = 40, height = 40 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pinnaclewise Logo"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Main triangle with gradient fill */}
      <path
        d="M50 180 L150 20 L250 180 Z"
        fill="url(#goldGradient)"
        filter="url(#shadow)"
      />
      
      {/* Inner curved lines with smoother curves */}
      <path
        d="M70 180 C70 180 150 40 230 180"
        fill="none"
        stroke="rgba(0,0,0,0.7)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M90 180 C90 180 150 60 210 180"
        fill="none"
        stroke="rgba(0,0,0,0.7)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M110 180 C110 180 150 80 190 180"
        fill="none"
        stroke="rgba(0,0,0,0.7)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

interface NewLogoProps {
  className?: string
  width?: number
  height?: number
}

export function NewLogo({ className = "", width = 40, height = 40 }: NewLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="1" dy="1" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#shadow)">
        <path
          d="M50 10 L90 80 L10 80 Z"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M50 20 L80 75 L20 75 Z"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M50 30 L70 70 L30 70 Z"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
