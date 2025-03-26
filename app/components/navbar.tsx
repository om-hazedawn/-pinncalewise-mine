"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigationItems } from "../config/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "../context/language-context";
import MinimalLogo from "./MinimalLogo";
import { AuthNav } from "@/components/auth/AuthNav";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const currentNavItems = navigationItems[language];

  return (
    <nav className="bg-white border-b w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center min-h-[5rem] py-2">
          {/* Logo Section - Larger size and no shrinking */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 mr-4 h-[52px] max-w-[200px]"
          >
            <MinimalLogo width={85} height={68} className="hidden lg:block mr-3" />
            <span className="font-bold text-xl lg:text-2xl whitespace-nowrap">
              PinnacleWise
            </span>
          </Link>

          {/* Desktop Navigation - All items visible with wrapping */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
              {/* Navigation Items */}
              {currentNavItems.map((item) => (
                <div key={item.href} className="flex-shrink-0">
                  {item.items ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="h-8 px-2.5 whitespace-nowrap text-sm"
                        >
                          <span>{item.title}</span>
                          <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center" className="w-48">
                        {item.items.map((subItem) => (
                          <DropdownMenuItem key={subItem.href} asChild>
                            <Link
                              href={subItem.href}
                              className="w-full whitespace-nowrap"
                            >
                              {subItem.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 px-2.5 py-1.5 rounded-md text-sm font-medium inline-flex items-center h-8 whitespace-nowrap"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-5 flex-shrink-0 ml-8">
            <Link href="/chat" className="text-gray-600 hover:text-gray-900">
              <Button variant="ghost" className="h-10 whitespace-nowrap">
                Chat Assistant
              </Button>
            </Link>
            <LanguageSwitcher />
            <AuthNav />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3 flex-shrink-0">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-3 border-t bg-white">
              {/* Navigation Items */}
              {currentNavItems.map((item) =>
                item.items ? (
                  <div key={item.href} className="space-y-1">
                    <div className="text-gray-800 px-3 py-2 text-base font-medium whitespace-nowrap">
                      {item.title}
                    </div>
                    <div className="pl-5 space-y-1 border-l-2 border-gray-200">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="text-gray-600 hover:text-gray-900 block px-3 py-1.5 text-sm font-medium whitespace-nowrap"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              )}

              {/* Additional items */}
              <div className="border-t border-gray-200 my-2"></div>
              <Link
                href="/chat"
                className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap"
                onClick={() => setIsOpen(false)}
              >
                Chat Assistant
              </Link>
              <div className="px-3 py-2">
                <AuthNav />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
