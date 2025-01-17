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

export default function TaxServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const taxServices = [
    { title: '薪俸稅', items: ['報稅表填寫', '稅務計算', '扣稅項目'] },
    { title: '利得稅', items: ['報稅表填寫', '稅務計算', '扣稅項目'] },
    { title: '物業稅', items: ['報稅表填寫', '稅務計算', '扣稅項目'] }
  ]

  const propertyTaxItems = [
    { title: '應評稅值', description: '租金收入 - 地租 = 應評稅值' },
    { title: '應繳稅款', description: '應評稅值 x 15% = 應繳稅款' },
    { title: '扣除項目', description: '維修及支出寬免 (應評稅值的20%)' }
  ]

  return (
    <div ref={containerRef}>
      <div className="relative">
        <ServiceHero 
          title="專業報稅服務"
          subtitle="毅思會計提供全面的報稅服務，包括薪俸稅、利得稅及物業稅申報"
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
              <p className="text-muted-foreground">年稅務經驗</p>
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
              <p className="text-muted-foreground">成功報稅個案</p>
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
              <p className="text-muted-foreground">客戶滿意度</p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              我們的專業團隊熟悉香港稅務條例，能為您提供最適合的稅務建議，
              協助您合法節省稅款，並確保準時遞交報稅表，避免罰款。
            </p>
          </div>
        </div>
      </motion.section>

      <ParallaxSection className="bg-muted/50 py-16">
        <FeatureSection 
          title="報稅服務"
          features={taxServices}
        />
      </ParallaxSection>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            物業稅計算示例
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyTaxItems.map((item, index) => (
              <HoverCardEffect key={index}>
                <div className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </HoverCardEffect>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">示例計算：</h3>
              <div className="space-y-4">
                <p>假設每月租金收入為$15,000：</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>全年租金收入：$15,000 × 12 = $180,000</li>
                  <li>減去地租（假設$100/月）：$180,000 - ($100 × 12) = $178,800</li>
                  <li>應評稅值：$178,800</li>
                  <li>減去20%維修及支出寬免：$178,800 × 80% = $143,040</li>
                  <li>應繳稅款：$143,040 × 15% = $21,456</li>
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
            重要提示
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <HoverCardEffect>
              <div className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">報稅期限</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    個人報稅表：5月初至6月初
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    公司報稅表：收到報稅表後一個月內
                  </li>
                </ul>
              </div>
            </HoverCardEffect>

            <HoverCardEffect>
              <div className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">所需文件</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    薪俸稅：僱主發出的IR56B表格
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    物業稅：租約及收租記錄
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
          description="如對報稅服務有任何疑問，歡迎隨時聯絡我們"
          phone="(852) 3580 1380"
          whatsapp="(852) 6706 0903"
        />
      </motion.div>
    </div>
  )
}
