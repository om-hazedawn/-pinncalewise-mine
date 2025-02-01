'use client'

import { ServiceHero } from '@/components/service-hero'
import { FeatureSection } from '@/components/feature-section'
import { ContactSection } from '@/components/contact-section'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { AnimatedCounter } from '@/components/animated-counter'
import { ParallaxSection } from '@/components/parallax-section'
import { HoverCardEffect } from '@/components/hover-card-effect'
import { FloatingElements } from '@/components/floating-elements'
import { useRef } from 'react'
import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/metadata'

interface WithLanguageProps {
  language?: 'en' | 'zh'
}

export default function TaxServicesClient({ language = 'en' }: WithLanguageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const content = {
    en: {
      hero: {
        title: "Professional Tax Services",
        subtitle: "Comprehensive tax services including Salaries Tax, Profits Tax, and Property Tax filing"
      },
      stats: {
        experience: "Years of Experience",
        cases: "Successful Tax Cases",
        satisfaction: "Client Satisfaction"
      },
      description: "Our professional team is well-versed in Hong Kong tax regulations, providing you with optimal tax advice, helping you save tax legally, and ensuring timely submission of tax returns to avoid penalties.",
      services: [
        { title: 'Salaries Tax', items: ['Tax Return Filing', 'Tax Calculation', 'Allowances & Deductions'] },
        { title: 'Profits Tax', items: ['Tax Return Filing', 'Tax Calculation', 'Deductible Expenses'] },
        { title: 'Property Tax', items: ['Tax Return Filing', 'Tax Calculation', 'Allowable Deductions'] }
      ],
      propertyTax: {
        title: "Property Tax Calculation Example",
        items: [
          { title: 'Assessable Value', description: 'Rental Income - Government Rent = Assessable Value' },
          { title: 'Tax Payable', description: 'Assessable Value x 15% = Tax Payable' },
          { title: 'Deductions', description: 'Repairs & Outgoings Allowance (20% of Assessable Value)' }
        ],
        example: {
          title: "Example Calculation:",
          intro: "Assuming monthly rental income of $15,000:",
          steps: [
            "Annual rental income: $15,000 × 12 = $180,000",
            "Less government rent (assume $100/month): $180,000 - ($100 × 12) = $178,800",
            "Assessable Value: $178,800",
            "Less 20% allowance for repairs: $178,800 × 80% = $143,040",
            "Tax payable: $143,040 × 15% = $21,456"
          ]
        }
      },
      important: {
        title: "Important Notes",
        deadlines: {
          title: "Filing Deadlines",
          items: [
            "Individual Tax Return: Early May to Early June",
            "Company Tax Return: Within one month of receipt"
          ]
        },
        documents: {
          title: "Required Documents",
          items: [
            "Salaries Tax: IR56B form from employer",
            "Property Tax: Tenancy agreement and rental records"
          ]
        }
      },
      contact: {
        title: "Contact Us",
        description: "If you have any questions about our tax services, we're here to help"
      }
    },
    zh: {
      hero: {
        title: "專業報稅服務",
        subtitle: "毅思會計提供全面的報稅服務，包括薪俸稅、利得稅及物業稅申報"
      },
      stats: {
        experience: "年稅務經驗",
        cases: "成功報稅個案",
        satisfaction: "客戶滿意度"
      },
      description: "我們的專業團隊熟悉香港稅務條例，能為您提供最適合的稅務建議，協助您合法節省稅款，並確保準時遞交報稅表，避免罰款。",
      services: [
        { title: '薪俸稅', items: ['報稅表填寫', '稅務計算', '扣稅項目'] },
        { title: '利得稅', items: ['報稅表填寫', '稅務計算', '扣稅項目'] },
        { title: '物業稅', items: ['報稅表填寫', '稅務計算', '扣稅項目'] }
      ],
      propertyTax: {
        title: "物業稅計算示例",
        items: [
          { title: '應評稅值', description: '租金收入 - 地租 = 應評稅值' },
          { title: '應繳稅款', description: '應評稅值 x 15% = 應繳稅款' },
          { title: '扣除項目', description: '維修及支出寬免 (應評稅值的20%)' }
        ],
        example: {
          title: "示例計算：",
          intro: "假設每月租金收入為$15,000：",
          steps: [
            "全年租金收入：$15,000 × 12 = $180,000",
            "減去地租（假設$100/月）：$180,000 - ($100 × 12) = $178,800",
            "應評稅值：$178,800",
            "減去20%維修及支出寬免：$178,800 × 80% = $143,040",
            "應繳稅款：$143,040 × 15% = $21,456"
          ]
        }
      },
      important: {
        title: "重要提示",
        deadlines: {
          title: "報稅期限",
          items: [
            "個人報稅表：5月初至6月初",
            "公司報稅表：收到報稅表後一個月內"
          ]
        },
        documents: {
          title: "所需文件",
          items: [
            "薪俸稅：僱主發出的IR56B表格",
            "物業稅：租約及收租記錄"
          ]
        }
      },
      contact: {
        title: "聯絡我們",
        description: "如對稅務服務有任何疑問，我們樂意解答"
      }
    }
  }

  const text = content[language]

  return (
    <div ref={containerRef}>
      <div className="relative">
        <ServiceHero 
          title={text.hero.title}
          subtitle={text.hero.subtitle}
          imageUrl="/images/tax-hero.jpg"
        />
        <FloatingElements className="z-0" />
      </div>

      <motion.section
        style={{ opacity, scale }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-muted-foreground">{text.stats.experience}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={5000} suffix="+" />
              </div>
              <p className="text-muted-foreground">{text.stats.cases}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="text-muted-foreground">{text.stats.satisfaction}</p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              {text.description}
            </p>
          </div>
        </div>
      </motion.section>

      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <FeatureSection
            title={language === 'en' ? "Tax Services" : "報稅服務"}
            features={text.services}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            {text.propertyTax.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {text.propertyTax.items.map((item, index) => (
              <Card
                key={index}
                className="p-6 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">{text.propertyTax.example.title}</h3>
              <div className="space-y-4">
                <p>{text.propertyTax.example.intro}</p>
                <ol className="list-decimal list-inside space-y-2">
                  {text.propertyTax.example.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            {text.important.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-4">{text.important.deadlines.title}</h3>
                <ul className="space-y-2">
                  {text.important.deadlines.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-4">{text.important.documents.title}</h3>
                <ul className="space-y-2">
                  {text.important.documents.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ContactSection
          title={text.contact.title}
          description={text.contact.description}
          phone="+852 9531 1156"
          whatsapp="+852 9531 1156"
        />
      </motion.div>
    </div>
  )
}
