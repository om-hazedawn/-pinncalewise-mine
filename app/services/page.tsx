"use client";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "../components/page-header";
import { AnimatedCard } from "../components/animated-card";
import { SectionWrapper } from "../components/section-wrapper";
import { ButtonGradient } from "../components/button-gradient";
import { useLanguage } from "../context/language-context";
import Link from "next/link";

const content = {
  en: {
    header: {
      title: "Our Services",
      description:
        "Comprehensive professional service solutions for your business",
    },
    services: [
      {
        title: "Company Registration",
        description:
          "Fast and professional Hong Kong company registration service to help you start your business easily.",
        features: [
          "Registration completed in 1-3 working days",
          "Professional advice",
          "One-stop service",
          "Reasonable fees",
        ],
      },
      {
        title: "Company Secretary Service",
        description:
          "Comprehensive company secretary services to ensure your company complies with legal requirements.",
        features: [
          "Annual returns",
          "Document filing",
          "Share transfer",
          "Company information updates",
        ],
      },
      {
        title: "Accounting Service",
        description:
          "Professional accounting services to help you manage your company's financial status.",
        features: [
          "Bookkeeping",
          "Financial statements",
          "Payroll processing",
          "Tax planning",
        ],
      },
      {
        title: "Audit Service",
        description:
          "Professional audit services in accordance with Hong Kong accounting standards.",
        features: [
          "Statutory audit",
          "Special audit",
          "Internal audit",
          "Due diligence",
        ],
      },
      {
        title: "Tax Service",
        description: "Comprehensive tax consulting and filing services.",
        features: [
          "Profits tax filing",
          "Tax planning",
          "Tax refund application",
          "Tax optimization advice",
        ],
      },
      {
        title: "Virtual Office",
        description:
          "Professional virtual office services to establish your corporate image.",
        features: [
          "Business address",
          "Mail handling",
          "Phone secretary",
          "Meeting room usage",
        ],
      },
    ],
    contact: {
      text: "Need other services? Contact us anytime, we will provide you with the most suitable solution.",
      button: "Contact Us",
    },
    learnMore: "Learn More",
  },
  zh: {
    header: {
      title: "我們的服務",
      description: "為您的企業提供全面的專業服務解決方案",
    },
    services: [
      {
        title: "公司註冊",
        description: "提供快速、專業的香港公司註冊服務，協助您輕鬆開展業務。",
        features: [
          "1-3個工作天完成註冊",
          "提供專業建議",
          "一站式服務",
          "合理收費",
        ],
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
    ],
    contact: {
      text: "需要其他服務？請隨時與我們聯繫，我們會為您提供最適合的解決方案。",
      button: "聯絡我們",
    },
    learnMore: "了解更多",
  },
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const currentContent = content[language];

  return (
    <>
      <div className="[&_*]:!text-gray-900">
        <PageHeader
          title={currentContent.header.title}
          description={currentContent.header.description}
          accent
        />
      </div>

      <SectionWrapper gradient>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.services.map((service, index) => (
              <AnimatedCard key={service.title} delay={index * 0.1}>
                <CardHeader>
                  <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <div className="flex-grow">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <ArrowRight className="h-4 w-4 text-primary mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative z-10 mt-auto">
                    <Link
                      href={(() => {
                        switch (service.title) {
                          case "Company Registration":
                          case "公司註冊":
                            return "/company-formation";
                          case "Company Secretary Service":
                          case "公司秘書服務":
                            return "/company-secretary";
                          case "Accounting Service":
                          case "會計服務":
                            return "/accounting";
                          case "Audit Service":
                          case "審計服務":
                            return "/audit";
                          case "Tax Service":
                          case "稅務服務":
                            return "/tax-filing";
                          case "Virtual Office":
                          case "虛擬辦公室":
                            return "/other-services/virtual-office";
                          default:
                            return "/contact";
                        }
                      })()}
                      className="block"
                    >
                      <ButtonGradient className="w-full text-white">
                        <span className="flex items-center justify-center">
                          {currentContent.learnMore}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </ButtonGradient>
                    </Link>
                  </div>
                </CardContent>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            {currentContent.contact.text}
          </p>
          <Link href="/contact">
            <ButtonGradient className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:from-indigo-600 hover:to-rose-600">
              {currentContent.contact.button}
            </ButtonGradient>
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
