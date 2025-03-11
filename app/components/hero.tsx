"use client"

import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import { ElegantShape } from "./elegant-shape"
import { Button } from "@/components/ui/button"
import { StaticDiv } from "./static-motion"
import { useLanguage } from "../context/language-context"
import { openContactForm } from "@/app/utils/contact"
import { useEffect, useState } from "react"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

const content = {
  en: {
    subtitle: "PinnacleWise",
    titleLine1: "Professional",
    titleLine2: "Company Services",
    description:
      "Your trusted partner for comprehensive business solutions. We help companies grow, innovate, and succeed.",
    buttonPrimary: "Get Started",
    buttonSecondary: "Learn More",
  },
  zh: {
    subtitle: "慧思秘書",
    titleLine1: "專業",
    titleLine2: "企業服務",
    description: "您值得信賴的企業服務夥伴。我們助您企業成長、創新和成功。",
    buttonPrimary: "立即開始",
    buttonSecondary: "了解更多",
  },
}

export function Hero() {
  const { language } = useLanguage()
  const currentContent = content[language]
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Enhanced background gradient with animation */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-rose-500/[0.08] blur-3xl animate-pulse" 
        style={{
          transform: `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.18]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.18]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.18]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.18]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.18]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Futuristic grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <StaticDiv
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/[0.1] mb-8 md:mb-12 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all duration-300"
          >
            <span className="text-base text-transparent bg-clip-text bg-gradient-to-r from-white/90 via-white to-white/90 font-medium tracking-wider">
              {currentContent.subtitle}
            </span>
          </StaticDiv>

          <StaticDiv custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 drop-shadow-[0_5px_15px_rgba(255,255,255,0.1)]">
                {currentContent.titleLine1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/95 to-rose-300 drop-shadow-[0_5px_15px_rgba(255,255,255,0.15)]",
                  pacifico.className,
                )}
              >
                {currentContent.titleLine2}
              </span>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-indigo-500/5 blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-rose-500/5 blur-xl animate-pulse-slow"></div>
            </h1>
          </StaticDiv>

          <StaticDiv custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-white/50 mb-10 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4 relative">
              {currentContent.description}
              <span className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-full"></span>
              <span className="absolute -right-4 top-0 h-full w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-full"></span>
            </p>
          </StaticDiv>

          <StaticDiv
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-white to-white/90 text-black hover:from-white/95 hover:to-white/85 font-medium px-8 py-6 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-300"
              onClick={() => openContactForm(language === "en" ? "Company Secretary Service" : "公司秘書服務")}
            >
              {currentContent.buttonPrimary}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white/30 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:text-white hover:border-white/50 font-medium px-8 py-6 transition-all duration-300"
              onClick={() => openContactForm()}
            >
              {currentContent.buttonSecondary}
            </Button>
          </StaticDiv>
        </div>
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
      
      {/* Light glow effect */}
      <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
    </div>
  )
}
