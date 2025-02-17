import type { Language } from "../types/language"
import { t } from "./translations"

type PlanDetails = {
  name: string
  price: string
  period: string
  totalPrice: string
  features?: string[]
  language: Language
}

export function openWhatsApp(planInfo: string | PlanDetails) {
  const phoneNumber = "85295311156"
  let message: string

  if (typeof planInfo === "string") {
    // For simple service inquiries
    const lang = (document.documentElement.lang as Language) || "en"
    message = `${t("interestedIn", lang)} ${planInfo}?`
  } else {
    // For plan inquiries with details
    const { name, price, period, totalPrice, features, language } = planInfo
    message = `${t("interestedIn", language)} ${name}:
• ${t("priceLabel", language)} ${price}${period}
• ${totalPrice}
${
  features
    ? `\n${t("keyFeatures", language)}\n${features
        .slice(0, 3)
        .map((f) => `• ${f}`)
        .join("\n")}`
    : ""
}`
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

