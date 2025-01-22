'use client'

import React from 'react'
import { useState } from 'react'
import { NavBar } from './components-nav-bar'
import { Footer } from './components-footer'
import { ContactBar } from './components-contact-bar'

interface WithLanguageProps {
  language?: 'en' | 'zh'
}

export function LayoutWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const [language, setLanguage] = useState<'en' | 'zh'>('en')

  // Clone children and pass language prop
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement<WithLanguageProps>(child)) {
      return React.cloneElement(child, { language })
    }
    return child
  })

  return (
    <div className="flex min-h-screen flex-col">
      <ContactBar />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <NavBar language={language} setLanguage={setLanguage} />
          </div>
        </div>
      </header>
      <main className="flex-1 w-full overflow-x-hidden">
        {childrenWithProps}
      </main>
      <Footer language={language} />
    </div>
  )
}