"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type React from "react"

interface ButtonGradientProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export function ButtonGradient({ children, className, ...props }: ButtonGradientProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        className={cn(
          "bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600",
          "shadow-lg hover:shadow-xl transition-all duration-200",
          "!text-white", // Force white text color
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  )
}
