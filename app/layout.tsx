import { Inter } from "next/font/google"
import { ContactBar } from "./components/contact-bar"
import { LanguageProvider } from "./context/language-context"
import "./globals.css"
import type React from "react"
import dynamic from "next/dynamic"
import { Toaster } from "@/components/ui/toaster"
import GoogleAnalytics from "@/components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PinnacleWise - Professional Company Services",
  description: "Your trusted partner for comprehensive business solutions in Hong Kong",
  keywords: "Hong Kong business services, company formation, accounting, tax services, corporate services",
  authors: [{ name: "PinnacleWise" }],
  openGraph: {
    title: "PinnacleWise - Professional Company Services",
    description: "Your trusted partner for comprehensive business solutions in Hong Kong",
    url: "https://pinncalewise.com",
    siteName: "PinnacleWise",
    locale: "zh_HK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  alternates: {
    canonical: "https://pinncalewise.com",
  }
}

// Dynamically import components that use framer-motion with SSR disabled
const DynamicNavbar = dynamic(() => import("./components/navbar").then((mod) => ({ default: mod.Navbar })), {
  ssr: false,
})
const DynamicFooter = dynamic(() => import("./components/footer"), {
  ssr: false,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
      <GoogleAnalytics />
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <ContactBar />
            <DynamicNavbar />
            <main className="flex-grow">{children}</main>
            
            <DynamicFooter />
            <Toaster />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
