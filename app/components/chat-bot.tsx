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
    
    // Find matching answer
    const questionKey = Object.keys(FAQ[language]).find(key => 
      inputText.toLowerCase().includes(key.toLowerCase()) ||
      key.toLowerCase().includes(inputText.toLowerCase())
    )
    
    const answer = questionKey 
      ? FAQ[language][questionKey as keyof typeof FAQ[typeof language]]
      : language === 'en' 
        ? "For specific inquiries, please contact our team at +852 1234 5678 or email info@pinnaclewise.com" 
        : "如有具體查詢，請致電 +852 1234 5678 或電郵至 info@pinnaclewise.com"

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
