"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, FileText } from "lucide-react"
import { openWhatsApp } from "@/lib/utils/whatsapp"

export default function TaxFilingPage() {
  const scrollToFooter = () => {
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">報稅服務</h1>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-yellow-500 shrink-0 mr-2 mt-0.5" />
          <div>
            <h3 className="font-semibold text-yellow-800">重要提醒</h3>
            <p className="text-yellow-700">
              新成立的公司將在成立後18個月內收到利得稅報稅表，必須在3個月內連同核數報告及稅務計算表一併提交。
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>報稅服務範圍</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>利得稅報稅</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>僱主報稅表</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>個人薪俸稅</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>物業稅申報</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>服務特點</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>✓ 專業稅務建議</li>
              <li>✓ 準時申報</li>
              <li>✓ 合理收費</li>
              <li>✓ 保密處理</li>
              <li>✓ 稅務優化建議</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">報稅流程</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <p>收集文件</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <p>計算稅項</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <p>填寫報稅表</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <p>提交報稅</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
      <Button size="lg" onClick={() => openWhatsApp("稅務服務")}>立即諮詢</Button>
      </div>
    </div>
  )
}

