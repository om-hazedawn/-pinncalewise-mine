"use client"

import { useLanguage } from "../context/language-context"

const content = {
  en: {
    title: "Privacy Policy",
    sections: [
      {
        title: "Data Collection",
        description: "We may collect the following types of personal information including but not limited to:",
        items: [
          "Name",
          "Contact information (e.g., phone number, email address)",
          "Identification documents",
          "Business-related information"
        ]
      },
      {
        title: "Data Usage",
        description: "The collected personal information will be used for:",
        items: [
          "Processing your service requests",
          "Providing customer support",
          "Improving our services",
          "Complying with legal requirements"
        ]
      },
      {
        title: "Data Protection",
        description: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, use, or disclosure."
      },
      {
        title: "Data Retention",
        description: "We will only retain your personal data for as long as necessary to fulfill the purposes for which it was collected or to comply with legal requirements."
      },
      {
        title: "Contact Us",
        description: "If you have any questions about our privacy policy, please contact us:",
        contact: {
          email: "pinnwiselimited@gmail.com",
          phone: "+852 9531 1156",
          address: "Room 3, 17/F, Trendy Centre, 682 Castle Peak Road, Lai Chi Kok, Kowloom"
        }
      }
    ]
  },
  zh: {
    title: "私隱政策",
    sections: [
      {
        title: "資料收集",
        description: "我們可能收集的個人資料類型包括但不限於：",
        items: [
          "姓名",
          "聯絡資料（如電話號碼、電郵地址）",
          "身份證明文件",
          "業務相關資料"
        ]
      },
      {
        title: "資料使用",
        description: "收集的個人資料將用於：",
        items: [
          "處理您的服務請求",
          "提供客戶支援",
          "改善我們的服務",
          "遵守法律要求"
        ]
      },
      {
        title: "資料保護",
        description: "我們採取適當的技術和組織措施來保護您的個人資料，防止未經授權的訪問、使用或披露。"
      },
      {
        title: "資料保留",
        description: "我們只會在必要的時間內保留您的個人資料，以實現收集資料的目的或遵守法律要求。"
      },
      {
        title: "聯絡我們",
        description: "如果您對我們的私隱政策有任何疑問，請聯絡我們：",
        contact: {
          email: "電郵：pinnwiselimited@gmail.com",
          phone: "電話：+852 9531 1156",
          address: "荔枝角青山道682號潮流工貿中心17樓3室"
        }
      }
    ]
  }
}

export default function PrivacyPage() {
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
            {section.contact && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>{section.contact.email}</p>
                <p>{section.contact.phone}</p>
                <p>{section.contact.address}</p>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}

