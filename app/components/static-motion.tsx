"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaticMotionProps {
  children: ReactNode
  className?: string
  initial?: any
  animate?: any
  transition?: any
  whileHover?: any
  whileTap?: any
  viewport?: any
  custom?: any
  variants?: any
  exit?: any
  style?: any
}

export function StaticDiv({ children, ...props }: StaticMotionProps) {
  return <motion.div {...props}>{children}</motion.div>
}

export function StaticLi({ children, ...props }: StaticMotionProps) {
  return <motion.li {...props}>{children}</motion.li>
}

export function StaticSpan({ children, ...props }: StaticMotionProps) {
  return <motion.span {...props}>{children}</motion.span>
}

