import SecretaryServicesClient from './client'

interface PageProps {
  params: Promise<{ lang: string }>
}

export default async function SecretaryServices({ params }: PageProps) {
  const { lang } = await params
  const language = lang === 'zh' ? 'zh' : 'en'
  return <SecretaryServicesClient language={language} />
}
