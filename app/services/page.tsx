import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { PageHeader } from "../components/page-header"
import { AnimatedCard } from "../components/animated-card"
import { SectionWrapper } from "../components/section-wrapper"
import { ButtonGradient } from "../components/button-gradient"

const services = [
  {
    title: "公司註冊",
    description: "提供快速、專業的香港公司註冊服務，協助您輕鬆開展業務。",
    features: ["1-3個工作天完成註冊", "提供專業建議", "一站式服務", "合理收費"],
  },
  {
    title: "公司秘書服務",
    description: "提供全面的公司秘書服務，確保您的公司符合法律要求。",
    features: ["周年申報", "文件存檔", "股份轉讓", "更改公司資料"],
  },
  {
    title: "會計服務",
    description: "專業的會計服務，助您掌握公司財務狀況。",
    features: ["帳目處理", "財務報表", "薪資處理", "稅務規劃"],
  },
  {
    title: "審計服務",
    description: "根據香港會計準則提供專業的審計服務。",
    features: ["法定審計", "特別審計", "內部審計", "盡職調查"],
  },
  {
    title: "稅務服務",
    description: "提供全面的稅務諮詢和申報服務。",
    features: ["利得稅申報", "稅務規劃", "退稅申請", "稅務優化建議"],
  },
  {
    title: "虛擬辦公室",
    description: "提供專業的虛擬辦公室服務，建立企業形象。",
    features: ["商業地址", "郵件處理", "電話秘書", "會議室使用"],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="我們的服務" description="為您的企業提供全面的專業服務解決方案" accent />

      <SectionWrapper gradient>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={service.title} delay={index * 0.1}>
                <CardHeader>
                  <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ButtonGradient className="w-full text-white">了解更多</ButtonGradient>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-6 text-lg">需要其他服務？請隨時與我們聯繫，我們會為您提供最適合的解決方案。</p>
          <ButtonGradient size="lg">聯絡我們</ButtonGradient>
        </div>
      </SectionWrapper>
    </>
  )
}
