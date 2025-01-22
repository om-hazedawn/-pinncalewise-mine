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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Steps } from '@/components/steps'

interface WithLanguageProps {
  language?: 'en' | 'zh'
}

export default function OpenCompanyPage({ language = 'en' }: WithLanguageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const companyTypes = [
    {
      title: '法律地位',
      limited: '公司屬於法人組織，有著獨立之法律地位',
      unlimited: '私人名義或合夥人名義運作，且均無法律地位'
    },
    {
      title: '債務清償責任',
      limited: '上限為股東的出資額，不須另行出資償還虧損',
      unlimited: '無上限，東主需以個人資產償還公司所有虧損'
    },
    {
      title: '稅率',
      limited: '16.5%',
      unlimited: '15%'
    },
    {
      title: '特點',
      limited: '具法人地位，當有訴訟或財務責任時，股東毋須負責',
      unlimited: '當有訴訟或財務責任時，股東須負責'
    }
  ]

  const registrationSteps = [
    {
      title: '選擇公司類別及擬訂公司名稱',
      description: '選擇成立有限公司或無限公司後，擬訂心儀的公司名稱並到公司註冊處的網上查冊中心查看名稱有否已被登記使用'
    },
    {
      title: '遞交公司申請文件及繳費',
      description: '透過網上申請、親身遞交或郵寄所需文件及費用'
    },
    {
      title: '領取公司註冊證明書及商業登記證',
      description: '申請人可領取公司註冊證明書及商業登記證'
    },
    {
      title: '領取所需牌照或許可證',
      description: '視乎業務需要，可申請所需的牌照、許可證、證書及批准書'
    }
  ]

  const fees = [
    {
      item: '公司註冊費',
      fee: 'HK$1,720'
    },
    {
      item: '商業登記費及徵費（一年期）',
      fee: 'HK$250'
    },
    {
      item: '商業登記費及徵費（三年期）',
      fee: 'HK$3,950'
    }
  ]

  const requiredDocs = [
    '法團成立表格（NNC1或NNC1G表格）',
    '致商業登記署通知書（IRBR1表格）',
    '公司組織章程細則表格'
  ]

  const greenBox = [
    '公司章程',
    '公司鋼印',
    '公司簽名印',
    '公司圓印',
    '股票簿',
    '法定記錄冊'
  ]

  return (
    <div ref={containerRef}>
      <ServiceHero 
        title="香港公司註冊"
        subtitle="專業高效的公司註冊服務，一站式企業服務讓成立公司流程輕鬆容易"
        imageUrl="/images/company-hero.jpg"
      />

      <motion.section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <p className="text-muted-foreground">工作天完成註冊</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">
                HK$<AnimatedCounter end={1720} />
              </div>
              <p className="text-muted-foreground">起註冊費用</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={3000} suffix="+" />
              </div>
              <p className="text-muted-foreground">成功註冊個案</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <ParallaxSection className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            公司類型比較
          </motion.h2>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>項目</TableHead>
                  <TableHead>有限公司</TableHead>
                  <TableHead>無限公司</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companyTypes.map((type, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{type.title}</TableCell>
                    <TableCell>{type.limited}</TableCell>
                    <TableCell>{type.unlimited}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            註冊流程
          </motion.h2>

          <Steps steps={registrationSteps} />
        </div>
      </section>

      <ParallaxSection className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            費用及所需文件
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <HoverCardEffect>
              <div className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">註冊費用</h3>
                <ul className="space-y-4">
                  {fees.map((fee, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>{fee.item}</span>
                      <span className="font-bold">{fee.fee}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </HoverCardEffect>

            <HoverCardEffect>
              <div className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">所需文件</h3>
                <ul className="space-y-2">
                  {requiredDocs.map((doc, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </HoverCardEffect>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            公司綠盒
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <HoverCardEffect>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  新《公司條例》簡化公司簽立文件方式，公司可自行選擇是否備有及使用法團印章。
                  但即使法例上沒有規定必須擁有綠盒，綠盒的作用在運作上仍然不可缺乏，如簽合約要方印、
                  借貸要鋼印、簽收文件要圓印等。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {greenBox.map((item, index) => (
                    <div key={index} className="flex items-center bg-muted/30 rounded-lg p-4">
                      <span className="mr-2">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
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
          description="如對成立香港公司有任何疑問，我們的專業顧問樂意為您解答"
          phone="+852 9531 1156"
          whatsapp="+852 9531 1156"
        />
      </motion.div>
    </div>
  )
}
