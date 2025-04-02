"use client"
import { cn } from "@/lib/utils"
import { ElegantShape } from "./elegant-shape"
import type React from "react"
import { motion } from "framer-motion"

interface AnimatedBackgroundProps {
  className?: string
  children: React.ReactNode
  variant?: "default" | "subtle"
}

export function AnimatedBackground({ className, children, variant = "default" }: AnimatedBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 z-0">
        <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.15] via-purple-600/[0.1] to-pink-600/[0.15] blur-3xl"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(37, 99, 235, 0.15), rgba(147, 51, 234, 0.1), rgba(219, 39, 119, 0.15))",
            "linear-gradient(to bottom right, rgba(219, 39, 119, 0.15), rgba(37, 99, 235, 0.1), rgba(147, 51, 234, 0.15))",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        />
      </div>

      {variant === "default" && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.25, 0.3, 0.25],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <ElegantShape
              delay={0.3}
              width={600}
              height={140}
              rotate={12}
              gradient="from-blue-600/[0.45]"
              className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.03, 1],
              opacity: [0.25, 0.3, 0.25],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          >
            <ElegantShape
              delay={0.5}
              width={500}
              height={120}
              rotate={-15}
              gradient="from-pink-600/[0.45]"
              className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%] z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.3, 0.25],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
          >
            <ElegantShape
              delay={0.4}
              width={300}
              height={80}
              rotate={-8}
              gradient="from-purple-600/[0.45]"
              className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%] z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.2, 0.25, 0.2],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.7,
            }}
          >
            <ElegantShape
              delay={0.6}
              width={200}
              height={60}
              rotate={15}
              gradient="from-sky-600/[0.45]"
              className="absolute right-[15%] top-[35%] hidden md:block z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.2, 0.25, 0.2],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.3,
            }}
          >
            <ElegantShape
              delay={0.3}
              width={220}
              height={60}
              rotate={12}
              gradient="from-fuchsia-600/[0.45]"
              className="absolute left-[5%] top-[5%] z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.2, 0.25, 0.2],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
          >
            <ElegantShape
              delay={0.4}
              width={180}
              height={50}
              rotate={-15}
              gradient="from-amber-600/[0.45]"
              className="absolute right-[8%] top-[8%] z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.25, 0.2],
              y: [0, -12, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.2,
            }}
          >
            <ElegantShape
              delay={0.2}
              width={160}
              height={45}
              rotate={20}
              gradient="from-lime-600/[0.45]"
              className="absolute left-[25%] top-[3%] z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.03, 1],
              opacity: [0.2, 0.25, 0.2],
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.6,
            }}
          >
            <ElegantShape
              delay={0.5}
              width={140}
              height={40}
              rotate={-10}
              gradient="from-cyan-600/[0.45]"
              className="absolute right-[30%] top-[6%] z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.07, 1],
              opacity: [0.2, 0.25, 0.2],
              y: [0, -9, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.4,
            }}
          >
            <ElegantShape
              delay={0.6}
              width={200}
              height={55}
              rotate={8}
              gradient="from-orange-600/[0.45]"
              className="absolute left-[45%] top-[4%] z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.2, 0.25, 0.2],
              y: [0, -12, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.2,
            }}
          >
            <ElegantShape
              delay={0.2}
              width={250}
              height={70}
              rotate={20}
              gradient="from-teal-600/[0.45]"
              className="absolute left-[20%] top-[45%] hidden md:block z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.07, 1],
              opacity: [0.2, 0.25, 0.2],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.9,
            }}
          >
            <ElegantShape
              delay={0.7}
              width={180}
              height={50}
              rotate={-18}
              gradient="from-emerald-600/[0.45]"
              className="absolute right-[25%] bottom-[25%] hidden md:block z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.25, 0.2],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.4,
            }}
          >
            <ElegantShape
              delay={0.8}
              width={160}
              height={45}
              rotate={25}
              gradient="from-indigo-600/[0.45]"
              className="absolute left-[35%] top-[65%] hidden md:block z-0"
            />
          </motion.div>
        </>
      )}

      {variant === "subtle" && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.2, 0.25, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <ElegantShape
              delay={0.3}
              width={400}
              height={100}
              rotate={8}
              gradient="from-blue-600/[0.4]"
              className="absolute left-[-5%] top-[20%] z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.03, 1],
              opacity: [0.2, 0.25, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          >
            <ElegantShape
              delay={0.4}
              width={300}
              height={80}
              rotate={-12}
              gradient="from-pink-600/[0.4]"
              className="absolute right-[-5%] bottom-[20%] z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.2, 0.15],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.7,
            }}
          >
            <ElegantShape
              delay={0.5}
              width={150}
              height={40}
              rotate={10}
              gradient="from-purple-600/[0.4]"
              className="absolute right-[20%] top-[40%] hidden md:block z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.15, 0.2, 0.15],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.3,
            }}
          >
            <ElegantShape
              delay={0.6}
              width={140}
              height={40}
              rotate={15}
              gradient="from-teal-600/[0.4]"
              className="absolute left-[25%] bottom-[35%] hidden md:block z-0"
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.15, 0.2, 0.15],
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.8,
            }}
          >
            <ElegantShape
              delay={0.4}
              width={120}
              height={35}
              rotate={-20}
              gradient="from-sky-600/[0.4]"
              className="absolute right-[35%] top-[30%] hidden md:block z-0"
            />
          </motion.div>
        </>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  )
}

