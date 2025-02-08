"use client"

import { useChat } from "ai/react"
import { Send, Loader2, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FancyCard } from "./fancy-card"
import { useEffect, useRef, useCallback, FormEvent } from "react"
import { AnimatedMessage } from "./animated-message"
import { AnimatePresence } from "framer-motion"

export function ChatBot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "您好！歡迎來到 PinnacleWise。我可以協助您了解我們的服務。請問有什麼我可以幫您的嗎？\n\nHello! Welcome to PinnacleWise. How may I assist you with our services today?",
      },
    ],
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [scrollToBottom, messages])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(e)
    // Focus the input after submission
    inputRef.current?.focus()
  }

  return (
    <FancyCard className="w-full max-w-2xl mx-auto">
      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Bot className="h-5 w-5" />
            <h2 className="text-lg font-semibold">PinnacleWise Assistant</h2>
          </div>
          <p className="text-sm opacity-90">
            我可以回答關於我們服務的問題！ <br />I can answer questions about our services!
          </p>
        </div>

        <div className="h-[400px] overflow-y-auto space-y-4 p-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <AnimatedMessage key={message.id} message={message} />
            ))}
          </AnimatePresence>

          {isLoading && (
            <div className="flex items-start gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 shrink-0">
                <Bot className="h-5 w-5 text-gray-600" />
              </div>
              <div className="rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-800">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={onSubmit} className="flex gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            placeholder="輸入您的問題... / Type your question..."
            className="flex-1"
            disabled={isLoading}
            autoComplete="off"
            aria-label="Chat input"
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:from-indigo-600 hover:to-rose-600"
            disabled={isLoading || !input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>

        <div className="text-center text-xs text-gray-500">營業時間 / Business Hours: Monday - Friday 10:00-19:00</div>
      </div>
    </FancyCard>
  )
}
