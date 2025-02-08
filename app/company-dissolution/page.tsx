import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CompanyDissolutionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">註銷公司</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>公司註銷服務</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">我們提供專業的公司註銷服務，協助您合法地結束公司業務。</p>
            <ul className="space-y-2 mb-6">
              <li>✓ 專業指導</li>
              <li>✓ 完整程序處理</li>
              <li>✓ 合理收費</li>
              <li>✓ 保密服務</li>
            </ul>
            <Button className="w-full">了解更多</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>註銷方式</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">撤銷註冊</h3>
                <p className="text-gray-600">適用於沒有營運、沒有負債的公司，處理時間約4-5個月。</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">自動清盤</h3>
                <p className="text-gray-600">適用於有資產的公司，股東自願結束公司。</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">註銷流程</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <p>評估公司狀況</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <p>選擇註銷方式</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <p>準備所需文件</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <p>提交申請</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <p>完成註銷</p>
          </div>
        </div>
      </div>
    </div>
  )
}

