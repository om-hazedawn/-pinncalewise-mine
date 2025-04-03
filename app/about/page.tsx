"use client";

import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Building } from "lucide-react"
import { PageHeader } from "../components/page-header"
import { AnimatedCard } from "../components/animated-card"
import { SectionWrapper } from "../components/section-wrapper"
import { AnimatedCounter } from "../components/animated-counter"
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/language-context"

const content = {
  en: {
    title: "About Us",
    description: "Professional, Reliable Business Services Partner",
    introduction: "PinnacleWise Secretary Limited is established in Hong Kong, specializing in comprehensive company service solutions. Our professional team has extensive experience and is committed to providing high-quality services.",
    mission: "Our mission is to assist business growth, provide professional advice and support, ensuring clients' operations comply with Hong Kong legal requirements.",
    yearsExperience: "years experience",
    satisfiedClients: "satisfied clients",
    support: "customer support",
    professionalTeam: "Professional Team",
    seniorConsultants: "Senior Consultants",
    advantages: "Our Advantages",
    professionalService: {
      title: "Professional Services",
      description: "Our team possesses extensive professional knowledge and experience, capable of providing the most suitable solutions for clients."
    },
    oneStopService: {
      title: "One-Stop Services",
      description: "From company registration to accounting and audit, we provide comprehensive business services to meet various client needs."
    },
    flexibleSolutions: {
      title: "Flexible Solutions",
      description: "We provide flexible service solutions that can be adjusted according to clients' specific needs."
    },
    qualitySupport: {
      title: "Quality Support",
      description: "We provide round-the-clock customer support to ensure client needs are addressed promptly."
    },
    readyToStart: "Ready to Start?",
    contactUs: "Contact us to learn more about our services",
    getStarted: "Get Started"
  },
  zh: {
    title: "關於我們",
    description: "專業、可靠的企業服務夥伴",
    introduction: "慧思秘書有限公司成立於香港，專門提供全面的公司服務解決方案。我們的專業團隊擁有豐富的經驗，致力於為客戶提供高質素的服務。",
    mission: "我們的使命是協助企業成長，提供專業的建議和支援，確保客戶的業務運作符合香港法律要求。",
    yearsExperience: "年經驗",
    satisfiedClients: "滿意客戶",
    support: "客戶支援",
    professionalTeam: "專業團隊",
    seniorConsultants: "資深顧問",
    advantages: "我們的優勢",
    professionalService: {
      title: "專業服務",
      description: "我們的團隊擁有豐富的專業知識和經驗，能夠為客戶提供最適切的解決方案。"
    },
    oneStopService: {
      title: "一站式服務",
      description: "從公司註冊到會計審計，我們提供全面的企業服務，滿足客戶的各種需求。"
    },
    flexibleSolutions: {
      title: "靈活方案",
      description: "我們提供靈活的服務方案，能夠根據客戶的具體需求進行調整。"
    },
    qualitySupport: {
      title: "優質支援",
      description: "我們提供全天候的客戶支援，確保客戶的需求得到及時處理。"
    },
    readyToStart: "準備開始？",
    contactUs: "聯絡我們，了解更多關於我們的服務",
    getStarted: "立即諮詢"
  }
};

export default function AboutPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const currentContent = content[language];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title={currentContent.title}
          description={currentContent.description}
        />

        <SectionWrapper>
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600 mb-6">
              {currentContent.introduction}
            </p>

            <p className="text-lg text-gray-600 mb-6">
              {currentContent.mission}
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <AnimatedCard delay={0.1}>
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  <AnimatedCounter end={10} suffix="+" /> {currentContent.yearsExperience}
                </h3>
                <p className="text-gray-600">{currentContent.professionalService.title}</p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  <AnimatedCounter end={1000} suffix="+" />
                </h3>
                <p className="text-gray-600">{currentContent.satisfiedClients}</p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  <AnimatedCounter end={24} suffix="/7" />
                </h3>
                <p className="text-gray-600">{currentContent.support}</p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <CardContent className="p-6 text-center">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{currentContent.professionalTeam}</h3>
                <p className="text-gray-600">{currentContent.seniorConsultants}</p>
              </CardContent>
            </AnimatedCard>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">{currentContent.advantages}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">{currentContent.professionalService.title}</h3>
                <p className="text-gray-600">{currentContent.professionalService.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{currentContent.oneStopService.title}</h3>
                <p className="text-gray-600">{currentContent.oneStopService.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{currentContent.flexibleSolutions.title}</h3>
                <p className="text-gray-600">{currentContent.flexibleSolutions.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{currentContent.qualitySupport.title}</h3>
                <p className="text-gray-600">{currentContent.qualitySupport.description}</p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="text-center">
          <h2 className="text-2xl font-bold mb-6">{currentContent.readyToStart}</h2>
          <p className="text-gray-600 mb-6">{currentContent.contactUs}</p>
          <Button size="lg" onClick={() => router.push("/contact")}>{currentContent.getStarted}</Button>
        </SectionWrapper>
      </div>
    </div>
  )
}
