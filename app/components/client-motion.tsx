"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { ReactNode } from "react"

interface MotionWrapperProps {
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

export function MotionDiv({ children, ...props }: MotionWrapperProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div {...props}>{children}</motion.div>
    </AnimatePresence>
  )
}

export function MotionList({ children, ...props }: MotionWrapperProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.ul {...props}>{children}</motion.ul>
    </AnimatePresence>
  )
}

export function MotionListItem({ children, ...props }: MotionWrapperProps) {
  return <motion.li {...props}>{children}</motion.li>
}

export function MotionSpan({ children, ...props }: MotionWrapperProps) {
  return <motion.span {...props}>{children}</motion.span>
}

