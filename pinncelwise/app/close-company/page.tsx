import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Gift, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function CloseCompanyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">
          【東山再起！】註銷公司服務 <br />
          <span className="text-primary">100% 回贈「東山再起現金券」</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          我們了解結束生意的不容易，手續上和情感上也是。
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="https://wa.me/85298168489">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp 查詢
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6">專業服務承諾</h2>
          <div className="space-y-4">
            <p>
              手續上，Pinnacle Wise 專業團隊會為你處理註銷公司的繁瑣程序，安排註銷公司審計服務，確保註銷過程中的數據清晰明確，助你順利保持合法合規，好頭好尾地結束這一個回合。
            </p>
            <p>
              情感上，我們相信今日的結束不是永遠的完結，所以我們為註銷公司客戶送上 100% 回贈的「東山再起現金券」！即是今次註銷公司所付的服務費，會於下次成立公司時全部回贈給你！
            </p>
            <p className="font-medium">
              未來有著無限的機會和可能性，Pinnacle Wise 期待與你一起迎接下個目標！
            </p>
          </div>
        </div>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Gift className="mr-2 h-5 w-5 text-primary" />
            「東山再起現金券」條款細則
          </h3>
          <ul className="space-y-3 text-sm">
            <li>• 僅適用於使用 Pinnacle Wise 註銷公司服務的客戶</li>
            <li>• 「100% 回贈」指 Pinnacle Wise 收取之註銷公司服務費，不包括審計費用、政府費用或罰款等</li>
            <li>• 此推廣計劃不適用於破產或清盤訴訟服務</li>
            <li>• 現金券有效期為三年，適用於支付開新公司、虛擬辧公室、公司秘書服務費用</li>
            <li>• 如遇遺失或大幅度的損毀，恕不補發</li>
            <li>• 現金券的使用權不可轉讓他人，也無法兌換為現金</li>
            <li>• 此優惠不可與其他優惠同時使用</li>
            <li>• Pinnacle Wise 保留隨時暫停、更改或終止優惠及不時修訂有關條款及細則的權利，毋須另行通知</li>
          </ul>
        </Card>
      </div>

      {/* Requirements Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">申請撤銷註冊香港有限公司必須符合之條件</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "該公司的所有成員均同意撤銷註冊",
            "該公司仍未開始營運或經營業務，或在緊接提出申請之前的3個月內沒有營運或經營業務",
            "該公司沒有尚未清償的債務",
            "該公司不是任何法律程序的一方",
            "該公司的資產不包含位於香港的不動產",
            "該公司的所有附屬公司的資產均不包含位於香港的不動產",
            "該公司已取得稅務局局長的《不反對撤銷公司註冊通知書》"
          ].map((requirement, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
              <span>{requirement}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">服務收費</h2>
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">政府費用（實報實銷）</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>周年申報表費</span>
                  <span>HK$105</span>
                </li>
                <li className="flex justify-between">
                  <span>向稅務局申請不反對通知書</span>
                  <span>HK$270</span>
                </li>
                <li className="flex justify-between">
                  <span>向公司註冊處申請撤銷註冊及刊登憲報</span>
                  <span>HK$420</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">服務費用</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>服務費</span>
                  <span>HK$2,200</span>
                </div>
                <div className="flex justify-between font-bold pt-3 border-t">
                  <span>合共（優惠價）</span>
                  <span>HK$2,795</span>
                </div>
                <p className="text-sm text-muted-foreground">*所需時間約12個月</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Process Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">撤銷香港有限公司的程序</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">1</div>
            <p>客戶填寫申請表格後，連同公司之商業登記証、公司註冊証及最近期之週年申報表副本，交回予Pinnacle Wise。</p>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">2</div>
            <p>Pinnacle Wise將有專人與客戶聯絡，核實所需資料是否齊備，以及跟進後續撤銷公司手續事宜。</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 text-center">
        <Button asChild size="lg">
          <Link href="https://wa.me/85298168489">
            <MessageCircle className="mr-2 h-5 w-5" />
            立即諮詢
          </Link>
        </Button>
        <div className="mt-4 text-sm text-muted-foreground">
          電話：+852 9816 8489 | 電郵：info@pinnaclewise.com | WhatsApp: +852 9816 8489
        </div>
      </div>
    </div>
  )
}
