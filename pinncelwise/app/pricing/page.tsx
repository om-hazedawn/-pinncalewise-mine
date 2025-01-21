'use client'

import { LayoutWrapper } from '@/components/components-layout-wrapper'
import { PricingPage } from '@/components/components-pricing-page'
import { useState } from 'react'

export default function Pricing() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en')

  return (
    <LayoutWrapper>
      <PricingPage language={language} />
    </LayoutWrapper>
  )
}
