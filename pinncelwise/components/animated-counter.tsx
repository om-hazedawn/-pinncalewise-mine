'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
}

export function AnimatedCounter({ end, duration = 2000, suffix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const startTime = useRef<number | null>(null)
  const frameId = useRef<number | null>(null)

  useEffect(() => {
    if (!isInView) return

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp
      const progress = timestamp - startTime.current

      const percentage = Math.min(progress / duration, 1)
      const currentCount = Math.floor(end * percentage)
      setCount(currentCount)

      if (percentage < 1) {
        frameId.current = requestAnimationFrame(animate)
      }
    }

    frameId.current = requestAnimationFrame(animate)

    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current)
      }
    }
  }, [isInView, end, duration])

  return (
    <div ref={ref} className="font-bold">
      {count}{suffix}
    </div>
  )
}
