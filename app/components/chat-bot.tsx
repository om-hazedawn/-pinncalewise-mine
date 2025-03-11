"use client"

import { useState, FormEvent, useRef, useEffect } from "react"
import { useLanguage } from "../context/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Send } from "lucide-react"
import { FAQ } from "../chat/faq"

type Message = {
  text: string
  isBot: boolean
}

export function ChatBot() {
  const { language } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return

    // Add user message
    const userMessage = { text: inputText, isBot: false }
    setMessages(prev => [...prev, userMessage])
    
    // Process the input text
    const query = inputText.toLowerCase()
    
    // Find exact or partial FAQ matches
    const faqMatches = Object.entries(FAQ[language]).filter(([question]) => 
      question.toLowerCase().includes(query) || 
      query.includes(question.toLowerCase())
    )

    let answer = ""

    // Handle different types of queries
    if (query.includes("hi") || query.includes("hello") || query.includes("你好")) {
      answer = language === 'en' 
        ? "Hello! How can I assist you today with our company secretary services?"
        : "你好！我可以如何協助你了解我們的公司秘書服務？"
    }
    else if (query.includes("account")) {
      if (query.includes("bank")) {
        answer = FAQ[language]["Do you help with bank account opening?"]
      } else {
        answer = language === 'en'
          ? "I can help you with various account-related services. Are you interested in:\n• Bank account opening\n• Account maintenance\n• Online account access\nPlease let me know which aspect you'd like to learn more about."
          : "我可以協助你處理各種帳戶相關服務。你是否對以下感興趣：\n• 開設銀行帳戶\n• 帳戶維護\n• 網上帳戶存取\n請告訴我你想了解哪個方面。"
      }
    }
    else if (query.includes("service")) {
      answer = language === 'en'
        ? "We offer a wide range of company secretary services. Here are our main service categories:\n" +
          "• Company Formation\n• Corporate Compliance\n• Business Registration\n• Document Filing\n• Bank Account Assistance\n\n" +
          "Which service would you like to know more about?"
        : "我們提供廣泛的公司秘書服務。以下是我們的主要服務類別：\n" +
          "• 公司成立\n• 企業合規\n• 商業登記\n• 文件存檔\n• 銀行開戶協助\n\n" +
          "你想了解哪項服務的詳情？"
    }
    else if (query.includes("price") || query.includes("cost") || query.includes("fee") || 
             query.includes("價格") || query.includes("收費")) {
      answer = FAQ[language]["How much does it cost?"]
    }
    else if (query.includes("document") || query.includes("文件")) {
      answer = FAQ[language]["What documents do I need?"]
    }
    else if (faqMatches.length > 0) {
      // Use the best matching FAQ answer
      answer = faqMatches[0][1]
    }
    else {
      // Generate a contextual response for unknown queries
      answer = language === 'en'
        ? "I understand you're asking about " + query + ". While I don't have specific information about that, I'd be happy to help you understand our services better. Could you please provide more details about what you're looking for?\n\nAlternatively, you can reach our team at +852 5407 6026 or email pinnwiselimited@gmail.com for personalized assistance."
        : "我明白你在詢問關於" + query + "的問題。雖然我沒有具體相關資訊，但我很樂意幫助你更好地了解我們的服務。你能詳細說明你想了解的內容嗎？\n\n另外，你也可以致電 +852 5407 6026 或電郵至 pinnwiselimited@gmail.com 獲取個人化協助。"
    }

    // Add bot response with delay
    setTimeout(() => {
      setMessages(prev => [...prev, { text: answer, isBot: true }])
    }, 500)

    setInputText("")
  }

  return (
    <Card className="w-full bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="flex flex-col h-[600px]">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.isBot
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-blue-500 text-white'
                }`}
              >
                <pre className="whitespace-pre-wrap font-sans">{msg.text}</pre>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder={language === 'en' ? "Type your question..." : "輸入您的問題..."}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </Card>
  )
}
