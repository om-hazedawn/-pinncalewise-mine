'use client'

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface FooterProps {
  language?: 'en' | 'zh'
}

export function Footer({ language = 'en' }: FooterProps) {
  const t = {
    en: {
      company: "Company",
      about: "About Us",
      services: "Services",
      pricing: "Pricing",
      contact: "Contact",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      address: "Address",
      addressLine1: "Room 1806, 18/F",
      addressLine2: "9 Wing Hong Street",
      addressLine3: "Lai Chi Kok, Kowloon",
      addressLine4: "Hong Kong",
      phone: "Phone",
      email: "Email",
      subscribe: "Subscribe to our newsletter",
      subscribeText: "Stay updated with our latest news and services",
      rights: "All rights reserved",
      emailPlaceholder: "Enter your email"
    },
    zh: {
      company: "公司",
      about: "關於我們",
      services: "服務",
      pricing: "價格",
      contact: "聯絡我們",
      legal: "法律",
      privacy: "私隱政策",
      terms: "服務條款",
      address: "地址",
      addressLine1: "香港",
      addressLine2: "九龍荔枝角",
      addressLine3: "永康街9號",
      addressLine4: "18樓1806室",
      phone: "電話",
      email: "電郵",
      subscribe: "訂閱我們的通訊",
      subscribeText: "獲取最新消息和服務更新",
      rights: "版權所有",
      emailPlaceholder: "輸入您的電郵"
    }
  }

  const currentLanguage = language || 'en'
  const translations = t[currentLanguage]

  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">{translations.company}</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                {translations.about}
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                {translations.services}
              </Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                {translations.pricing}
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {translations.contact}
              </Link>
            </nav>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">{translations.legal}</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                {translations.privacy}
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                {translations.terms}
              </Link>
            </nav>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">{translations.contact}</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <p>{translations.addressLine1}</p>
                  <p>{translations.addressLine2}</p>
                  <p>{translations.addressLine3}</p>
                  <p>{translations.addressLine4}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <p>+852 9531 1156</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <p>info@pinnaclewise.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">{translations.subscribe}</h3>
            <p className="text-sm text-muted-foreground">{translations.subscribeText}</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder={translations.emailPlaceholder}
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Pinnaclewise. {translations.rights}.</p>
        </motion.div>
      </div>
    </footer>
  )
}