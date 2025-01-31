import { ReactNode } from 'react'
import { locales } from '@/lib/i18n'

export async function generateStaticParams() {
  return locales.map((lang) => ({
    lang: lang === 'zh-HK' ? 'zh' : lang,
  }))
}

type LayoutProps = {
  children: ReactNode
  params: { lang: string }
}

export default function Layout(props: LayoutProps) {
  return props.children
}
