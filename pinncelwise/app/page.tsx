import { HomeClientPage } from './client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Pinnaclewise | Professional Accounting & Company Services in Hong Kong",
  description: "Leading provider of professional accounting, audit, company formation, and corporate services in Hong Kong. Expert solutions for businesses with 24-hour response guarantee.",
  keywords: [
    "Hong Kong accounting",
    "company formation",
    "audit services",
    "corporate secretary",
    "tax services",
    "business registration",
    "company incorporation",
    "financial services Hong Kong",
    "business consulting",
    "corporate services"
  ],
  alternates: {
    canonical: "https://pinnaclewise.com",
    languages: {
      'en': '/en',
      'zh-HK': '/zh'
    },
  }
}

interface PageProps {
  params: Promise<{ lang?: string }>
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params
  return <HomeClientPage lang={lang} />
}
