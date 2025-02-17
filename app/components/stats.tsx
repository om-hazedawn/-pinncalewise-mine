"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock } from "lucide-react"
import { useLanguage } from "../context/language-context"

const stats = {
  en: [
    {
      title: "10+ Years",
      description: "Of Excellence",
      icon: Award,
    },
    {
      title: "1000+",
      description: "Satisfied Clients",
      icon: Users,
    },
    {
      title: "24/7",
      description: "Award Winning Support",
      icon: Clock,
    },
  ],
  zh: [
    {
      title: "10+年",
      description: "專業經驗",
      icon: Award,
    },
    {
      title: "1000+",
      description: "滿意客戶",
      icon: Users,
    },
    {
      title: "24/7",
      description: "專業支援服務",
      icon: Clock,
    },
  ],
}

export function Stats() {
  const { language } = useLanguage()
  const currentStats = stats[language]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <stat.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

