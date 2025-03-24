"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { openContactForm } from "@/app/utils/contact"
import { useLanguage } from "../context/language-context"

const services = {
  en: [
    {
      title: "Share Transfer",
      description:
        "Share transfers occur for various reasons including business transfers, shareholding ratio changes, shareholder withdrawals, or addition of new shareholders.",
    },
    {
      title: "Accounting Services",
      description:
        "According to Hong Kong Companies Ordinance Cap. 622, limited companies must prepare annual financial statements and maintain relevant accounting records.",
    },
    {
      title: "Limited Company Tax Filing",
      description:
        "Newly established companies will receive a profits tax return within 18 months of establishment, which must be submitted with audit report and tax computation within 3 months.",
    },
  ],
  zh: [
    {
      title: "開有限公司",
      description: "股份轉讓可能因業務轉讓、持股比例變更、股東退出或新增股東等各種原因而發生。",
    },
    {
      title: "開無限公司",
      description: "根據香港公司條例第622章，有限公司必須準備年度財務報表及保存相關會計記錄。",
    },
    {
      title: "公司秘書",
      description: "新成立的公司將在成立後18個月內收到利得稅報稅表，必須在3個月內連同核數報告及稅務計算表一併提交。",
    },
  ],
}

export function ProfessionalServices() {
  const { language } = useLanguage()
  const currentServices = services[language]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === "en" ? "Other Professional Services" : "其他專業服務"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Button className="w-full mt-auto" onClick={() => openContactForm(service.title)}>
                    {language === "en" ? "Apply for Service" : "申請服務"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
