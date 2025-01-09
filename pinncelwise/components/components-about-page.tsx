'use client'

import { motion } from "framer-motion"
import { Award, Building2, Users, Sparkles } from 'lucide-react'
import Image from "next/image"

const content = {
  en: {
    title: "About Pinnaclewise",
    subtitle: "Your trusted partner in professional company services since 2013",
    stats: [
      { icon: Building2, title: "10+ Years", desc: "Of Excellence" },
      { icon: Users, title: "1000+", desc: "Satisfied Clients" },
      { icon: Award, title: "Award Winning", desc: "Services" }
    ],
    story: {
      title: "Our Story",
      text: "Founded in 2013, Pinnaclewise has grown from a small startup to one of Hong Kong's leading professional services firms. Our journey has been marked by continuous innovation and an unwavering commitment to excellence.",
      image: "/placeholder.svg?height=400&width=600"
    },
    team: {
      title: "Our Leadership Team",
      members: [
        {
          name: "Adam Ho",
          title: "Founder & CEO",
          image: "/placeholder.svg?height=300&width=300"
        },
        {
          name: "Sarah Chen",
          title: "Chief Operations Officer",
          image: "/placeholder.svg?height=300&width=300"
        },
        {
          name: "Michael Wong",
          title: "Head of Legal Services",
          image: "/placeholder.svg?height=300&width=300"
        }
      ]
    }
  },
  zh: {
    title: "關於鼎盛智慧",
    subtitle: "您自2013年以來值得信賴的專業公司服務夥伴",
    stats: [
      { icon: Building2, title: "10年以上", desc: "專業經驗" },
      { icon: Users, title: "1000+", desc: "滿意客戶" },
      { icon: Award, title: "屢獲殊榮", desc: "專業服務" }
    ],
    story: {
      title: "我們的故事",
      text: "鼎盛智慧成立於2013年，從小型初創企業成長為香港領先的專業服務公司。 我們的旅程以持續的創新和對卓越的不懈追求為標誌。",
      image: "/placeholder.svg?height=400&width=600"
    },
    team: {
      title: "我們的領導團隊",
      members: [
        {
          name: "何先生",
          title: "創始人兼首席執行官",
          image: "/placeholder.svg?height=300&width=300"
        },
        {
          name: "陳小姐",
          title: "首席營運官",
          image: "/placeholder.svg?height=300&width=300"
        },
        {
          name: "王先生",
          title: "法律服務負責人",
          image: "/placeholder.svg?height=300&width=300"
        }
      ]
    }
  }
}

export function AboutPage({ language = 'en' }: { language?: 'en' | 'zh' }) {
  const text = content[language]
  
  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 pointer-events-none" />
      
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <motion.div 
            className="flex flex-col items-center space-y-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="relative w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="absolute -top-8 -left-8 text-secondary w-8 h-8 hidden sm:block" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-high-contrast">
                {text.title}
              </h1>
              <Sparkles className="absolute -bottom-8 -right-8 text-primary w-8 h-8 hidden sm:block" />
            </motion.div>
            <p className="mx-auto max-w-[700px] text-medium-contrast text-lg sm:text-xl lg:text-2xl">
              {text.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {text.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white shadow-lg border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-high-contrast">{stat.title}</h3>
                <p className="text-medium-contrast text-center">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{text.story.title}</h2>
              <p className="text-muted-foreground md:text-lg">{text.story.text}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src={text.story.image}
                alt="Company office"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{text.team.title}</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">Meet the experts who make it all possible</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {text.team.members.map((member, index) => (
              <motion.div 
                key={member.name}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}