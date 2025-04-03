"use client"

import { useLanguage } from "../context/language-context"

const content = {
  en: {
    title: "Terms of Service",
    sections: [
      {
        title: "Service Scope",
        description: "Our services include but are not limited to:",
        items: [
          "Company Registration",
          "Company Secretary Services",
          "Accounting Services",
          "Audit Services",
          "Tax Services"
        ]
      },
      {
        title: "Service Fees",
        description: "All service fees will be clearly stated before service commencement. Clients are required to pay the relevant fees before services begin."
      },
      {
        title: "Limitation of Liability",
        description: "While we strive to provide quality services, we are not liable for delays or errors caused by force majeure factors."
      },
      {
        title: "Service Termination",
        description: "We reserve the right to terminate services in the following circumstances:",
        items: [
          "Client violates terms of service",
          "Client fails to pay fees on time",
          "Client provides false information"
        ]
      },
      {
        title: "Governing Law",
        description: "These terms of service are governed by the laws of Hong Kong SAR. Any disputes will be resolved under Hong Kong law."
      }
    ]
  },
  zh: {
    title: "服務條款",
    sections: [
      {
        title: "服務範圍",
        description: "我們提供的服務包括但不限於：",
        items: [
          "公司註冊",
          "公司秘書服務",
          "會計服務",
          "審計服務",
          "稅務服務"
        ]
      },
      {
        title: "服務費用",
        description: "所有服務費用將在服務開始前明確列出。客戶需要在服務開始前支付相關費用。"
      },
      {
        title: "責任限制",
        description: "我們將盡力提供優質服務，但不對因不可抗力因素導致的延誤或失誤承擔責任。"
      },
      {
        title: "終止服務",
        description: "我們保留在以下情況終止服務的權利：",
        items: [
          "客戶違反服務條款",
          "客戶未能及時支付費用",
          "客戶提供虛假資料"
        ]
      },
      {
        title: "法律適用",
        description: "本服務條款受香港特別行政區法律管轄。任何爭議將根據香港法律解決。"
      }
    ]
  }
}

export default function TermsPage() {
  const { language } = useLanguage()
  const currentContent = content[language]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{currentContent.title}</h1>

      <div className="prose max-w-none">
        {currentContent.sections.map((section, index) => (
          <section key={section.title} className={index < currentContent.sections.length - 1 ? "mb-8" : ""}>
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="mb-4">{section.description}</p>
            {section.items && (
              <ul className="list-disc pl-6 mb-4">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}

