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

interface Props {
  lang: string
}

const content = {
  en: {
    hero: {
      title: "Professional Accounting Services",
      subtitle: "AC Accounting, established in 2013, has served over 3000 SMEs with professional accounting expertise"
    },
    stats: {
      clients: "Clients Served",
      experience: "Years Experience",
      support: "Professional Support"
    },
    about: "AC Accounting founder Adam Ho has over 15 years of professional accounting experience. He is a Fellow Member of the Association of Chartered Certified Accountants (FCCA), Fellow Member of the Taxation Institute of Hong Kong (FTIHK), and a Licensed Trust and Company Service Provider in Hong Kong (License No.: TC009660) / (Previous No. TC004835).",
    mainServices: [
      { title: 'Company Formation', items: ['Company Registration', 'Business Registration', 'Bank Account Opening'] },
      { title: 'Accounting Services', items: ['Bookkeeping', 'Financial Statements', 'Management Accounting'] },
      { title: 'Company Secretary', items: ['Compliance Services', 'Document Filing', 'Annual Returns'] },
      { title: 'Tax Services', items: ['Profits Tax Filing', 'Salaries Tax Filing', 'Property Tax Filing'] },
      { title: 'Audit Services', items: ['Statutory Audit', 'Special Audit', 'Due Diligence'] },
      { title: 'Trademark Registration', items: ['Trademark Application', 'Trademark Renewal', 'Trademark Transfer'] }
    ],
    additionalServices: [
      { title: 'Legal Services', items: ['Legal Consultation', 'Contract Review', 'Dispute Resolution'] },
      { title: 'Mortgage Referral', items: ['Mortgage Consultation', 'Rate Comparison', 'Loan Application'] },
      { title: 'SME Loans', items: ['Loan Assessment', 'Application Assistance', 'Repayment Planning'] },
      { title: 'Certified True Copies', items: ['Document Certification', 'Notary Services'] },
      { title: 'Corporate Email', items: ['Email Setup', 'Domain Registration', 'Technical Support'] },
      { title: 'Bank Account Opening', items: ['Bank Introduction', 'Opening Assistance', 'Document Preparation'] }
    ],
    sections: {
      mainServices: "Main Services",
      otherServices: "Other Business Support Services",
      whyUs: "Why Choose Us",
      reliability: {
        title: "Professional & Reliable",
        points: [
          "Reasonable pricing, focused on SME development",
          "Free consultation to understand statutory obligations"
        ]
      },
      efficiency: {
        title: "Efficient & Convenient",
        points: [
          "One-stop service to save costs and time",
          "Pre-deployment arrangement to save unnecessary tax"
        ]
      }
    },
    contact: {
      title: "Contact Us",
      description: "If you have any questions about AC Accounting's services, we're happy to help"
    }
  },
  zh: {
    hero: {
      title: "專業會計服務",
      subtitle: "毅思會計 (AC Accounting) 是一間專業會計公司，成立自2013年，服務超過3000間中小企"
    },
    stats: {
      clients: "服務企業",
      experience: "專業經驗",
      support: "專業支援"
    },
    about: "毅思會計創辦人 Adam Ho 有超過15年會計專業經驗，是特許公認會計師公會資深會員 (FCCA)，香港稅務學會資深會員 (FTIHK)，亦是香港信託及公司服務提供者持牌人 (牌照編號 : TC009660) / （先前編號 TC004835）。",
    mainServices: [
      { title: '開公司', items: ['公司註冊', '商業登記', '公司開戶'] },
      { title: '會計服務', items: ['帳目製作', '財務報表', '管理會計'] },
      { title: '公司秘書', items: ['合規服務', '文件存檔', '周年申報'] },
      { title: '報稅服務', items: ['利得稅申報', '薪俸稅申報', '物業稅申報'] },
      { title: '核數服務', items: ['法定審計', '特別審計', '盡職調查'] },
      { title: '商標註冊', items: ['商標申請', '商標續期', '商標轉讓'] }
    ],
    additionalServices: [
      { title: '法律服務', items: ['法律諮詢', '合約審閱', '爭議解決'] },
      { title: '按揭轉介', items: ['按揭諮詢', '利率比較', '貸款申請'] },
      { title: '中小企貸款', items: ['貸款評估', '申請協助', '還款計劃'] },
      { title: '經核證真實副本', items: ['文件核證', '公證服務'] },
      { title: '企業電郵', items: ['電郵設置', '域名註冊', '技術支援'] },
      { title: '銀行開戶', items: ['銀行介紹', '開戶協助', '文件準備'] }
    ],
    sections: {
      mainServices: "主要服務",
      otherServices: "其他商業支援服務",
      whyUs: "為何選擇我們",
      reliability: {
        title: "專業可靠",
        points: [
          "收費合理，專注中小企發展",
          "免費諮詢了解法定責任"
        ]
      },
      efficiency: {
        title: "快捷方便",
        points: [
          "一站式服務節省成本及時間",
          "預先部署安排節省不必要稅項"
        ]
      }
    },
    contact: {
      title: "聯絡我們",
      description: "如果您對毅思會計的服務有任何疑問，我們很樂意為您解答"
    }
  }
}

export function AccountingClientPage({ lang }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const language = lang === 'zh' ? 'zh' : 'en'
  const text = content[language]

  return (
    <div ref={containerRef}>
      <div className="relative">
        <ServiceHero
          title={text.hero.title}
          subtitle={text.hero.subtitle}
          imageUrl="/images/accounting-hero.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 pointer-events-none" />
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
                <AnimatedCounter end={3000} suffix="+" />
              </div>
              <p className="text-muted-foreground">{text.stats.clients}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
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
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={24} suffix="/7" />
              </div>
              <p className="text-muted-foreground">{text.stats.support}</p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              {text.about}
            </p>
          </div>
        </div>
      </motion.section>

      <section className="bg-muted/50 py-16">
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
          }}
        >
          <FeatureSection
            title={text.sections.mainServices}
            features={[...text.mainServices]}
          />
        </motion.div>
      </section>

      <section className="bg-white py-16">
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
          }}
        >
          <FeatureSection
            title={text.sections.otherServices}
            features={[...text.additionalServices]}
          />
        </motion.div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            {text.sections.whyUs}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">{text.sections.reliability.title}</h3>
                <ul className="space-y-2">
                  {text.sections.reliability.points.map((point, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
  
            <motion.div
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">{text.sections.efficiency.title}</h3>
                <ul className="space-y-2">
                  {text.sections.efficiency.points.map((point, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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
