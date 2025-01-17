'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  baseVelocity?: number
}

export function ParallaxSection({ children, className = '', baseVelocity = 3 }: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${baseVelocity * 100}%`])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}
