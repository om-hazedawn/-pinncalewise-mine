'use client';

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Building2, HeadphonesIcon, Lightbulb, UserCheck, Users } from "lucide-react"
import { Logo } from "@/components/logo"
import { Banner } from "./components-banner"
import { PricingSection } from "./components-pricing"
import { ServicesSection } from "./components-services"
import { useRouter } from "next/navigation"
import React from 'react'

interface HomePageProps {
  language?: 'en' | 'zh'
}

const content = {
  en: {
    hero: {
      company: "PinnacleWise",
      title: "Professional\nCompany Services",
      subtitle: "Your trusted partner for comprehensive business solutions. We help companies grow, innovate, and succeed.",
      buttons: {
        getStarted: "Get Started",
        learnMore: "Learn More"
      }
    },
    features: {
      title: "Why Choose Us",
      subtitle: "We deliver exceptional results through our expertise, dedication, and innovative solutions.",
      list: [
        {
          title: "Expert Team",
          description: "Our team of professionals brings years of experience and expertise to every project.",
          icon: UserCheck
        },
        {
          title: "Innovative Solutions",
          description: "We leverage cutting-edge technology and methodologies to solve complex challenges.",
          icon: Lightbulb
        },
        {
          title: "Dedicated Support",
          description: "24/7 support and guidance to ensure your business success at every step.",
          icon: HeadphonesIcon
        }
      ]
    },
    stats: [
      {
        title: "10+ Years",
        description: "Of Excellence",
        icon: Building2
      },
      {
        title: "1000+",
        description: "Satisfied Clients",
        icon: Users
      },
      {
        title: "24/7",
        description: "Award Winning Support",
        icon: HeadphonesIcon
      }
    ]
  },
  zh: {
    hero: {
      company: "鼎盛智慧",
      title: "專業公司服務",
      subtitle: "您值得信賴的全方位商業解決方案夥伴。我們幫助企業成長、創新和成功。",
      buttons: {
        getStarted: "立即開始",
        learnMore: "了解更多"
      }
    },
    features: {
      title: "為何選擇我們",
      subtitle: "我們通過專業知識、奉獻精神和創新解決方案，提供卓越成果。",
      list: [
        {
          title: "專業團隊",
          description: "我們的專業團隊為每個項目帶來多年的經驗和專業知識。",
          icon: UserCheck
        },
        {
          title: "創新解決方案",
          description: "我們運用尖端技術和方法來解決複雜的挑戰。",
          icon: Lightbulb
        },
        {
          title: "專業支援",
          description: "全天候的支援和指導，確保您的業務在每一步都能成功。",
          icon: HeadphonesIcon
        }
      ]
    },
    stats: [
      {
        title: "10+年",
        description: "卓越服務",
        icon: Building2
      },
      {
        title: "1000+",
        description: "滿意客戶",
        icon: Users
      },
      {
        title: "24/7",
        description: "獲獎支援服務",
        icon: HeadphonesIcon
      }
    ]
  }
}

export function HomePage({ language = 'en' }: HomePageProps) {
  const router = useRouter();
  const text = content[language];

  const handleGetStarted = () => {
    // WhatsApp link with Hong Kong phone number
    const whatsappUrl = `https://wa.me/85295311156`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLearnMore = () => {
    router.push('/services');  // Navigate to services page
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl font-semibold text-foreground">{text.hero.company}</span>
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground whitespace-pre-line">
                  {text.hero.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {text.hero.subtitle}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetStarted} size="lg">
                  {text.hero.buttons.getStarted}
                </Button>
                <Button onClick={handleLearnMore} variant="outline" size="lg">
                  {text.hero.buttons.learnMore}
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Banner />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection language={language} />

      {/* Pricing Section */}
      <PricingSection language={language} />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-high-contrast mb-4">
              {text.features.title}
            </h2>
            <p className="text-xl text-medium-contrast max-w-[800px] mx-auto">
              {text.features.subtitle}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {text.features.list.map((feature, index) => (
              <motion.div
                key={index}
                className="group p-6 rounded-2xl bg-white shadow-lg border-2 border-primary/10 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
