import { Mountain } from 'lucide-react'
import Link from "next/link"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link 
      href="/"
      className={`inline-flex items-center gap-2 hover:opacity-90 transition-opacity ${className}`}
    >
      <Mountain className="h-6 w-6 text-primary" strokeWidth={2.5} />
      <span className="font-bold text-xl tracking-tight">
        Pinnacle<span className="text-primary">Wise</span>
      </span>
    </Link>
  )
}

