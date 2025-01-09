'use client'

import { motion } from "framer-motion"
import { Check, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const content = {
  en: {
    title: "Transparent Pricing",
    subtitle: "Choose the plan that's right for your business",
    plans: [
      {
        name: "Starter",
        price: "HK$3,888",
        description: "Perfect for new businesses",
        features: [
          "Company incorporation",
          "Business registration",
          "Company secretary for 1 year",
          "Registered office address",
          "Share certificates",
          "Company chop"
        ]
      },
      {
        name: "Professional",
        price: "HK$6,888",
        description: "Best for growing companies",
        features: [
          "All Starter features",
          "Annual return filing",
          "Nominee director service",
          "Bank account opening assistance",
          "Business advisory service",
          "Tax compliance support"
        ],
        highlighted: true
      },
      {
        name: "Enterprise",
        price: "HK$12,888",
        description: "For established businesses",
        features: [
          "All Professional features",
          "Multiple company management",
          "Corporate restructuring",
          "Cross-border business support",
          "Dedicated account manager",
          "Priority support"
        ]
      }
    ]
  },
  zh: {
    title: "透明定價",
    subtitle: "選擇最適合您企業的方案",
    plans: [
      {
        name: "入門方案",
        price: "HK$3,888",
        description: "適合新創企業",
        features: [
          "公司註冊",
          "商業登記",
          "一年公司秘書服務",
          "註冊辦公地址",
          "股票證書",
          "公司印章"
        ]
      },
      {
        name: "專業方案",
        price: "HK$6,888",
        description: "適合成長中的企業",
        features: [
          "包含入門方案所有功能",
          "周年申報表提交",
          "代理董事服務",
          "銀行開戶協助",
          "商業諮詢服務",
          "稅務合規支持"
        ],
        highlighted: true
      },
      {
        name: "企業方案",
        price: "HK$12,888",
        description: "適合成熟企業",
        features: [
          "包含專業方案所有功能",
          "多公司管理",
          "企業重組",
          "跨境業務支持",
          "專屬客戶經理",
          "優先支援服務"
        ]
      }
    ]
  }
}

export function PricingPage({ language = 'en' }: { language?: 'en' | 'zh' }) {
  const text = content[language]

  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-secondary/5 pointer-events-none" />
      
      <section className="relative w-full py-24 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center space-y-6 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="relative px-4 sm:px-0"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="absolute -top-8 -left-8 text-secondary w-8 h-8 hidden sm:block" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-secondary">
                {text.title}
              </h1>
              <Sparkles className="absolute -bottom-8 -right-8 text-primary w-8 h-8 hidden sm:block" />
            </motion.div>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl lg:text-2xl px-4 sm:px-0">
              {text.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
            {text.plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`relative h-full ${plan.highlighted ? 'border-primary shadow-lg' : ''} hover:border-primary/50 transition-all duration-300`}>
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-sm px-4 py-1 rounded-full shadow-lg">
                        {language === 'en' ? 'Most Popular' : '最受歡迎'}
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      {plan.price}
                    </div>
                    <ul className="space-y-2 text-sm sm:text-base">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="text-secondary w-5 h-5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full ${plan.highlighted ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={plan.highlighted ? 'default' : 'outline'}
                      size="lg"
                    >
                      {language === 'en' ? 'Get Started' : '立即開始'}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}