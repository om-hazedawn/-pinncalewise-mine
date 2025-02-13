"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "../context/language-context"
import { Button } from "@/components/ui/button"
import { openWhatsApp } from "@/app/utils/whatsapp"

const annualPlans = {
  en: [
    {
      name: "Basic Plan",
      price: "$2,800",
      period: "/year",
      totalPrice: "Total: $2,800/year",
      features: [
        "Company Secretary Service",
        "Annual Return Filing",
        "Business Registration Renewal",
        "Unlimited Change of Company Secretary Details",
        "Unlimited Document Authentication",
      ],
    },
    {
      name: "Standard Plan",
      price: "$3,800",
      period: "/year",
      totalPrice: "Total: $3,800/year",
      features: [
        "All Basic Plan Features",
        "Virtual Office Service",
        "Mail Handling & Forwarding",
        "Unlimited Change of Director Details",
        "Unlimited Change of Registered Address",
      ],
    },
    {
      name: "Premium Plan",
      price: "$4,800",
      period: "/year",
      totalPrice: "Total: $4,800/year",
      features: [
        "All Standard Plan Features",
        "Dedicated Account Manager",
        "Priority Support",
        "Free Company Chop",
        "Free Company Kit",
      ],
    },
  ],
  zh: [
    {
      name: "基本計劃",
      price: "$2,800",
      period: "/年",
      totalPrice: "總計: $2,800/年",
      features: [
        "公司秘書服務",
        "周年申報表提交",
        "商業登記證續期",
        "無限次更改公司秘書資料",
        "無限次文件認證",
      ],
    },
    {
      name: "標準計劃",
      price: "$3,800",
      period: "/年",
      totalPrice: "總計: $3,800/年",
      features: [
        "包含基本計劃所有服務",
        "虛擬辦公室服務",
        "郵件處理及轉發",
        "無限次更改董事資料",
        "無限次更改註冊地址",
      ],
    },
    {
      name: "高級計劃",
      price: "$4,800",
      period: "/年",
      totalPrice: "總計: $4,800/年",
      features: [
        "包含標準計劃所有服務",
        "專屬客戶經理",
        "優先支援服務",
        "免費公司印章",
        "免費公司文件套裝",
      ],
    },
  ],
}

const services = {
  en: [
    { name: "Virtual Office", price: "$900", note: "/year" },
    { name: "Annual Return", price: "$605", note: "($500 + $105 government fee)" },
    { name: "Business Operation Notice", price: "$300" },
    { name: "Change Company Name", price: "$795", note: "($500 + $295 government fee)" },
    { name: "Change Registered Address", price: "$500" },
    { name: "Change Branch Address", price: "$500" },
    { name: "Change Director/Company Secretary Details", price: "$300" },
    { name: "Director Appointment/Resignation Notice", price: "$500" },
    { name: "Add Alternate Director", price: "$500" },
    { name: "Company Secretary Appointment/Resignation", price: "$300" },
    {
      name: "Share Allotment",
      price: "$1200",
      note: "(for cash consideration) (non-cash consideration: price to be discussed)",
    },
    { name: "Significant Controllers Register", price: "$500" },
    { name: "Apply for Branch Business Registration", price: "$580", note: "($500 + $80 government fee)" },
    { name: "Change Business Name", price: "$300" },
    { name: "Change Business Nature", price: "$300" },
  ],
  zh: [
    { name: "虛擬辦公室", price: "$900", note: "/年" },
    { name: "周年申報表", price: "$605", note: "($500 + $105 政府費)" },
    { name: "通知開業", price: "$300" },
    { name: "更改公司名稱", price: "$795", note: "($500 + $295 政府費)" },
    { name: "更改公司註冊地址", price: "$500" },
    { name: "更改公司分行地址", price: "$500" },
    { name: "更改董事/公司秘書詳情資料", price: "$300" },
    { name: "董事委任/辭任通知", price: "$500" },
    { name: "新增侯補董事", price: "$500" },
    { name: "公司秘書委任/辭任", price: "$300" },
    { name: "公司股份配發", price: "$1200", note: "(如屬現金代價) (屬非現金代價: 價錢另對議)" },
    { name: "重要控制人登記冊", price: "$500" },
    { name: "申請分行商業登記證", price: "$580", note: "($500 + $80 政府費)" },
    { name: "更改業務名稱", price: "$300" },
    { name: "更改業務性質", price: "$300" },
  ],
}

export function SecretaryServicesPricing() {
  const { language } = useLanguage()
  const currentServices = services[language]
  const currentPlans = annualPlans[language]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === "en" ? "Annual Company Secretary Service Plans" : "年度公司秘書服務計劃"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-primary">
                      {plan.price}
                      <span className="text-base font-normal text-gray-500">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary shrink-0 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() =>
                      openWhatsApp({
                        name: plan.name,
                        price: plan.price,
                        period: plan.period,
                        totalPrice: plan.totalPrice,
                        features: plan.features,
                        language,
                      })
                    }
                  >
                    {language === "en" ? "Get Started" : "立即開始"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">
          {language === "en" ? "Other Secretary Services" : "其他秘書服務"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-grow">
                      <h3 className="font-medium">{service.name}</h3>
                      {service.note && <p className="text-sm text-gray-500 mt-1">{service.note}</p>}
                    </div>
                    <div className="text-lg font-semibold text-primary ml-4">{service.price}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
