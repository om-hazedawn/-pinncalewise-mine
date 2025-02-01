'use client'

import { ServiceHero } from '@/components/service-hero'
import { FeatureSection } from '@/components/feature-section'
import { ContactSection } from '@/components/contact-section'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

interface WithLanguageProps {
  language?: 'en' | 'zh'
}

export default function SecretaryServicesClient({ language = 'en' }: WithLanguageProps) {
  const secretaryServices = [
    { 
      title: '基本秘書服務', 
      items: [
        '編制公司成員登記名冊',
        '編制公司重要控制人登記冊',
        '編制首次董事局會議',
        '處理公司註冊文件'
      ]
    },
    { 
      title: '合規服務', 
      items: [
        '提交周年申報表',
        '更新公司資料',
        '維護法定紀錄',
        '處理政府部門查詢'
      ]
    },
    { 
      title: '文件認證', 
      items: [
        '文件核證',
        '公證服務',
        '認證副本',
        '文件存檔'
      ]
    }
  ]

  const shareTransferServices = [
    { 
      title: '股份轉讓服務', 
      items: [
        '準備股份轉讓文件',
        '計算印花稅',
        '處理印花稅申報',
        '更新公司文件'
      ]
    },
    { 
      title: '印花稅服務', 
      items: [
        '印花稅計算',
        '印花稅申報',
        '逾期罰款評估',
        '稅務優化建議'
      ]
    },
    { 
      title: '其他服務', 
      items: [
        '公司註冊地址服務',
        '代收信件服務',
        '商標註冊',
        '公司註銷'
      ]
    }
  ]

  return (
    <div>
      <ServiceHero 
        title="公司秘書服務"
        subtitle="專業的公司秘書服務，確保您的公司符合香港公司條例的要求"
        imageUrl="/images/secretary-hero.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">專業可靠的秘書服務</h2>
            <p className="text-lg text-muted-foreground">
              我們提供全面的公司秘書服務，協助您的公司符合法律要求，並確保所有文件和程序都準確無誤。
              我們的專業團隊將為您處理所有相關文書工作，讓您專注於業務發展。
            </p>
          </motion.div>
        </div>
      </section>

      <FeatureSection 
        title="秘書服務範圍"
        features={secretaryServices}
      />

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">股份轉讓印花稅計算</h2>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">基本費用</h3>
                  <p className="text-muted-foreground">每份股份轉讓書港幣5元的費用</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">轉讓印花稅</h3>
                  <p className="text-muted-foreground">雙方各需繳付轉讓股份的公司淨資產的0.10% (合共0.20%)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">計算方法示例</h3>
                  <p className="text-muted-foreground">
                    如轉讓股份代表20%的權益，該公司的資產淨值是20萬元：<br />
                    印花稅金額 = (20萬 × 20%) × 0.1% × 2 + 5 = 85元
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <FeatureSection 
        title="股份轉讓及其他服務"
        features={shareTransferServices}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">注意事項</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>股份轉讓需要董事會大比數同意</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>需要在指定時限內加蓋印花</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>逾期加蓋印花會被徵收罰款</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">我們的承諾</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>專業處理所有文書工作</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>確保所有程序合法合規</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>提供詳細的諮詢服務</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection 
        title="聯絡我們"
        description="如對公司秘書服務有任何疑問，我們樂意解答"
        phone="+852 9531 1156"
        whatsapp="+852 9531 1156"
      />
    </div>
  )
}
