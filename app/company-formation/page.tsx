import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CompanyFormationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">開公司</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>香港公司註冊服務</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">我們提供專業的香港公司註冊服務，協助您快速成立有限公司。</p>
            <ul className="space-y-2 mb-6">
              <li>✓ 快速處理，1-3個工作天完成</li>
              <li>✓ 專業建議及指導</li>
              <li>✓ 一站式服務</li>
              <li>✓ 合理收費</li>
            </ul>
            <Button className="w-full">立即申請</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>所需文件</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>1. 董事及股東身份證/護照副本</li>
              <li>2. 董事及股東住址證明</li>
              <li>3. 公司名稱（中英文）</li>
              <li>4. 公司註冊地址</li>
              <li>5. 業務性質</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">註冊流程</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <p>提交所需文件</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <p>核實資料</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <p>提交公司註冊處</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <p>領取公司文件</p>
          </div>
        </div>
      </div>
    </div>
  )
}

