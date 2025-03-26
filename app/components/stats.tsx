"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Award, Users, Clock } from "lucide-react"
import { useLanguage } from "../context/language-context"

// Define TypeScript interfaces
interface StatItem {
  title: string;
  value: number;
  unit: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface StatsData {
  en: StatItem[];
  zh: StatItem[];
}

interface CounterProps {
  value: number;
  unit: string;
  duration?: number;
}

const stats: StatsData = {
  en: [
    {
      title: "10+ Years",
      value: 10,
      unit: "+",
      description: "Of Excellence",
      icon: Award,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "1000+",
      value: 1000,
      unit: "+",
      description: "Satisfied Clients",
      icon: Users,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "24/7",
      value: 24,
      unit: "/7",
      description: "Award Winning Support",
      icon: Clock,
      color: "from-amber-500 to-orange-600",
    },
  ],
  zh: [
    {
      title: "10+年",
      value: 10,
      unit: "+",
      description: "專業經驗",
      icon: Award,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "1000+",
      value: 1000,
      unit: "+",
      description: "滿意客戶",
      icon: Users,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "專業支援",
      value: 24,
      unit: "/7",
      description: "專業支援服務",
      icon: Clock,
      color: "from-amber-500 to-orange-600",
    },
  ],
}

// Simplified Counter component with better performance
const Counter = ({ value, unit, duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  
  useEffect(() => {
    if (!inView) return
    
    let start = 0
    const end = Math.min(value, 999)
    const step = Math.ceil(end / 20) // Reduce number of updates
    const incrementTime = Math.floor((duration * 1000) / (end / step))
    
    const timer = setInterval(() => {
      start = Math.min(start + step, end)
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, incrementTime)
    
    return () => clearInterval(timer)
  }, [inView, value, duration])
  
  return <span ref={ref}>{inView ? count : 0}{unit}</span>
}

export function Stats() {
  const { language } = useLanguage()
  const currentStats = stats[language as keyof StatsData]
  const controls = useAnimation()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Simplified blob animations with reduced complexity for mobile */}
      <style jsx>{`
        @media (min-width: 768px) {
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(20px, -20px) scale(1.1); }
          }
          .animate-blob {
            animation: blob 10s infinite ease-in-out;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        }
      `}</style>
      
      {/* Background elements only shown on desktop */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10"
        >
          {currentStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1,
                  transition: { 
                    duration: 0.5,
                    ease: "easeOut"
                  } 
                }
              }}
              className="relative"
            >
              <div className="flex flex-col h-full bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color} w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 shadow-md`}>
                  <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                
                <h3 className={`text-3xl md:text-4xl font-bold mb-2 md:mb-3 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                  <Counter value={stat.value} unit={stat.unit} />
                </h3>
                
                <p className="text-base md:text-lg font-medium mb-2">{stat.title}</p>
                <p className="text-gray-600 text-sm md:text-base mt-auto">{stat.description}</p>
                
                {/* Simpler line animation */}
                <div className={`h-1 bg-gradient-to-r ${stat.color} mt-4 md:mt-6 w-1/3 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
