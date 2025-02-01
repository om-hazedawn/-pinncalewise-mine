import { OpenCompanyClientPage } from './client'

interface PageProps {
  params: Promise<{ lang: string }>
}

export default async function OpenCompanyPage({ params }: PageProps) {
  const { lang } = await params
  return <OpenCompanyClientPage lang={lang} />
}