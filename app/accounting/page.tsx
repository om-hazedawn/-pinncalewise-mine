'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { openWhatsApp } from "@/app/utils/whatsapp"
import { useLanguage } from "../context/language-context"

const content = {
  en: {
    title: "Accounting Services",
    subtitle: "Professional Accounting Services",
    description: "According to Chapter 622 of the Hong Kong Companies Ordinance, limited companies must prepare annual financial statements and maintain relevant accounting records. We provide comprehensive accounting services to ensure your business complies with legal requirements.",
    buttonText: "Inquire Now",
    serviceRange: "Service Scope",
    services: {
      service1: "Preparation of Management Accounts",
      service2: "Financial Statement Preparation",
      service3: "Bank Reconciliation",
      service4: "Accounts Receivable Management",
      service5: "Accounts Payable Management"
    },
    packages: {
      basic: {
        title: "Basic Accounting Service",
        items: [
          "Monthly Accounting Records",
          "Income and Expenditure Records",
          "Basic Financial Statements",
          "Quarterly Review"
        ]
      },
      advanced: {
        title: "Advanced Accounting Service",
        items: [
          "Complete Accounting Records",
          "Detailed Financial Statements",
          "Cash Flow Analysis",
          "Monthly Financial Review"
        ]
      },
      professional: {
        title: "Professional Accounting Service",
        items: [
          "Comprehensive Accounting Management",
          "Financial Analysis Report",
          "Budget Planning",
          "Professional Financial Advice"
        ]
      }
    }
  },
  zh: {
    title: "會計理賬",
    subtitle: "專業會計服務",
    description: "根據香港公司條例第622章，有限公司必須準備年度財務報表及保存相關會計記錄。我們提供全面的會計服務，確保您的業務符合法律要求。",
    buttonText: "立即查詢",
    serviceRange: "服務範圍",
    services: {
      service1: "編製管理賬目",
      service2: "編製財務報表",
      service3: "銀行對賬",
      service4: "應收賬款管理",
      service5: "應付賬款管理"
    },
    packages: {
      basic: {
        title: "基本會計服務",
        items: [
          "每月會計記錄整理",
          "收支記錄",
          "基本財務報表",
          "每季度審查"
        ]
      },
      advanced: {
        title: "進階會計服務",
        items: [
          "完整會計記錄",
          "詳細財務報表",
          "現金流量分析",
          "每月財務審查"
        ]
      },
      professional: {
        title: "專業會計服務",
        items: [
          "全面會計管理",
          "財務分析報告",
          "預算規劃",
          "專業財務建議"
        ]
      }
    }
  }
};

export default function AccountingPage() {
  const { language } = useLanguage()
  const currentContent = content[language]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{currentContent.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">{currentContent.subtitle}</h2>
          <p className="text-gray-600 mb-6">
            {currentContent.description}
          </p>
          <Button size="lg"
            onClick={() =>
              openWhatsApp(
                language === "zh"
                  ? `會計服務查詢`
                  : `Accounting management service inquiry`
              )}>{currentContent.buttonText}</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{currentContent.serviceRange}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>{currentContent.services.service1}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>{currentContent.services.service2}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>{currentContent.services.service3}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>{currentContent.services.service4}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>{currentContent.services.service5}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>{currentContent.packages.basic.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {currentContent.packages.basic.items.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{currentContent.packages.advanced.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {currentContent.packages.advanced.items.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{currentContent.packages.professional.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {currentContent.packages.professional.items.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
