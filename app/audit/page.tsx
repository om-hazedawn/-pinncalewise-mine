"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileCheck } from "lucide-react"
import { openWhatsApp } from "@/lib/utils/whatsapp"
import { useLanguage } from "../context/language-context"

const content = {
  en: {
    title: "Audit Services",
    professionalTitle: "Professional Audit Services",
    professionalDescription: "According to Hong Kong Companies Ordinance, all limited companies registered in Hong Kong must undergo an annual audit. We provide professional audit services to ensure your company complies with legal requirements.",
    auditScopeTitle: "Audit Scope",
    auditScope: {
      scope1: "Financial Statement Audit",
      scope2: "Internal Control Review",
      scope3: "Compliance Audit",
      scope4: "Special Purpose Audit"
    },
    auditPreparationTitle: "Audit Preparation",
    auditPreparation: {
      prep1: "Accounting Records Organization",
      prep2: "Financial Statement Preparation",
      prep3: "Document Collection"
    },
    auditProcessTitle: "Audit Process",
    auditProcessItems: {
      process1: "On-site Audit",
      process2: "Analysis Procedures",
      process3: "Risk Assessment"
    },
    auditReportTitle: "Audit Report",
    auditReport: {
      report1: "Audit Opinion",
      report2: "Management Suggestions",
      report3: "Improvement Plans"
    },
    auditFlowTitle: "Audit Flow",
    auditFlow: {
      flow1: "Preparation",
      flow2: "On-site Audit",
      flow3: "Audit Testing",
      flow4: "Result Analysis",
      flow5: "Report Issuance"
    },
    learnMore: "Learn More",
    whatsappMessage: "I want to learn more about audit services"
  },
  zh: {
    title: "核數服務",
    professionalTitle: "專業核數服務",
    professionalDescription: "根據香港公司條例，所有在香港註冊的有限公司必須每年進行審計。我們提供專業的核數服務，確保您的公司符合法律要求。",
    auditScopeTitle: "核數範圍",
    auditScope: {
      scope1: "財務報表審計",
      scope2: "內部控制審查",
      scope3: "合規性審計",
      scope4: "特殊目的審計"
    },
    auditPreparationTitle: "審計準備",
    auditPreparation: {
      prep1: "會計記錄整理",
      prep2: "財務報表編製",
      prep3: "文件收集整理"
    },
    auditProcessTitle: "審計過程",
    auditProcessItems: {
      process1: "實地審計",
      process2: "分析程序",
      process3: "風險評估"
    },
    auditReportTitle: "審計報告",
    auditReport: {
      report1: "審計意見",
      report2: "管理建議",
      report3: "改進方案"
    },
    auditFlowTitle: "審計流程",
    auditFlow: {
      flow1: "前期準備",
      flow2: "實地審計",
      flow3: "審計測試",
      flow4: "結果分析",
      flow5: "出具報告"
    },
    learnMore: "了解更多",
    whatsappMessage: "我想了解更多關於核數服務"
  }
};

export default function AuditPage() {
  const { language } = useLanguage();
  const currentContent = content[language];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{currentContent.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">{currentContent.professionalTitle}</h2>
          <p className="text-gray-600 mb-6">
            {currentContent.professionalDescription}
          </p>
          <Button size="lg" onClick={() => openWhatsApp(currentContent.whatsappMessage)}>{currentContent.learnMore}</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{currentContent.auditScopeTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FileCheck className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>{currentContent.auditScope.scope1}</span>
              </li>
              <li className="flex items-start">
                <FileCheck className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>{currentContent.auditScope.scope2}</span>
              </li>
              <li className="flex items-start">
                <FileCheck className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>{currentContent.auditScope.scope3}</span>
              </li>
              <li className="flex items-start">
                <FileCheck className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>{currentContent.auditScope.scope4}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>{currentContent.auditPreparationTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>{currentContent.auditPreparation.prep1}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>{currentContent.auditPreparation.prep2}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>{currentContent.auditPreparation.prep3}</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{currentContent.auditProcessTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>{currentContent.auditProcessItems.process1}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>{currentContent.auditProcessItems.process2}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>{currentContent.auditProcessItems.process3}</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{currentContent.auditReportTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>{currentContent.auditReport.report1}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>{currentContent.auditReport.report2}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>{currentContent.auditReport.report3}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">{currentContent.auditFlowTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <p>{currentContent.auditFlow.flow1}</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <p>{currentContent.auditFlow.flow2}</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <p>{currentContent.auditFlow.flow3}</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <p>{currentContent.auditFlow.flow4}</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <p>{currentContent.auditFlow.flow5}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
