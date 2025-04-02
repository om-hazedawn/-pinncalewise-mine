"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, FileText } from "lucide-react"
import { openWhatsApp } from "@/lib/utils/whatsapp"
import { useLanguage } from "../context/language-context"

const content = {
  en: {
    title: "Tax Filing Services",
    importantReminder: "Important Reminder",
    reminderText: "Newly established companies will receive Profits Tax Return within 18 months of establishment and must submit it along with audit report and tax computation within 3 months.",
    serviceTitle: "Tax Filing Services",
    services: {
      service1: "Profits Tax Filing",
      service2: "Employer Tax Return",
      service3: "Personal Salary Tax",
      service4: "Property Tax Filing"
    },
    featuresTitle: "Service Features",
    features: {
      feature1: "Professional Tax Advice",
      feature2: "Timely Filing",
      feature3: "Reasonable Fees",
      feature4: "Confidential Handling",
      feature5: "Tax Optimization Advice"
    },
    processTitle: "Filing Process",
    steps: {
      step1: "Document Collection",
      step2: "Tax Calculation",
      step3: "Form Filling",
      step4: "Tax Filing"
    },
    consultButton: "Consult Now",
    whatsappMessage: "Tax Services"
  },
  zh: {
    title: "報稅服務",
    importantReminder: "重要提醒",
    reminderText: "新成立的公司將在成立後18個月內收到利得稅報稅表，必須在3個月內連同核數報告及稅務計算表一併提交。",
    serviceTitle: "報稅服務範圍",
    services: {
      service1: "利得稅報稅",
      service2: "僱主報稅表",
      service3: "個人薪俸稅",
      service4: "物業稅申報"
    },
    featuresTitle: "服務特點",
    features: {
      feature1: "專業稅務建議",
      feature2: "準時申報",
      feature3: "合理收費",
      feature4: "保密處理",
      feature5: "稅務優化建議"
    },
    processTitle: "報稅流程",
    steps: {
      step1: "收集文件",
      step2: "計算稅項",
      step3: "填寫報稅表",
      step4: "提交報稅"
    },
    consultButton: "立即諮詢",
    whatsappMessage: "稅務服務"
  }
};

export default function TaxFilingPage() {
  const { language } = useLanguage();
  const currentContent = content[language];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{currentContent.title}</h1>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-yellow-500 shrink-0 mr-2 mt-0.5" />
          <div>
            <h3 className="font-semibold text-yellow-800">{currentContent.importantReminder}</h3>
            <p className="text-yellow-700">
              {currentContent.reminderText}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>{currentContent.serviceTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>{currentContent.services.service1}</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>{currentContent.services.service2}</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>{currentContent.services.service3}</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>{currentContent.services.service4}</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{currentContent.featuresTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>✓ {currentContent.features.feature1}</li>
              <li>✓ {currentContent.features.feature2}</li>
              <li>✓ {currentContent.features.feature3}</li>
              <li>✓ {currentContent.features.feature4}</li>
              <li>✓ {currentContent.features.feature5}</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">{currentContent.processTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <p>{currentContent.steps.step1}</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <p>{currentContent.steps.step2}</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <p>{currentContent.steps.step3}</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <p>{currentContent.steps.step4}</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button size="lg" onClick={() => openWhatsApp(currentContent.whatsappMessage)}>{currentContent.consultButton}</Button>
      </div>
    </div>
  )
}
