"use client"

import { useState } from "react"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { footerItems } from "../config/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "../context/language-context"
import { useToast } from "@/components/ui/use-toast"

export default function Footer() {
  const { language } = useLanguage()
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const currentFooterItems = footerItems[language]

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: language === "en" ? "Invalid email" : "無效的電郵地址",
        description: language === "en" 
          ? "Please enter a valid email address" 
          : "請輸入有效的電郵地址",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error)
      }

      toast({
        title: language === "en" ? "Success!" : "成功！",
        description: language === "en"
          ? "You have been subscribed to our newsletter"
          : "您已成功訂閱我們的通訊",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: language === "en" ? "Error" : "錯誤",
        description: language === "en"
          ? "Failed to subscribe. Please try again later"
          : "訂閱失敗。請稍後再試",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

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
                <a href="mailto:pinnwiselimited@gmail.com">pinnwiselimited@gmail.com</a>
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
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === "en" ? "Enter your email" : "輸入您的電郵"}
                className="bg-gray-800 border-gray-700"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading 
                  ? (language === "en" ? "Subscribing..." : "訂閱中...")
                  : (language === "en" ? "Subscribe" : "訂閱")
                }
              </Button>
            </form>
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
          <p>{language === "en" ? " 2025 PinnacleWise. All rights reserved." : "  2025 PinnacleWise. All rights reserved "}</p>
        </div>
      </div>
    </footer>
  )
}
