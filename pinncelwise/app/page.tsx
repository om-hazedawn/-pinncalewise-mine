'use client'

import { LayoutWrapper } from '@/components/components-layout-wrapper'
import { AboutPage } from '@/components/components-about-page'
import { PricingPage } from '@/components/components-pricing-page'
import { useState } from 'react'

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en')

  return (
    <LayoutWrapper>
      <AboutPage language={language} />
      <PricingPage language={language} />
    </LayoutWrapper>
  )
}