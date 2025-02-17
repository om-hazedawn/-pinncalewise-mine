import type { Language } from "@/types/language"

export const whatsAppTranslations = {
  interestedIn: {
    en: "Hi, I'm interested in",
    zh: "您好，我對以下服務感興趣",
  },
  priceLabel: {
    en: "Price:",
    zh: "價格：",
  },
  keyFeatures: {
    en: "Key features:",
    zh: "主要特點：",
  },
}

export function translateWhatsApp(key: string, language: Language): string {
  return whatsAppTranslations[key as keyof typeof whatsAppTranslations]?.[language] || key
}

