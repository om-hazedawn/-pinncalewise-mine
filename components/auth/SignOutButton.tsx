"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { signOut } from '@/lib/firebase/signout'

interface SignOutButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  className?: string
}

export const SignOutButton: React.FC<SignOutButtonProps> = ({ 
  variant = 'default',
  className = ''
}) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    try {
      const result = await signOut()
      if (result.success) {
        // Redirect to home page after successful sign out
        router.push('/')
        router.refresh()
      } else {
        console.error('Sign out failed:', result.error)
      }
    } catch (error) {
      console.error('Error during sign out:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button 
      variant={variant} 
      className={className}
      onClick={handleSignOut}
      disabled={isLoading}
    >
      {isLoading ? 'Signing out...' : 'Sign out'}
    </Button>
  )
}
