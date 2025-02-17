"use client"
import { cn } from "@/lib/utils"
import { ElegantShape } from "./elegant-shape"
import type React from "react" // Import React

interface AnimatedBackgroundProps {
  className?: string
  children: React.ReactNode
  variant?: "default" | "subtle"
}

export function AnimatedBackground({ className, children, variant = "default" }: AnimatedBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {variant === "default" && (
        <>
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-indigo-500/[0.15]"
            className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-rose-500/[0.15]"
            className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-violet-500/[0.15]"
            className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />
        </>
      )}

      {variant === "subtle" && (
        <>
          <ElegantShape
            delay={0.3}
            width={400}
            height={100}
            rotate={8}
            gradient="from-indigo-500/[0.08]"
            className="absolute left-[-5%] top-[20%]"
          />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-12}
            gradient="from-rose-500/[0.08]"
            className="absolute right-[-5%] bottom-[20%]"
          />
        </>
      )}

      <div className="relative">{children}</div>
    </div>
  )
}

