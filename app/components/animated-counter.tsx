"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
}

export function AnimatedCounter({ end, duration = 2000, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number>()

  useEffect(() => {
    if (!isInView) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = timestamp - startTimeRef.current

      const percentage = Math.min(progress / duration, 1)
      // Use easeOutExpo for smooth animation
      const easing = 1 - Math.pow(2, -10 * percentage)
      const currentCount = Math.floor(easing * end)

      setCount(currentCount)

      if (progress < duration) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="inline-block">
      {count}
      {suffix}
    </span>
  )
}
