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
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

interface NavBarProps {
  language: 'en' | 'zh'
  setLanguage: (lang: 'en' | 'zh') => void
}

export function NavBar({ language = 'en', setLanguage }: NavBarProps) {
  const pathname = usePathname()
  const router = useRouter()

  const content = {
    en: {
      home: "Home",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
      language: "中文"
    },
    zh: {
      home: "首頁",
      services: "服務",
      blog: "文章",
      contact: "聯絡我們",
      language: "English"
    }
  }

  const text = content[language]

  const navigation = [
    { name: text.home, href: '/' },
    { name: text.services, href: '/services' },
    { name: text.blog, href: '/blog' },
    { name: text.contact, href: '/contact' },
  ]

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-8 w-8" />
          <span className="font-bold">Pinnaclewise</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                pathname === item.href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <Globe className="h-5 w-5" />
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
  )
}