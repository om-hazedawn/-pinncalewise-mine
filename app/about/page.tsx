import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Building } from "lucide-react"
import { PageHeader } from "../components/page-header"
import { AnimatedCard } from "../components/animated-card"
import { SectionWrapper } from "../components/section-wrapper"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <PageHeader title="關於我們" description="專業、可靠的企業服務夥伴" />

        <SectionWrapper>
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600 mb-6">
              毅思秘書有限公司成立於香港，專門提供全面的公司服務解決方案。我們的專業團隊擁有豐富的經驗，致力於為客戶提供高質素的服務。
            </p>

            <p className="text-lg text-gray-600 mb-6">
              我們的使命是協助企業成長，提供專業的建議和支援，確保客戶的業務運作符合香港法律要求。
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <AnimatedCard delay={0.1}>
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">10+ 年經驗</h3>
                <p className="text-gray-600">專業服務經驗</p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">1000+</h3>
                <p className="text-gray-600">滿意客戶</p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7</h3>
                <p className="text-gray-600">客戶支援</p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <CardContent className="p-6 text-center">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">專業團隊</h3>
                <p className="text-gray-600">資深顧問</p>
              </CardContent>
            </AnimatedCard>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">我們的優勢</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">專業服務</h3>
                <p className="text-gray-600">我們的團隊擁有豐富的專業知識和經驗，能夠為客戶提供最適切的解決方案。</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">一站式服務</h3>
                <p className="text-gray-600">從公司註冊到會計審計，我們提供全面的企業服務，滿足客戶的各種需求。</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">靈活方案</h3>
                <p className="text-gray-600">我們提供靈活的服務方案，能夠根據客戶的具體需求進行調整。</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">優質支援</h3>
                <p className="text-gray-600">我們提供全天候的客戶支援，確保客戶的需求得到及時處理。</p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="text-center">
          <h2 className="text-2xl font-bold mb-6">準備開始？</h2>
          <p className="text-gray-600 mb-6">聯絡我們，了解更多關於我們的服務</p>
          <Button size="lg">立即諮詢</Button>
        </SectionWrapper>
      </div>
    </div>
  )
}

