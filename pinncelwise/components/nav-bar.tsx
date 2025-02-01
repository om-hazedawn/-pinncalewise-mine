'use client';

import { Logo } from "@/components/logo"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavBarProps {
  language?: 'en' | 'zh'
  setLanguage?: (lang: 'en' | 'zh') => void
}

const content = {
  en: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    contact: "Contact",
    language: "中文"
  },
  zh: {
    home: "首頁",
    services: "服務",
    pricing: "價格",
    contact: "聯繫",
    language: "English"
  }
}

export function NavBar({ language = 'en', setLanguage }: NavBarProps) {
  const pathname = usePathname()
  const text = content[language]
  const oppositeLanguage = language === 'en' ? 'zh' : 'en'

  const navItems = [
    { href: "/", label: text.home },
    { href: "/services", label: text.services },
    { href: "/pricing", label: text.pricing },
    { href: "/contact", label: text.contact },
  ]

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-6 md:space-x-8">
        <Link href="/" className="hidden md:block">
          <Logo />
        </Link>
        <nav className="flex items-center space-x-4 md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
                pathname === item.href ? "text-foreground" : "text-foreground/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <button
        onClick={() => setLanguage?.(language === 'en' ? 'zh' : 'en')}
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {content[language].language}
      </button>
    </div>
  )
}
