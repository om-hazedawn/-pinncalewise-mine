'use client'

import { HomePage } from "@/components/components-home-page"

interface Props {
  lang?: string
}

export function HomeClientPage({ lang }: Props) {
  const language = lang === 'zh' ? 'zh' : 'en'
  return (
    <main>
      <HomePage language={language} />
    </main>
  )
}
