"use client"

import { useEffect } from "react"

export function useSupressHydrationWarnings() {
  useEffect(() => {
    // This will run only on the client side
    document.documentElement.setAttribute("suppress-hydration-warning", "")
  }, [])
}

