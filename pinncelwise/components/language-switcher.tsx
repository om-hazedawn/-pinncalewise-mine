'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { defaultLocale, locales } from '@/lib/i18n'

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const currentLocale = pathname.startsWith('/zh') ? 'zh-HK' : 'en'

  const switchLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'zh-HK' : 'en'
    const newPath = pathname.replace(`/${currentLocale}`, '') || '/'
    router.push(newLocale === defaultLocale ? newPath : `/${newLocale}${newPath}`)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLanguage}
      className="w-16"
    >
      {currentLocale === 'en' ? '中文' : 'EN'}
    </Button>
  )
}
