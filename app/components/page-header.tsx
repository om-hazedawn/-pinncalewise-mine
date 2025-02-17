"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Pacifico } from "next/font/google"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

interface PageHeaderProps {
  title: string
  description?: string
  accent?: boolean
}

export function PageHeader({ title, description, accent = false }: PageHeaderProps) {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight",
            accent && "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {accent ? <span className={pacifico.className}>{title}</span> : title}
        </motion.h1>
        {description && (
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  )
}

