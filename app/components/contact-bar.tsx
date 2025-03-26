"use client";

import { Mail, Phone } from "lucide-react";

export function ContactBar() {
  return (
    <div className="bg-black/90 text-white py-2 px-2 sm:px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-xs sm:text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <a
              href="mailto:pinnwiselimited@gmail.com"
              className="hover:text-gray-300 break-all sm:break-normal"
            >
              pinnwiselimited@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <a href="tel:+85295311156" className="hover:text-gray-300">
              +852 9531 1156
            </a>
          </div>
        </div>
        <div className="text-gray-400 text-center sm:text-left">
          Open Mon - Fri 10:00-19:00
        </div>
      </div>
    </div>
  );
}
