interface LogoProps {
  className?: string
  width?: number
  height?: number
  color?: string
}

export default function MinimalLogo({ className = "", width = 120, height = 100, color = "#000000" }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M30 50L60 20L90 50" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
      <path d="M35 65L60 40L85 65" stroke={color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
      <circle cx="60" cy="75" r="2" fill={color} />
    </svg>
  )
}
