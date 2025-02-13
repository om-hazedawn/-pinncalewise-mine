"use client"

import { useLanguage } from "@/app/context/language-context"
import { PageHeader } from "@/app/components/page-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const content = {
  en: {
    title: "Share Transfer Services",
    subtitle: "Professional Share Transfer & Registration",
    description: "Complete share transfer services for Hong Kong companies with professional guidance and documentation.",
    features: [
      {
        title: "Documentation Preparation",
        description: "We prepare all necessary documents including Instrument of Transfer, Board Resolutions, and Share Certificates."
      },
      {
        title: "Legal Compliance",
        description: "Ensure all transfers comply with Hong Kong Companies Ordinance and your company's Articles of Association."
      },
      {
        title: "Stamp Duty Handling",
        description: "We handle stamp duty payment and documentation with the Inland Revenue Department."
      },
      {
        title: "Registry Updates",
        description: "Update all necessary company registers and file required notifications with the Companies Registry."
      }
    ],
    process: [
      {
        title: "Initial Consultation",
        description: "Review current shareholding structure and transfer requirements"
      },
      {
        title: "Document Preparation",
        description: "Prepare all necessary transfer documents and resolutions"
      },
      {
        title: "Stamp Duty Payment",
        description: "Handle stamp duty assessment and payment"
      },
      {
        title: "Registration",
        description: "Update company registers and file with authorities"
      }
    ],
    pricing: {
      title: "Share Transfer Package",
      price: "From HK$3,800",
      includes: [
        "All required documentation preparation",
        "Board resolution drafting",
        "Share certificate preparation",
        "Company register updates",
        "Stamp duty handling (duty fees not included)",
        "Companies Registry filing",
        "Professional consultation"
      ]
    }
  },
  zh: {
    title: "股份轉讓服務",
    subtitle: "專業股份轉讓及登記",
    description: "為香港公司提供完整的股份轉讓服務，包括專業指導和文件準備。",
    features: [
      {
        title: "文件準備",
        description: "我們準備所有必要文件，包括轉讓文書、董事會決議和股票。"
      },
      {
        title: "法律合規",
        description: "確保所有轉讓符合香港公司條例和貴公司的組織章程細則。"
      },
      {
        title: "印花稅處理",
        description: "我們處理印花稅支付和與稅務局的文件。"
      },
      {
        title: "登記冊更新",
        description: "更新所有必要的公司登記冊並向公司註冊處提交所需通知。"
      }
    ],
    process: [
      {
        title: "初步諮詢",
        description: "審查目前的持股結構和轉讓要求"
      },
      {
        title: "文件準備",
        description: "準備所有必要的轉讓文件和決議"
      },
      {
        title: "印花稅支付",
        description: "處理印花稅評稅和支付"
      },
      {
        title: "登記",
        description: "更新公司登記冊並向有關部門備案"
      }
    ],
    pricing: {
      title: "股份轉讓套餐",
      price: "由 HK$3,800 起",
      includes: [
        "所有必需文件準備",
        "董事會決議草擬",
        "股票準備",
        "公司登記冊更新",
        "印花稅處理（不包括稅費）",
        "公司註冊處備案",
        "專業諮詢"
      ]
    }
  }
}

export default function ShareTransferPage() {
  const { language } = useLanguage()
  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={currentContent.title}
        subtitle={currentContent.subtitle}
        description={currentContent.description}
      />

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === "en" ? "Transfer Process" : "轉讓流程"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {currentContent.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  {index < currentContent.process.length - 1 && (
                    <div className="hidden md:block w-full h-0.5 bg-blue-200 ml-4" />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {currentContent.pricing.title}
            </h3>
            <div className="text-3xl font-bold text-center mb-8">
              {currentContent.pricing.price}
            </div>
            <div className="space-y-4">
              {currentContent.pricing.includes.map((item, index) => (
                <div key={index} className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/contact">
                <Button size="lg">
                  {language === "en" ? "Get Started" : "立即開始"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
