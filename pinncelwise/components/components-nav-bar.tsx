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
      about: "About",
      pricing: "Pricing",
      services: "Services",
      contact: "Contact",
      language: "Language"
    },
    zh: {
      home: "主頁",
      about: "關於我們",
      pricing: "價格",
      services: "服務",
      contact: "聯絡我們",
      language: "語言"
    }
  }

  const links = [
    { href: "/", label: translations[language].home },
    { href: "/about", label: translations[language].about },
    { href: "/pricing", label: translations[language].pricing },
    { href: "/services", label: translations[language].services },
    { href: "/contact", label: translations[language].contact },
  ]

  return (
    <div className="flex items-center justify-between w-full">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/placeholder.svg?height=32&width=32"
          alt="Pinnaclewise Logo"
          width={32}
          height={32}
          className="rounded-lg"
        />
        <span className="font-semibold">Pinnaclewise</span>
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