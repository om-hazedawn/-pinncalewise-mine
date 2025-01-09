'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-high-contrast">
                Professional Company Services
              </h1>
              <p className="text-xl text-medium-contrast max-w-[600px]">
                Your trusted partner for comprehensive business solutions. We help companies grow, innovate, and succeed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/hero-image.jpg"
                alt="Professional Services"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-high-contrast mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-medium-contrast max-w-[800px] mx-auto">
              We deliver exceptional results through our expertise, dedication, and innovative solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-white shadow-lg border-2 border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-high-contrast">{feature.title}</h3>
                <p className="text-medium-contrast">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const features = [
  {
    title: "Expert Team",
    description: "Our team of professionals brings years of experience and expertise to every project.",
    icon: UserCheck
  },
  {
    title: "Innovative Solutions",
    description: "We leverage cutting-edge technology and methodologies to solve complex challenges.",
    icon: Lightbulb
  },
  {
    title: "Dedicated Support",
    description: "24/7 support and guidance to ensure your business success at every step.",
    icon: HeadphonesIcon
  }
]

import { HeadphonesIcon, Lightbulb, UserCheck } from "lucide-react"
