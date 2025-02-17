"use client"

import { Mail, Phone } from "lucide-react"

export function ContactBar() {
  return (
    <div className="bg-black/90 text-white py-2 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <a href="mailto:info@pinnaclewise.com" className="hover:text-gray-300">
              info@pinnaclewise.com
            </a>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <a href="tel:+85295311156" className="hover:text-gray-300">
              +852 9531 1156
            </a>
          </div>
        </div>
        <div className="text-gray-400">Open Mon - Fri 10:00-19:00</div>
      </div>
    </div>
  )
}

