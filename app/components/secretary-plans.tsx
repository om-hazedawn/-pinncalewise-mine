"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { openWhatsApp } from "@/lib/utils/whatsapp"
import { useLanguage } from "../context/language-context"
import { secretaryPlans } from "@/data/plans"

export function SecretaryPlans() {
  const { language } = useLanguage()
  const plans = secretaryPlans[language]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {language === "en" ? "Annual Company Secretary Service Plans" : "公司秘書服務年度計劃"}
          </h2>
          <p className="text-xl text-gray-600">
            {language === "en" ? "Choose the plan that best suits your business needs" : "選擇最適合您業務需求的計劃"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.recommended ? "border-primary shadow-lg relative" : "relative"}>
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    {language === "en" ? "Recommended" : "推薦"}
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">{plan.name}</div>
                    <div>
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-base font-normal text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="text-gray-600">{plan.description}</div>
                    <div className="font-medium">{plan.totalPrice}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t">
                  <div className="font-medium mb-3">{plan.extraService}</div>
                  <ul className="space-y-3">
                    {plan.additionalFeatures.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                  {language === "en" ? "Select Plan" : "選擇計劃"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

