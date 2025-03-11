"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib/firebase/firebase"
import { SignOutButton } from "@/components/auth/SignOutButton"

export default function Dashboard() {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // If not loading and no user, redirect to login
    if (mounted && !loading && !user) {
      router.push("/auth/login")
    }
  }, [user, loading, router, mounted])

  if (!mounted || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Loading...</CardTitle>
            <CardDescription>Please wait while we load your dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-8 w-full bg-gray-200 animate-pulse rounded-md"></div>
            <div className="h-8 w-full bg-gray-200 animate-pulse rounded-md"></div>
            <div className="h-8 w-full bg-gray-200 animate-pulse rounded-md"></div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!user) {
    return null // This should not render as the useEffect will redirect
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome to Your Dashboard</CardTitle>
          <CardDescription>
            Manage your account and preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-medium">User Profile</h3>
            <div className="mt-2 space-y-2">
              <p className="text-sm"><span className="font-semibold">Email:</span> {user.email}</p>
              <p className="text-sm"><span className="font-semibold">Display Name:</span> {user.displayName || "Not set"}</p>
              <p className="text-sm"><span className="font-semibold">Email Verified:</span> {user.emailVerified ? "Yes" : "No"}</p>
            </div>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-medium">Quick Actions</h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                onClick={() => router.push("/auth/profile")}
                className="w-full"
              >
                Edit Profile
              </Button>
              <Button 
                variant="outline" 
                onClick={() => router.push("/auth/reset-password")}
                className="w-full"
              >
                Reset Password
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="ghost" 
            onClick={() => router.push("/")}
          >
            Back to Home
          </Button>
          <SignOutButton />
        </CardFooter>
      </Card>
    </div>
  )
}
