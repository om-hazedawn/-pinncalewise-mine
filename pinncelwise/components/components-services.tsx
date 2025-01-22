'use client'

import { motion } from "framer-motion"
import { FileText, Users, Calculator } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface ServicesSectionProps {
  language?: 'en' | 'zh'
}

const content = {
  en: {
    title: "Other Professional Services",
    buttonText: "Apply for Service",
    otherServicesTitle: "Other Secretary Services",
    services: [
      {
        title: "Share Transfer",
        description: "Share transfers occur for various reasons including business transfers, shareholding ratio changes, shareholder withdrawals, or addition of new shareholders.",
        icon: Users,
      },
      {
        title: "Accounting Services",
        description: "According to Hong Kong Companies Ordinance Cap. 622, limited companies must prepare annual financial statements and maintain relevant accounting records.",
        icon: Calculator,
      },
      {
        title: "Limited Company Tax Filing",
        description: "Newly established companies will receive a profits tax return within 18 months of establishment, which must be submitted with audit report and tax computation within 3 months.",
        icon: FileText,
      }
    ]
  },
  zh: {
    title: "其他專業服務",
    buttonText: "服務申請",
    otherServicesTitle: "其他秘書服務",
    services: [
      {
        title: "股份轉讓",
        description: "公司股份轉讓時常都會發生，原因可以是生意轉讓，可以是更改股權比例，股東退股，亦可因為增添新的股東成員。",
        icon: Users,
      },
      {
        title: "會計服務",
        description: "根據香港《公司條例》第622章規定，有限公司每年必須為公司在每一年準備財務報表並保存相關會計紀錄。",
        icon: Calculator,
      },
      {
        title: "有限公司報稅",
        description: "新成立的公司會於成立起計第18個月，收到利得稅報稅表，公司須於3個月內連同審計報告和利得稅計算表遞交。",
        icon: FileText,
      }
    ]
  }
}

const additionalServices = [
  { name: "虛擬辦公室", price: "1000", unit: "年" },
  { name: "周年申報表", price: "605", note: "($500 + $105 政府費)" },
  { name: "通知開業", price: "300" },
  { name: "更改公司名稱", price: "795", note: "($500 + 295政府費)" },
  { name: "更改公司註冊地址", price: "500" },
  { name: "更改公司分行地址", price: "500" },
  { name: "更改董事/公司秘書詳情資料", price: "300" },
  { name: "董事委任/辭任通知", price: "500" },
  { name: "新增侯補董事", price: "500" },
  { name: "公司秘書委任/辭任", price: "300" },
  { name: "公司股份配發", price: "1200", note: "(如屬現金代價) (屬非現金代價: 價錢另對議)" },
  { name: "重要控制人登記冊", price: "500" },
  { name: "申請分行商業登記證", price: "580", note: "($500 + $80政府費)" },
  { name: "更改業務名稱", price: "300" },
  { name: "更改業務性質", price: "300" },
  { name: "補領商業登記證", price: "300" },
  { name: "商業登記證核證本", price: "127", note: "($100 + $27 政府費)" },
  { name: "申請不活動公司", price: "1000", note: "(包括會議紀錄)" },
  { name: "解除不活動公司", price: "800", note: "(包括會議紀錄)" },
  { name: "修改公司章程", price: "議價", note: "(另議)" },
  { name: "公司綠盒精美裝", price: "380" },
  { name: "打印公司章程 (5本)", price: "100" },
  { name: "申請股份代持", price: "1200" },
  { name: "取消分行商業登記證", price: "500" },
  { name: "備製會議紀錄", price: "500", note: "/份" }
]

export function ServicesSection({ language = 'en' }: ServicesSectionProps) {
  const text = content[language];

  return (
    <section className={cn("w-full py-12 md:py-24 lg:py-32 bg-background")}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        {/* Main Services */}
        <motion.div
          className={cn("text-center mb-16")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={cn("text-3xl sm:text-4xl font-bold text-foreground mb-4")}>
            {text.title}
          </h2>
        </motion.div>

        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8 mb-20")}>
          {text.services.map((service, index) => (
            <motion.div
              key={service.title}
              className={cn(
                "group p-6 rounded-2xl bg-white shadow-lg border-2 border-primary/10 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300"
                )}
              >
                <service.icon
                  className={cn(
                    "w-6 h-6 text-primary/70 group-hover:text-primary transition-colors duration-300"
                  )}
                />
              </div>
              <h3
                className={cn(
                  "text-xl font-bold mb-3 text-foreground/80 group-hover:text-foreground transition-colors duration-300"
                )}
              >
                {service.title}
              </h3>
              <p
                className={cn(
                  "text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                )}
              >
                {service.description}
              </p>
              <Button
                variant="link"
                className={cn("mt-4 p-0 h-auto text-primary hover:text-primary/90")}
              >
                {text.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          className={cn("bg-muted/30 rounded-2xl p-8")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3
            className={cn("text-2xl font-bold mb-6 text-foreground")}
          >
            {text.otherServicesTitle}
          </h3>
          <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4")}>
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center justify-between p-4 bg-background rounded-lg border border-border"
                )}
              >
                <span className={cn("text-muted-foreground")}>
                  {service.name}
                </span>
                <div className={cn("text-right")}>
                  <span
                    className={cn("font-medium text-foreground")}
                  >
                    ${service.price}
                  </span>
                  {service.unit && (
                    <span
                      className={cn("text-sm text-muted-foreground")}
                    >
                      /{service.unit}
                    </span>
                  )}
                  {service.note && (
                    <div
                      className={cn("text-sm text-muted-foreground")}
                    >
                      {service.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
