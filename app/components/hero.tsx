"use client";

import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { StaticDiv } from "./static-motion";
import { useLanguage } from "../context/language-context";
import { openContactForm } from "@/app/utils/contact";
import { useRouter } from "next/navigation";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

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
};

export function Hero() {
  const { language } = useLanguage();
  const router = useRouter();
  const currentContent = content[language];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url("/background.webp")' }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <StaticDiv
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 md:mb-12"
          >
            <span className="text-2xl md:text-3xl text-white font-semibold tracking-wider">
              {currentContent.subtitle}
            </span>
          </StaticDiv>

          <StaticDiv
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="text-white">{currentContent.titleLine1}</span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/95 to-rose-300 drop-shadow-[0_5px_15px_rgba(255,255,255,0.15)]",
                  pacifico.className
                )}
              >
                {currentContent.titleLine2}
              </span>
            </h1>
          </StaticDiv>

          <StaticDiv
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {currentContent.description}
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
              className="bg-white text-black hover:bg-white/90 font-medium px-8 py-6"
              onClick={() =>
                openContactForm(
                  language === "en"
                    ? "Company Secretary Service"
                    : "公司秘書服務"
                )
              }
            >
              {currentContent.buttonPrimary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/60 bg-white/10 hover:bg-white/25 hover:text-white hover:border-white/90 font-medium px-8 py-6 transition-all duration-300"
              onClick={() => router.push("/about")}
            >
              {currentContent.buttonSecondary}
            </Button>
          </StaticDiv>
        </div>
      </div>
    </div>
  );
}
