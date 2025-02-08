"use client"

import { MotionDiv } from "./motion-wrapper"
import { cn } from "@/lib/utils"
import { Bot, User } from "lucide-react"
import type { Message } from "ai"

interface AnimatedMessageProps {
  message: Message
}

export function AnimatedMessage({ message }: AnimatedMessageProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={cn("flex w-full items-start gap-2 mb-4", message.role === "user" ? "flex-row-reverse" : "flex-row")}
    >
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full shrink-0",
          message.role === "user" ? "bg-gradient-to-r from-indigo-500 to-rose-500" : "bg-gray-100 dark:bg-gray-800",
        )}
      >
        {message.role === "user" ? <User className="h-5 w-5 text-white" /> : <Bot className="h-5 w-5 text-gray-600" />}
      </div>
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%]",
          message.role === "user"
            ? "bg-gradient-to-r from-indigo-500 to-rose-500 text-white"
            : "bg-gray-100 dark:bg-gray-800",
        )}
      >
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
      </div>
    </MotionDiv>
  )
}

