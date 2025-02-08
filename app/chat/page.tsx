import { ChatBot } from "../components/chat-bot"
import { AnimatedBackground } from "../components/animated-background"
import { PageHeader } from "../components/page-header"

export default function ChatPage() {
  return (
    <AnimatedBackground variant="subtle">
      <div className="container mx-auto px-4 py-12">
        <PageHeader title="Chat with Us" description="Get instant answers about our services 24/7" accent />
        <ChatBot />
      </div>
    </AnimatedBackground>
  )
}

