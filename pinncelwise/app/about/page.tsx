'use client'

import { LayoutWrapper } from '@/components/components-layout-wrapper'
import { AboutPage } from '@/components/components-about-page'
import { useState } from 'react'

export default function About() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en')

  return (
    <LayoutWrapper>
      <AboutPage language={language} />
    </LayoutWrapper>
  )
}
