import { HomePage } from "@/components/components-home-page"
import { Metadata } from "next"
import { locales } from "@/lib/i18n"

interface PageProps {
  params: { lang: string }
}

export async function generateStaticParams() {
  return locales.map((lang) => ({
    lang: lang === 'zh-HK' ? 'zh' : lang,
  }))
}

export default function Page({ params }: PageProps) {
  const language = params?.lang === 'zh' ? 'zh' : 'en'
  
  return (
    <main className="flex-1">
      <HomePage language={language} />
    </main>
  )
}
