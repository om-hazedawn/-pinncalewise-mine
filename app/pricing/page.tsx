"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useLanguage } from "../context/language-context"

const content = {
  en: {
    header: {
      title: "Service Pricing",
      subtitle: "Transparent pricing standards, reasonable service fees"
    },
    services: [
      {
        category: "Company Registration Services",
        items: [
          { name: "Register Hong Kong Limited Company", price: "HK$2,500", note: "from" },
          { name: "Company Name Change", price: "HK$795", note: "(including government fee)" },
          { name: "Branch Registration", price: "HK$580", note: "(including government fee)" },
        ],
      },
      {
        category: "Company Secretary Services",
        items: [
          { name: "Basic Company Secretary Service", price: "HK$800", note: "/year" },
          { name: "Annual Return", price: "HK$605", note: "(including government fee)" },
          { name: "Change of Director Information", price: "HK$300", note: "/time" },
        ],
      },
      {
        category: "Accounting Services",
        items: [
          { name: "Basic Accounting Service", price: "HK$1,000", note: "/month from" },
          { name: "Financial Statement Preparation", price: "HK$3,000", note: "/year from" },
          { name: "Payroll Processing", price: "HK$100", note: "/person/month" },
        ],
      },
      {
        category: "Audit Services",
        items: [
          { name: "Annual Audit", price: "HK$3,800", note: "from" },
          { name: "Special Audit", price: "Negotiable", note: "" },
          { name: "Internal Audit", price: "Negotiable", note: "" },
        ],
      },
    ],
    servicePromises: {
      title: "Service Promises",
      items: [
        {
          title: "Transparent Pricing",
          description: "All fees are clearly stated, no hidden charges"
        },
        {
          title: "Professional Service",
          description: "Quality service provided by professional team"
        },
        {
          title: "Flexible Solutions",
          description: "Customized services based on your needs"
        }
      ]
    },
    contact: {
      text: "Need a detailed quote? Contact us and we'll provide you with the most suitable solution.",
      button: "Inquire Now"
    }
  },
  zh: {
    header: {
      title: "服務收費",
      subtitle: "透明的收費標準，合理的服務價格"
    },
    services: [
      {
        category: "公司註冊服務",
        items: [
          { name: "註冊香港有限公司", price: "HK$2,500", note: "起" },
          { name: "公司更改名稱", price: "HK$795", note: "(包括政府費用)" },
          { name: "註冊分行", price: "HK$580", note: "(包括政府費用)" },
        ],
      },
      {
        category: "公司秘書服務",
        items: [
          { name: "基本公司秘書服務", price: "HK$800", note: "/年" },
          { name: "周年申報表", price: "HK$605", note: "(包括政府費用)" },
          { name: "更改董事資料", price: "HK$300", note: "/次" },
        ],
      },
      {
        category: "會計服務",
        items: [
          { name: "基本會計服務", price: "HK$1,000", note: "/月起" },
          { name: "編製財務報表", price: "HK$3,000", note: "/年起" },
          { name: "薪資處理", price: "HK$100", note: "/人/月" },
        ],
      },
      {
        category: "審計服務",
        items: [
          { name: "周年審計", price: "HK$3,800", note: "起" },
          { name: "特別審計", price: "議價", note: "" },
          { name: "內部審計", price: "議價", note: "" },
        ],
      },
    ],
    servicePromises: {
      title: "服務承諾",
      items: [
        {
          title: "透明收費",
          description: "所有費用清晰列明，絕無隱藏收費"
        },
        {
          title: "專業服務",
          description: "由專業團隊提供優質服務"
        },
        {
          title: "靈活方案",
          description: "根據需求提供客製化服務"
        }
      ]
    },
    contact: {
      text: "需要更詳細的報價？請與我們聯繫，我們會為您提供最適合的方案。",
      button: "立即諮詢"
    }
  }
}

export default function PricingPage() {
  const { language } = useLanguage()
  const currentContent = content[language]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{currentContent.header.title}</h1>
        <p className="text-xl text-gray-600">{currentContent.header.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentContent.services.map((service) => (
          <Card key={service.category}>
            <CardHeader>
              <CardTitle>{service.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {service.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      {item.note && <p className="text-sm text-gray-500">{item.note}</p>}
                    </div>
                    <div className="text-lg font-semibold text-primary">{item.price}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>{currentContent.servicePromises.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentContent.servicePromises.items.map((item) => (
                <div key={item.title} className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">{currentContent.contact.text}</p>
        <Link href="/contact">
          <Button className="text-lg">{currentContent.contact.button}</Button>
        </Link>
      </div>
    </div>
  )
}

