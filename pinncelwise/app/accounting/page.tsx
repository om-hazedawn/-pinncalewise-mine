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

export default function AccountingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const mainServices = [
    { title: '開公司', items: ['公司註冊', '商業登記', '公司開戶'] },
    { title: '會計服務', items: ['帳目製作', '財務報表', '管理會計'] },
    { title: '公司秘書', items: ['合規服務', '文件存檔', '周年申報'] },
    { title: '報稅服務', items: ['利得稅申報', '薪俸稅申報', '物業稅申報'] },
    { title: '核數服務', items: ['法定審計', '特別審計', '盡職調查'] },
    { title: '商標註冊', items: ['商標申請', '商標續期', '商標轉讓'] }
  ]

  const additionalServices = [
    { title: '法律服務', items: ['法律諮詢', '合約審閱', '爭議解決'] },
    { title: '按揭轉介', items: ['按揭諮詢', '利率比較', '貸款申請'] },
    { title: '中小企貸款', items: ['貸款評估', '申請協助', '還款計劃'] },
    { title: '經核證真實副本', items: ['文件核證', '公證服務'] },
    { title: '企業電郵', items: ['郵箱設置', '域名註冊', '技術支援'] },
    { title: '公司開戶', items: ['銀行介紹', '開戶協助', '文件準備'] }
  ]

  return (
    <div ref={containerRef}>
      <div className="relative">
        <ServiceHero 
          title="專業會計服務"
          subtitle="毅思會計 (AC Accounting) 是一間專業會計公司，成立自2013年，服務超過3000間中小企"
          imageUrl="/images/accounting-hero.jpg"
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
                <AnimatedCounter end={3000} suffix="+" />
              </div>
              <p className="text-muted-foreground">服務企業</p>
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
              <p className="text-muted-foreground">專業經驗</p>
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
              <p className="text-muted-foreground">專業支援</p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              毅思會計創辦人 Adam Ho 有超過15年會計專業經驗，是特許公認會計師公會資深會員 (FCCA)，
              香港稅務學會資深會員 (FTIHK)，亦是香港信託及公司服務提供者持牌人 
              (牌照編號 : TC009660) / （先前編號 TC004835）。
            </p>
          </div>
        </div>
      </motion.section>

      <ParallaxSection className="bg-muted/50 py-16">
        <FeatureSection 
          title="主要服務"
          features={mainServices}
        />
      </ParallaxSection>

      <ParallaxSection className="bg-white py-16" baseVelocity={-3}>
        <FeatureSection 
          title="其他商業支援服務"
          features={additionalServices}
        />
      </ParallaxSection>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            為何選擇我們？
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <HoverCardEffect>
              <div className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">專業可靠</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    價錢合理，專注協助中小企發展
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    免費諮詢，讓客戶了解法定責任
                  </li>
                </ul>
              </div>
            </HoverCardEffect>

            <HoverCardEffect>
              <div className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">高效便捷</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    一條龍服務，節省客戶成本和時間
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    事前部署安排，節省不必要稅款
                  </li>
                </ul>
              </div>
            </HoverCardEffect>
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
          title="聯絡我們"
          description="如對毅思會計的服務有任何疑問，我們樂意解答"
          phone="(852) 3580 1380"
          whatsapp="(852) 6706 0903"
        />
      </motion.div>
    </div>
  )
}
