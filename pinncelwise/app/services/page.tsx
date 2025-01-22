'use client'

import { LayoutWrapper } from '@/components/components-layout-wrapper'
import { motion } from 'framer-motion'
import { Briefcase, Building2, FileText, LucideIcon, Scale, Users2 } from 'lucide-react'

const content = {
  en: {
    title: "Our Services",
    subtitle: "Comprehensive business solutions for your success",
    services: [
      {
        icon: Building2,
        title: "Company Formation",
        description: "Complete company incorporation services including business registration, company secretary, and registered office address."
      },
      {
        icon: Scale,
        title: "Legal & Compliance",
        description: "Professional legal services to ensure your business stays compliant with all regulatory requirements."
      },
      {
        icon: FileText,
        title: "Accounting & Tax",
        description: "Comprehensive accounting services including bookkeeping, tax filing, and financial reporting."
      },
      {
        icon: Users2,
        title: "HR Services",
        description: "Complete HR solutions including payroll, MPF administration, and employment contracts."
      },
      {
        icon: Briefcase,
        title: "Business Advisory",
        description: "Strategic business consulting to help your company grow and succeed in the Hong Kong market."
      }
    ]
  },
  zh: {
    title: "我們的服務",
    subtitle: "全方位的商業解決方案，助您成功",
    services: [
      {
        icon: Building2,
        title: "公司成立",
        description: "完整的公司註冊服務，包括商業登記、公司秘書和註冊辦公地址。"
      },
      {
        icon: Scale,
        title: "法律與合規",
        description: "專業的法律服務，確保您的企業符合所有監管要求。"
      },
      {
        icon: FileText,
        title: "會計與稅務",
        description: "全面的會計服務，包括記帳、報稅和財務報告。"
      },
      {
        icon: Users2,
        title: "人力資源服務",
        description: "完整的人力資源解決方案，包括薪資管理、強積金管理和僱傭合約。"
      },
      {
        icon: Briefcase,
        title: "商業諮詢",
        description: "策略性商業諮詢，幫助您的公司在香港市場成長和成功。"
      }
    ]
  }
}

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

interface WithLanguageProps {
  language?: 'en' | 'zh'
}

function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      className="p-6 rounded-2xl bg-gradient-to-br from-background via-background/95 to-background/90 shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

export default function Services({ language = 'en' }: WithLanguageProps) {
  const text = content[language]

  return (
    <LayoutWrapper>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 pointer-events-none" />
        
        <section className="relative w-full py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center space-y-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {text.title}
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl">
                {text.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {text.services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}
