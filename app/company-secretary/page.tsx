import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Check } from "lucide-react"
import { AnimatedBackground } from "../components/animated-background"
import { FancyCard } from "../components/fancy-card"
import { MotionDiv, MotionList, MotionListItem } from "../components/motion-wrapper"

const plans = [
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
    totalPrice: "Annual total: HK$1205",
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
    totalPrice: "Annual total: HK$2305",
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
]

export default function CompanySecretaryPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground />
      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Annual Company Secretary Service Plans</h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Choose the plan that best suits your business needs
          </p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <MotionDiv
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <FancyCard className="h-full">
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <MotionDiv
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="inline-flex px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500 to-rose-500 text-white shadow-lg"
                    >
                      Recommended
                    </MotionDiv>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="ml-1 text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <p className="font-medium">{plan.totalPrice}</p>
                </CardHeader>
                <CardContent>
                  <MotionList className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <MotionListItem
                        key={feature}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      >
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </MotionListItem>
                    ))}
                  </MotionList>

                  <div className="mt-6">
                    <p className="mb-2 font-medium text-primary">
                      {plan.extraService}
                    </p>
                    <MotionList className="space-y-2">
                      {plan.additionalFeatures.map((feature, featureIndex) => (
                        <MotionListItem
                          key={feature}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.1 + (featureIndex + 4) * 0.1,
                          }}
                        >
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </MotionListItem>
                      ))}
                    </MotionList>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                    Select Plan
                  </Button>
                </CardFooter>
              </FancyCard>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  )
}
