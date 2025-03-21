"use client"

import { Button } from "@/components/ui/button"
import {Card,CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Check } from "lucide-react"
import { AnimatedBackground } from "../components/animated-background"
import { FancyCard } from "../components/fancy-card"
import { MotionDiv, MotionList, MotionListItem } from "../components/motion-wrapper"
import { useLanguage } from "../context/language-context"
import { openWhatsApp } from "@/lib/utils/whatsapp"


const plans = {
  en: [
    {
      name: "Basic Plan",
      price: "HK$800",
      period: "/year",
      description: "excluding government fee (HK$105)",
      totalPrice: "Annual total: HK$905",
      features: [
        "Act as Company Secretary",
        "Submit Annual Return (NAR1)",
        "WhatsApp Group Support",
        "Business Operation Notice",
      ],
      extraService: "+ $600 for Registered Office Address Service",
      additionalFeatures: [
        "Mail collection with same-day WhatsApp notification",
        "Bi-monthly mail forwarding (mid/end month)",
        "Digital signage",
        "Business Registration Certificate renewal",
      ],
    },
    {
      name: "Value Plan",
      price: "HK$1000",
      period: "/year",
      description: "excluding government fee (HK$105)",
      totalPrice: "Annual total: HK$1105",
      features: [
        "Act as Company Secretary",
        "Submit Annual Return (NAR1)",
        "WhatsApp Group Support",
        "Up to 5 times usage of the following services",
        "- Change/resignation of directors and secretary",
        "- Change company name (+ $295 government fee)",
        "- Change company address",
        "- Business operation notice",
        "- Change business nature",
        "- Change business name",
        "- Apply for branch Business Registration",
        "- Accounting and tax consultation",
      ],
      extraService: "+ $600 for Registered Office Address Service",
      additionalFeatures: [
        "Mail collection with same-day WhatsApp notification",
        "Bi-monthly mail forwarding (mid/end month)",
        "Digital signage",
        "Business Registration Certificate renewal",
      ],
      recommended: true,
    },
    {
      name: "Professional Plan",
      price: "HK$2000",
      period: "/year",
      description: "excluding government fee (HK$105)",
      totalPrice: "Annual total: HK$2105",
      features: [
        "Act as Company Secretary",
        "Act as Company Representative",
        "Submit Annual Return (NAR1)",
        "WhatsApp Group Support",
        "Unlimited usage of the following services",
        "- Change/resignation of directors and secretary",
        "- Change company name (+ $295 government fee)",
        "- Change company address",
        "- Business operation notice",
        "- Change business nature",
        "- Change business name",
        "- Apply for branch Business Registration",
        "- Prepare meeting minutes",
        "- Update company members register",
        "- Update significant controllers register",
        "- Accounting and tax consultation",
      ],
      extraService: "+ $600 for Registered Office Address Service",
      additionalFeatures: [
        "Mail collection with same-day WhatsApp notification",
        "Bi-monthly mail forwarding (mid/end month)",
        "Digital signage",
        "Business Registration Certificate renewal",
      ],
    },
  ],
  zh: [
    {
      name: "基本計劃",
      price: "HK$800",
      period: "/年",
      description: "不包括政府費用 (HK$105)",
      totalPrice: "年度總計: HK$905",
      features: [
        "擔任公司秘書",
        "提交周年申報表 (NAR1)",
        "WhatsApp 群組支援",
        "商業運作通知",
      ],
      extraService: "+ $600 註冊地址服務",
      additionalFeatures: [
        "郵件收集並即日WhatsApp通知",
        "每月中旬/月底郵件轉發",
        "數碼簽名",
        "商業登記證續期",
      ],
    },
    {
      name: "增值計劃",
      price: "HK$1000",
      period: "/年",
      description: "不包括政府費用 (HK$105)",
      totalPrice: "年度總計: HK$1105",
      features: [
        "擔任公司秘書",
        "提交周年申報表 (NAR1)",
        "WhatsApp 群組支援",
        "以下服務可使用5次",
        "- 更改/辭任董事及秘書",
        "- 更改公司名稱 (+ $295 政府費用)",
        "- 更改公司地址",
        "- 商業運作通知",
        "- 更改業務性質",
        "- 更改業務名稱",
        "- 申請分行商業登記",
        "- 會計及稅務諮詢",
      ],
      extraService: "+ $600 註冊地址服務",
      additionalFeatures: [
        "郵件收集並即日WhatsApp通知",
        "每月中旬/月底郵件轉發",
        "數碼簽名",
        "商業登記證續期",
      ],
      recommended: true,
    },
    {
      name: "專業計劃",
      price: "HK$2000",
      period: "/年",
      description: "不包括政府費用 (HK$105)",
      totalPrice: "年度總計: HK$2105",
      features: [
        "擔任公司秘書",
        "擔任公司代表",
        "提交周年申報表 (NAR1)",
        "WhatsApp 群組支援",
        "以下服務無限次使用",
        "- 更改/辭任董事及秘書",
        "- 更改公司名稱 (+ $295 政府費用)",
        "- 更改公司地址",
        "- 商業運作通知",
        "- 更改業務性質",
        "- 更改業務名稱",
        "- 申請分行商業登記",
        "- 準備會議記錄",
        "- 更新公司成員登記冊",
        "- 更新重要控制人登記冊",
        "- 會計及稅務諮詢",
      ],
      extraService: "+ $600 註冊地址服務",
      additionalFeatures: [
        "郵件收集並即日WhatsApp通知",
        "每月中旬/月底郵件轉發",
        "數碼簽名",
        "商業登記證續期",
      ],
    },
  ],
}

export default function CompanySecretaryPage() {
  const { language } = useLanguage()
  const currentPlans = plans[language]

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground>
        <div></div>
      </AnimatedBackground>
      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">
            {language === "en" ? "Annual Company Secretary Service Plans" : "年度公司秘書服務計劃"}
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            {language === "en"
              ? "Choose the plan that best suits your business needs"
              : "選擇最適合您業務需求的計劃"}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {currentPlans.map((plan, index) => (
            <Card key={plan.name} className={plan.recommended ? "border-primary relative" : "relative"}>
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                  {language === "en" ? "Recommended" : "推薦"}
                </div>
              )}
              <CardHeader>
                <CardTitle>
                  <div className="text-2xl font-bold">{plan.name}</div>
                  <div className="mt-4 text-4xl font-bold">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
                <p className="mt-2 font-medium">{plan.totalPrice}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.extraService && (
                  <div className="mt-6 rounded-lg bg-muted p-4 text-sm">
                    {plan.extraService}
                    <ul className="mt-4 space-y-2">
                      {plan.additionalFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() =>
                    openWhatsApp({
                      name: plan.name,
                      price: plan.price,
                      period: plan.period,
                      totalPrice: plan.totalPrice,
                      features: plan.features,
                      language,
                    })
                  }
                >
                  {language === "en" ? "Get Started" : "立即開始"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}