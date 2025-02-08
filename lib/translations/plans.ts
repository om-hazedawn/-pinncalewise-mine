import type { Language } from "@/types/language"

export const planTranslations = {
  basicplan: {
    en: "Basic Plan",
    zh: "基本計劃",
  },
  valueplan: {
    en: "Value Plan",
    zh: "增值計劃",
  },
  professionalplan: {
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
  pageTitle: {
    en: "Annual Company Secretary Service Plans",
    zh: "公司秘書服務年度計劃",
  },
  pageDescription: {
    en: "Choose the plan that best suits your business needs",
    zh: "選擇最適合您業務需求的計劃",
  },
}

export function translatePlan(key: string, language: Language): string {
  return planTranslations[key as keyof typeof planTranslations]?.[language] || key
}

