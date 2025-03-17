'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AccountingPage() {
  const scrollToFooter = () => {
    const footer = document.querySelector('footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">會計理賬</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">專業會計服務</h2>
          <p className="text-gray-600 mb-6">
            根據香港公司條例第622章，有限公司必須準備年度財務報表及保存相關會計記錄。我們提供全面的會計服務，確保您的業務符合法律要求。
          </p>
          <Button size="lg" onClick={scrollToFooter}>立即查詢</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>服務範圍</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>編製管理賬目</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>編製財務報表</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>銀行對賬</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>應收賬款管理</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>應付賬款管理</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>基本會計服務</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>✓ 每月會計記錄整理</li>
              <li>✓ 收支記錄</li>
              <li>✓ 基本財務報表</li>
              <li>✓ 每季度審查</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>進階會計服務</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>✓ 完整會計記錄</li>
              <li>✓ 詳細財務報表</li>
              <li>✓ 現金流量分析</li>
              <li>✓ 每月財務審查</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>專業會計服務</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>✓ 全面會計管理</li>
              <li>✓ 財務分析報告</li>
              <li>✓ 預算規劃</li>
              <li>✓ 專業財務建議</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

