"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type React from "react" // Import React

interface FancyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
}

export function FancyCard({ children, className, delay = 0, ...props }: FancyCardProps) {
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
      {...props}
    >
      <Card
        className={cn(
          "relative overflow-hidden backdrop-blur-[2px] border-white/[0.15]",
          "shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]",
          "before:absolute before:inset-0 before:bg-gradient-to-br",
          "before:from-white/[0.07] before:to-white/[0.05]",
          "before:rounded-lg before:-z-10",
          "after:absolute after:inset-0 after:rounded-lg",
          "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]",
          "hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]",
          "hover:border-white/[0.2]",
          "transition-all duration-500",
          className,
        )}
      >
        {children}
      </Card>
    </motion.div>
  )
}

