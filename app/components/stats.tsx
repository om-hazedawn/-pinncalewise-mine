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

// Animated counter component
const Counter = ({ value, unit, duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, threshold: 0.3 })
  
  useEffect(() => {
    if (!inView) return
    
    let start = 0
    const end = Math.min(value, 999)
    const incrementTime = Math.floor(duration * 1000 / end)
    
    const timer = setInterval(() => {
      start += 1
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
  const inView = useInView(ref, { once: true, threshold: 0.2 })
  
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Add CSS keyframes for blob animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      
      {/* Background elements for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
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
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {currentStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { 
                  y: 0, 
                  opacity: 1,
                  transition: { 
                    duration: 0.8, 
                    ease: [0.4, 0, 0.2, 1]
                  } 
                }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500 -z-10"
                   style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.03), transparent)` }} />
                   
              <div className="flex flex-col h-full bg-white rounded-xl shadow-xl p-8 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color} w-16 h-16 flex items-center justify-center mb-6 shadow-md transform transition-transform group-hover:scale-110 duration-500`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className={`text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                  <Counter value={stat.value} unit={stat.unit} />
                </h3>
                
                <p className="text-lg font-medium mb-2">{stat.title}</p>
                <p className="text-gray-600 mt-auto">{stat.description}</p>
                
                {/* Animated line */}
                <div className={`w-0 h-1 bg-gradient-to-r ${stat.color} mt-6 group-hover:w-full transition-all duration-700 ease-out rounded-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
