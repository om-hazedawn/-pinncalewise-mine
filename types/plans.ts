import type { Language } from "./language"

export interface Plan {
  name: string
  price: string
  period: string
  description: string
  totalPrice: string
  features: string[]
  extraService: string
  additionalFeatures: string[]
  recommended?: boolean
}

export interface WhatsAppPlanDetails {
  name: string
  price: string
  period: string
  totalPrice: string
  features?: string[]
  language: Language
}

