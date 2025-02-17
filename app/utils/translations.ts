import type { Language } from "../types/language"

type Translations = {
  [key: string]: {
    en: string
    zh: string
  }
}

export const translations: Translations = {
  // Plans
  basicPlan: {
    en: "Basic Plan",
    zh: "基本計劃",
  },
  valuePlan: {
    en: "Value Plan",
    zh: "增值計劃",
  },
  professionalPlan: {
    en: "Professional Plan",
    zh: "專業計劃",
  },
  selectPlan: {
    en: "Select Plan",
    zh: "選擇計劃",
  },
  recommended: {
    en: "Recommended",
    zh: "推薦",
  },
  year: {
    en: "/year",
    zh: "/年",
  },
  excludingFee: {
    en: "excluding government fee (HK$105)",
    zh: "不包括政府費用 (HK$105)",
  },
  annualTotal: {
    en: "Annual total:",
    zh: "年度總計：",
  },

  // Services
  otherProfessionalServices: {
    en: "Other Professional Services",
    zh: "其他專業服務",
  },
  applyForService: {
    en: "Apply for Service",
    zh: "申請服務",
  },
  shareTransfer: {
    en: "Share Transfer",
    zh: "股份轉讓",
  },
  accountingServices: {
    en: "Accounting Services",
    zh: "會計服務",
  },
  taxFiling: {
    en: "Limited Company Tax Filing",
    zh: "有限公司報稅",
  },

  // WhatsApp Messages
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

export function t(key: string, language: Language): string {
  return translations[key]?.[language] || key
}

