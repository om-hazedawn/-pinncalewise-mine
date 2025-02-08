"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type React from "react"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      viewport={{ once: true }}
    >
      <Card
        className={cn(
          "backdrop-blur-[2px] border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
          "after:absolute after:inset-0 after:rounded-lg after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          className,
        )}
      >
        {children}
      </Card>
    </motion.div>
  )
}

