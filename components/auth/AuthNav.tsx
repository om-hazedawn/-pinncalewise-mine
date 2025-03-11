"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib/firebase/firebase"
import { SignOutButton } from "./SignOutButton"

export const AuthNav = () => {
  const [user, loading] = useAuthState(auth)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  // When the component is not yet mounted (during SSR), return a placeholder
  // to prevent hydration errors
  if (!mounted) {
    return (
      <div className="flex space-x-2">
        <div className="w-20 h-10 bg-gray-200 animate-pulse rounded-md"></div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex space-x-2">
        <div className="w-20 h-10 bg-gray-200 animate-pulse rounded-md"></div>
      </div>
    )
  }

  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={() => router.push("/dashboard")}>
          Dashboard
        </Button>
        <SignOutButton variant="outline" />
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" asChild>
        <Link href="/auth/login">Login</Link>
      </Button>
      <Button variant="default" asChild>
        <Link href="/auth/register">Register</Link>
      </Button>
    </div>
  )
}
