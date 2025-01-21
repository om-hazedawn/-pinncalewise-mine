'use client'

import { Mail, Phone } from 'lucide-react'

export function ContactBar() {
  return (
    <div className="w-full bg-primary text-primary-foreground py-1 px-4 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span>Open Mon - Fri 10:00-19:00</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:info@pinnaclewise.com">info@pinnaclewise.com</a>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+85235801380">Call Now: +852 3580 1380</a>
          </div>
          <div className="flex items-center space-x-2">
            <span>WhatsApp: +852 6706 0903</span>
          </div>
        </div>
      </div>
    </div>
  )
}
