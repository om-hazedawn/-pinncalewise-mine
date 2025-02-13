"use client"

import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import { ElegantShape } from "./elegant-shape"
import { Button } from "@/components/ui/button"
import { StaticDiv } from "./static-motion"
import { useLanguage } from "../context/language-context"
import { openWhatsApp } from "@/app/utils/whatsapp"

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
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <StaticDiv
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <span className="text-sm text-white/60 tracking-wide">{currentContent.subtitle}</span>
          </StaticDiv>

          <StaticDiv custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {currentContent.titleLine1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
                  pacifico.className,
                )}
              >
                {currentContent.titleLine2}
              </span>
            </h1>
          </StaticDiv>

          <StaticDiv custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {currentContent.description}
            </p>
          </StaticDiv>

          <StaticDiv
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 font-medium px-8"
              onClick={() => openWhatsApp(language === "en" ? "Company Secretary Service" : "公司秘書服務")}
            >
              {currentContent.buttonPrimary}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white bg-black hover:bg-black/80 hover:text-white font-medium px-8"
              onClick={() => openWhatsApp(language === "en" ? "Company Secretary Service" : "公司秘書服務")}
            >
              {currentContent.buttonSecondary}
            </Button>
          </StaticDiv>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}
