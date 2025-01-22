'use client'

import { motion } from "framer-motion"
import { Award, Building2, Users, Sparkles } from 'lucide-react'
import Image from "next/image"

const content = {
  en: {
    title: "About Pinnaclewise",
    subtitle: "Next-Generation AI-Powered Professional Services",
    stats: [
      { icon: Building2, title: "AI-Powered", desc: "Smart Solutions" },
      { icon: Users, title: "24/7", desc: "Automated Service" },
      { icon: Award, title: "99.9%", desc: "Accuracy Rate" }
    ],
    story: {
      title: "Our Innovation",
      text: "Pinnaclewise leverages cutting-edge artificial intelligence to revolutionize professional services. Our AI-powered platform enhances traditional accounting and auditing processes with automated data analysis, real-time error detection, and predictive insights. We combine advanced machine learning algorithms with professional expertise to deliver faster, more accurate, and more cost-effective solutions.",
      image: "/placeholder.svg?height=400&width=600"
    },
    services: {
      title: "AI-Enhanced Services",
      features: [
        {
          title: "Intelligent Audit",
          description: "Our AI systems analyze 100% of transactions, not just samples, identifying patterns and anomalies with unprecedented accuracy."
        },
        {
          title: "Automated Bookkeeping",
          description: "Real-time transaction processing and categorization with machine learning, reducing manual entry and human error."
        },
        {
          title: "Predictive Analytics",
          description: "Advanced forecasting and business intelligence powered by AI to help you make data-driven decisions."
        }
      ]
    }
  },
  zh: {
    title: "關於鼎盛智慧",
    subtitle: "新一代人工智能專業服務",
    stats: [
      { icon: Building2, title: "AI驅動", desc: "智能解決方案" },
      { icon: Users, title: "24/7", desc: "自動化服務" },
      { icon: Award, title: "99.9%", desc: "準確率" }
    ],
    story: {
      title: "我們的創新",
      text: "鼎盛智慧利用尖端人工智能革新專業服務。我們的AI驅動平台通過自動化數據分析、實時錯誤檢測和預測性洞察來增強傳統會計和審計流程。我們將先進的機器學習算法與專業知識相結合，提供更快速、更準確、更具成本效益的解決方案。",
      image: "/placeholder.svg?height=400&width=600"
    },
    services: {
      title: "AI增強服務",
      features: [
        {
          title: "智能審計",
          description: "我們的AI系統分析100%的交易，而不僅僅是樣本，以前所未有的準確度識別模式和異常。"
        },
        {
          title: "自動化記賬",
          description: "通過機器學習實現實時交易處理和分類，減少人工輸入和人為錯誤。"
        },
        {
          title: "預測分析",
          description: "由AI支持的高級預測和商業智能，幫助您做出數據驅動的決策。"
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
                className="group flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white shadow-lg border-2 border-primary/10 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {stat.title}
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 text-center transition-colors duration-300">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Story */}
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
                alt="AI Technology Visualization"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{text.services.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {text.services.features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}