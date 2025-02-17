import type { WhatsAppPlanDetails } from "@/types/plans"
import type { Language } from "@/types/language"
import { translateWhatsApp } from "../translations/whatsapp"

const WHATSAPP_PHONE = "85295311156"

export function openWhatsApp(planInfo: string | WhatsAppPlanDetails) {
  let message: string

  if (typeof planInfo === "string") {
    const lang = (document.documentElement.lang as Language) || "en"
    message = `${translateWhatsApp("interestedIn", lang)} ${planInfo}?`
  } else {
    const { name, price, period, totalPrice, features, language } = planInfo
    message = `${translateWhatsApp("interestedIn", language)} ${name}:
• ${translateWhatsApp("priceLabel", language)} ${price}${period}
• ${totalPrice}
${
  features
    ? `\n${translateWhatsApp("keyFeatures", language)}\n${features
        .slice(0, 3)
        .map((f) => `• ${f}`)
        .join("\n")}`
    : ""
}`
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

