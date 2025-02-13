"use client"

import { useLanguage } from "@/app/context/language-context"
import { PageHeader } from "@/app/components/page-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const content = {
  en: {
    title: "Virtual Office Services",
    subtitle: "Professional Business Address & Mail Handling",
    description: "Establish a prestigious business presence without the overhead of a physical office.",
    features: [
      {
        title: "Professional Business Address",
        description: "Get a prestigious business address in Hong Kong for your company registration and correspondence."
      },
      {
        title: "Mail Handling & Forwarding",
        description: "We receive, sort, and forward your mail to your preferred address or scan and email them to you."
      },
      {
        title: "Call Answering Service",
        description: "Professional receptionists handle your calls during business hours in your company name."
      },
      {
        title: "Meeting Room Access",
        description: "Access to well-equipped meeting rooms when you need to meet clients or hold meetings."
      }
    ],
    pricing: [
      {
        title: "Basic Plan",
        price: "HK$1,800",
        period: "/year",
        features: [
          "Business Address",
          "Mail Notification",
          "Mail Collection",
          "Mail Forwarding (fees apply)",
        ]
      },
      {
        title: "Standard Plan",
        price: "HK$2,800",
        period: "/year",
        features: [
          "All Basic Plan features",
          "Call Answering Service",
          "Message Forwarding",
          "2 Hours Meeting Room Usage/month",
        ]
      },
      {
        title: "Premium Plan",
        price: "HK$3,800",
        period: "/year",
        features: [
          "All Standard Plan features",
          "Dedicated Phone Number",
          "Mail Scanning Service",
          "5 Hours Meeting Room Usage/month",
        ]
      }
    ]
  },
  zh: {
    title: "虛擬辦公室服務",
    subtitle: "專業商業地址及郵件處理",
    description: "無需實體辦公室的開支，即可建立專業的商業形象。",
    features: [
      {
        title: "專業商業地址",
        description: "為您的公司註冊和通訊提供香港商業地址。"
      },
      {
        title: "郵件處理和轉發",
        description: "我們接收、分類並轉發您的郵件到指定地址，或掃描後通過電子郵件發送給您。"
      },
      {
        title: "電話接聽服務",
        description: "專業接待員在營業時間以您公司名義處理來電。"
      },
      {
        title: "會議室使用",
        description: "需要與客戶會面或舉行會議時，可使用設備完善的會議室。"
      }
    ],
    pricing: [
      {
        title: "基本計劃",
        price: "HK$1,800",
        period: "/年",
        features: [
          "商業地址",
          "郵件通知",
          "郵件代收",
          "郵件轉發（收費）",
        ]
      },
      {
        title: "標準計劃",
        price: "HK$2,800",
        period: "/年",
        features: [
          "包含基本計劃所有功能",
          "電話接聽服務",
          "訊息轉發",
          "每月2小時會議室使用",
        ]
      },
      {
        title: "高級計劃",
        price: "HK$3,800",
        period: "/年",
        features: [
          "包含標準計劃所有功能",
          "專用電話號碼",
          "郵件掃描服務",
          "每月5小時會議室使用",
        ]
      }
    ]
  }
}

export default function VirtualOfficePage() {
  const { language } = useLanguage()
  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={currentContent.title}
        subtitle={currentContent.subtitle}
        description={currentContent.description}
      />

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === "en" ? "Pricing Plans" : "服務計劃"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.pricing.map((plan, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className="w-full">
                    {language === "en" ? "Get Started" : "立即開始"}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
