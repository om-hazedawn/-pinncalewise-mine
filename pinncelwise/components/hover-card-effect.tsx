'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from './ui/card'

interface HoverCardEffectProps {
  children: React.ReactNode
  className?: string
}

export function HoverCardEffect({ children, className = '' }: HoverCardEffectProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const mouseX = e.clientX
      const mouseY = e.clientY

      const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * 10
      const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * 10

      setRotateX(-rotateXValue)
      setRotateY(rotateYValue)
    }

    const handleMouseLeave = () => {
      setRotateX(0)
      setRotateY(0)
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={className}
    >
      <Card className="h-full bg-gradient-to-br from-background to-muted hover:shadow-xl transition-shadow duration-300">
        {children}
      </Card>
    </motion.div>
  )
}
