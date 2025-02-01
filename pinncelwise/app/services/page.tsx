import ServicesClient from './client'

interface PageProps {
  params: Promise<{ lang: string }>
}

export default async function ServicesPage({ params }: PageProps) {
  const { lang } = await params
  const language = lang === 'zh' ? 'zh' : 'en'
  return <ServicesClient language={language} />
}
