import TaxServicesClient from './client'

interface PageProps {
  params: Promise<{ lang: string }>
}

export default async function TaxServicesPage({ params }: PageProps) {
  const { lang } = await params
  const language = lang === 'zh' ? 'zh' : 'en'
  return <TaxServicesClient language={language} />
}
