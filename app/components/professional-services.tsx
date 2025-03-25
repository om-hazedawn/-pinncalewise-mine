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
      title: "Set up a Limited Company",
      description:
        "Setting up a limited company is a legal form of business suited for entrepreneurs seeking limited liability. It requires completing business registration, submitting company name, shareholder and director details, and setting up registered capital. A limited company enjoys legal independence, protecting shareholders' personal assets, making it easier to attract investment, enhance business credibility, and support long-term development.",
    },
    {
      title: "Set up a Unlimited Company",
      description:
        "Setting up an unlimited company is a simple and flexible business structure, operated by one or more individuals who bear unlimited liability. The registration process is straightforward and cost-effective, making it suitable for small or family-run businesses. However, owners are fully responsible for company debts, which involves higher risks. Choosing this structure requires careful evaluation of risks and rewards.",
    },
    {
      title: "Company Secretary",
      description:
        "Company secretarial services primarily assist businesses in complying with legal and administrative requirements. This includes preparing board meeting minutes, managing company documents, handling annual filings, and ensuring corporate compliance. Such services alleviate management burdens, enhance operational efficiency, and are ideal for businesses aiming for professional management and long-term stability.",
    },
  ],
  zh: [
    {
      title: "開有限公司",
      description: "開設有限公司是一種受法律保護的企業形式，適合有限責任需求的創業者。需完成商業登記、提交公司名稱、股東及董事資料、設定注冊資本等程序。有限公司具有法律獨立性，能保護股東個人資產，同時便於吸引投資及提升企業信譽，助力業務長遠發展。",
    },
    {
      title: "開無限公司",
      description: "開設無限公司是一種簡單且靈活的企業形式，由一人或多人經營，業主需承擔無限責任。無限公司設立手續簡便，成本較低，適合小型或家庭式業務，但業主需對公司債務全權負責，風險較高。選擇此類結構需謹慎評估風險與回報。",
    },
    {
      title: "公司秘書",
      description: "公司秘書服務主要協助企業遵守法律及行政要求，包括編制董事會會議記錄、管理公司文檔、處理年度申報及維護公司合規性。此服務能減輕管理負擔，提升運營效率，適合追求專業管理及長期穩定發展的企業。",
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
          {language === "en" ? "Professional Services" : "專業服務"}
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
