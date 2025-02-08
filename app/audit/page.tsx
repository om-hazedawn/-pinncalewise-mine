import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileCheck } from "lucide-react"

export default function AuditPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">核數服務</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">專業核數服務</h2>
          <p className="text-gray-600 mb-6">
            根據香港公司條例，所有在香港註冊的有限公司必須每年進行審計。我們提供專業的核數服務，確保您的公司符合法律要求。
          </p>
          <Button size="lg">了解更多</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>核數範圍</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FileCheck className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>財務報表審計</span>
              </li>
              <li className="flex items-start">
                <FileCheck className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>內部控制審查</span>
              </li>
              <li className="flex items-start">
                <FileCheck className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>合規性審計</span>
              </li>
              <li className="flex items-start">
                <FileCheck className="h-5 w-5 text-primary shrink-0 mr-2 mt-1" />
                <span>特殊目的審計</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>審計準備</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>會計記錄整理</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>財務報表編製</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>文件收集整理</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>審計過程</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>實地審計</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>分析程序</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>風險評估</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>審計報告</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>審計意見</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>管理建議</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                <span>改進方案</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">審計流程</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <p>前期準備</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <p>實地審計</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <p>審計測試</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <p>結果分析</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <p>出具報告</p>
          </div>
        </div>
      </div>
    </div>
  )
}

