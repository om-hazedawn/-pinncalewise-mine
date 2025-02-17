"use client"

import { ChatBot } from "../components/chat-bot"
import { AnimatedBackground } from "../components/animated-background"
import { PageHeader } from "../components/page-header"
import { useLanguage } from "../context/language-context"

export default function ChatPage() {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: "Chat with Us",
      description: "Get instant answers about our services 24/7"
    },
    zh: {
      title: "在線諮詢",
      description: "24/7 即時回答您的查詢"
    }
  }

  return (
    <AnimatedBackground variant="subtle">
      <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-4rem)]">
        <PageHeader 
          title={content[language].title} 
          description={content[language].description} 
          accent 
        />
        <div className="max-w-2xl mx-auto mt-8">
          <ChatBot />
        </div>
      </div>
    </AnimatedBackground>
  )
}
