'use client'

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingSectionProps {
  language?: 'en' | 'zh'
}

const content = {
  en: {
    title: "Annual Company Secretary Service Plans",
    subtitle: "Choose the plan that best suits your business needs",
    recommended: "Recommended",
    selectPlan: "Select Plan",
    yearSuffix: "/year",
    govFeePart1: "excluding government fee (HK$",
    govFeePart2: ")",
    yearlyTotalPrefix: "Annual total: HK$",
    plans: [
      {
        name: "Basic Plan",
        price: "800",
        govFee: "105",
        yearlyTotal: "905",
        features: [
          "Act as Company Secretary",
          "Submit Annual Return (NAR1)",
          "WhatsApp Group Support",
          "Business Operation Notice",
        ],
        additionalNote: "+ $600 for Registered Office Address Service",
        additionalServices: [
          "Mail collection with same-day WhatsApp notification",
          "Bi-monthly mail forwarding (mid/end month)",
          "Digital signage",
          "Business Registration Certificate renewal"
        ]
      },
      {
        name: "Value Plan",
        price: "1000",
        govFee: "105",
        yearlyTotal: "1205",
        recommended: true,
        features: [
          "Act as Company Secretary",
          "Submit Annual Return (NAR1)",
          "WhatsApp Group Support",
          "Up to 5 times usage of the following services",
          "- Change/resignation of directors and secretary",
          "- Change company name",
          "- Change company address",
          "- Business operation notice",
          "- Change business nature",
          "- Change business name",
          "- Apply for branch Business Registration",
          "- Accounting and tax consultation"
        ],
        additionalNote: "+ $600 for Registered Office Address Service",
        additionalServices: [
          "Mail collection with same-day WhatsApp notification",
          "Bi-monthly mail forwarding (mid/end month)",
          "Digital signage",
          "Business Registration Certificate renewal"
        ]
      },
      {
        name: "Professional Plan",
        price: "2000",
        govFee: "105",
        yearlyTotal: "2305",
        features: [
          "Act as Company Secretary",
          "Act as Company Representative",
          "Submit Annual Return (NAR1)",
          "WhatsApp Group Support",
          "Unlimited usage of the following services",
          "- Change/resignation of directors and secretary",
          "- Change company name",
          "- Change company address",
          "- Business operation notice",
          "- Change business nature",
          "- Change business name",
          "- Apply for branch Business Registration",
          "- Prepare meeting minutes",
          "- Update company members register",
          "- Update significant controllers register",
          "- Accounting and tax consultation"
        ],
        additionalNote: "+ $600 for Registered Office Address Service",
        additionalServices: [
          "Mail collection with same-day WhatsApp notification",
          "Bi-monthly mail forwarding (mid/end month)",
          "Digital signage",
          "Business Registration Certificate renewal"
        ]
      }
    ]
  },
  zh: {
    title: "公司秘書服務年度計劃",
    subtitle: "選擇最適合您業務需求的計劃",
    recommended: "推薦",
    selectPlan: "選擇方案",
    yearSuffix: "/年",
    govFeePart1: "不包括政府費 (HK$",
    govFeePart2: ")",
    yearlyTotalPrefix: "年度總額：HK$",
    plans: [
      {
        name: "基本計劃",
        price: "800",
        govFee: "105",
        yearlyTotal: "905",
        features: [
          "出任公司秘書職務",
          "遞交周年申報表 (NAR1)",
          "WhatsApp 群組支援",
          "開業通知",
        ],
        additionalNote: "+ $600 可獲公司註冊地址服務",
        additionalServices: [
          "代收信件，WhatsApp 即日通知",
          "每月轉寄兩次 (月中 / 月尾)",
          "電子水牌",
          "商業登記證續期"
        ]
      },
      {
        name: "增值計劃",
        price: "1000",
        govFee: "105",
        yearlyTotal: "1205",
        recommended: true,
        features: [
          "出任公司秘書職務",
          "遞交周年申報表 (NAR1)",
          "WhatsApp 群組支援",
          "可使用以下服務「多達5次」",
          "- 任免或更改董事及秘書資料",
          "- 更改公司名稱",
          "- 更改公司地址",
          "- 通知開業",
          "- 更改業務性質",
          "- 更改業務名稱",
          "- 申請分行商業登記證",
          "- 會計報稅諮詢"
        ],
        additionalNote: "+ $600 可獲公司註冊地址服務",
        additionalServices: [
          "代收信件，WhatsApp 即日通知",
          "每月轉寄兩次 (月中 / 月尾)",
          "電子水牌",
          "商業登記證續期"
        ]
      },
      {
        name: "專業計劃",
        price: "2000",
        govFee: "105",
        yearlyTotal: "2305",
        features: [
          "出任公司秘書職務",
          "出任公司指定代表人",
          "遞交周年申報表 (NAR1)",
          "WhatsApp 群組支援",
          "可使用以下服務「無限次」",
          "- 任免或更改董事及秘書資料",
          "- 更改公司名稱",
          "- 更改公司地址",
          "- 通知開業",
          "- 更改業務性質",
          "- 更改業務名稱",
          "- 申請分行商業登記證",
          "- 備製會議紀錄",
          "- 更新公司成員登記冊",
          "- 更新重要控制人登記冊",
          "- 會計報稅諮詢"
        ],
        additionalNote: "+ $600 可獲公司註冊地址服務",
        additionalServices: [
          "代收信件，WhatsApp 即日通知",
          "每月轉寄兩次 (月中 / 月尾)",
          "電子水牌",
          "商業登記證續期"
        ]
      }
    ]
  }
}

export function PricingSection({ language = 'en' }: PricingSectionProps) {
  const text = content[language];
  const plans = text.plans;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {text.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {text.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={cn(
                "relative p-8 rounded-2xl shadow-lg",
                plan.recommended 
                  ? "bg-primary/5 border-2 border-primary" 
                  : "bg-background border border-border"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  {text.recommended}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">HK${plan.price}</span>
                  <span className="text-muted-foreground">{text.yearSuffix}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {text.govFeePart1}{plan.govFee}{text.govFeePart2}
                </p>
                <p className="text-sm text-muted-foreground">
                  {text.yearlyTotalPrefix}{plan.yearlyTotal}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.additionalNote && (
                <div className="border-t border-border pt-6 mb-6">
                  <p className="font-medium text-foreground mb-3">{plan.additionalNote}</p>
                  <ul className="space-y-2">
                    {plan.additionalServices.map((service, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button 
                className="w-full"
                variant={plan.recommended ? "default" : "outline"}
              >
                {text.selectPlan}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
