'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import Image from "next/image"

interface NavBarProps {
  language: 'en' | 'zh'
  setLanguage: (language: 'en' | 'zh') => void
}

export function NavBar({ language = 'en', setLanguage }: NavBarProps) {
  const pathname = usePathname()

  const translations = {
    en: {
      home: "Home",
      openCompany: "Open Company",
      closeCompany: "Close Company",
      secretaryServices: "Secretary Services",
      accounting: "Accounting",
      taxServices: "Tax Services",
      auditServices: "Audit Services",
      otherServices: "Other Services",
      tools: "Tools",
      blog: "Blog",
      contact: "Contact",
      language: "Language"
    },
    zh: {
      home: "主頁",
      openCompany: "開公司",
      closeCompany: "註銷公司",
      secretaryServices: "公司秘書服務",
      accounting: "會計理賬",
      taxServices: "報稅服務",
      auditServices: "核數服務",
      otherServices: "其他服務",
      tools: "實用工具",
      blog: "毅思博客",
      contact: "聯絡我們",
      language: "語言"
    }
  }

  const links = [
    { href: "/", label: translations[language].home },
    { href: "/open-company", label: translations[language].openCompany },
    { href: "/close-company", label: translations[language].closeCompany },
    { href: "/secretary-services", label: translations[language].secretaryServices },
    { href: "/accounting", label: translations[language].accounting },
    { href: "/tax-services", label: translations[language].taxServices },
    { href: "/audit-services", label: translations[language].auditServices },
    { href: "/other-services", label: translations[language].otherServices },
    { href: "/tools", label: translations[language].tools },
    { href: "/blog", label: translations[language].blog },
    { href: "/contact", label: translations[language].contact },
  ]

  return (
    <div className="flex items-center justify-between w-full">
      <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
        <Logo width={32} height={32} />
        <span className="font-semibold text-xl tracking-tight">
          Pinnacle<span className="text-primary">Wise</span>
        </span>
      </Link>
      
      <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === link.href ? "text-primary" : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Globe className="h-4 w-4" />
              <span className="sr-only">{translations[language].language}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setLanguage('en')}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage('zh')}>
              中文
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}