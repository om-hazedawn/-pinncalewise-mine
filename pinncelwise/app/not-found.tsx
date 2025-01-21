'use client'

import { LayoutWrapper } from '@/components/components-layout-wrapper'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <LayoutWrapper>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            404
          </h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground max-w-[500px] mx-auto">
            Sorry, we couldn't find the page you're looking for. Please check the URL or return to our homepage.
          </p>
          <Button asChild className="mt-4">
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </LayoutWrapper>
  )
}
