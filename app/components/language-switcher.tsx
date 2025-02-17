"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "../context/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Button variant={language === "en" ? "default" : "ghost"} size="sm" onClick={() => setLanguage("en")}>
        EN
      </Button>
      <Button variant={language === "zh" ? "default" : "ghost"} size="sm" onClick={() => setLanguage("zh")}>
        中文
      </Button>
    </div>
  )
}

