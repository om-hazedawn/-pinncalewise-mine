"use client"

import { Facebook, Instagram, Linkedin } from "lucide-react"
import { footerItems } from "../config/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "../context/language-context"

export default function Footer() {
  const { language } = useLanguage()
  const currentFooterItems = footerItems[language]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">PinnacleWise</h3>
            <address className="not-italic">
              <p>香港</p>
              <p>九龍荔枝角</p>
              <p>永康街9號</p>
              <p>18樓1806室</p>
              <p className="mt-4">
                <a href="tel:+85295311156">+852 9531 1156</a>
              </p>
              <p>
                <a href="mailto:info@pinnaclewise.com">info@pinnaclewise.com</a>
              </p>
            </address>
          </div>

          {/* Footer Links */}
          {currentFooterItems.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-gray-300">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === "en" ? "Subscribe to Our Newsletter" : "訂閱我們的通訊"}
            </h3>
            <p className="mb-4">
              {language === "en" ? "Get the latest news and service updates" : "獲取最新消息和服務更新"}
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={language === "en" ? "Enter your email" : "輸入您的電郵"}
                className="bg-gray-800 border-gray-700"
              />
              <Button>{language === "en" ? "Subscribe" : "訂閱"}</Button>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>{language === "en" ? " 2025 PinnacleWise. All rights reserved." : " 2025 Pinnaclewise. "}</p>
        </div>
      </div>
    </footer>
  )
}
