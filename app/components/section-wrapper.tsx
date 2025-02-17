"use client"

import { motion } from "framer-motion"
import type React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  gradient?: boolean
}

export function SectionWrapper({ children, className, gradient = false }: SectionWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
      viewport={{ once: true }}
      className={cn("relative py-20", gradient && "overflow-hidden", className)}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      )}
      <div className="relative">{children}</div>
    </motion.section>
  )
}

