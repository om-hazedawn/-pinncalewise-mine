'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Building2, HeadphonesIcon, Lightbulb, UserCheck, Users } from "lucide-react"
import { Logo } from "@/components/logo"
import { Banner } from "./components-banner"
import { PricingSection } from "./components-pricing"
import { ServicesSection } from "./components-services"
import { useRouter } from "next/navigation"

export function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    // WhatsApp link with Hong Kong phone number
    const whatsappUrl = `https://wa.me/85295311156`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLearnMore = () => {
    router.push('/services');  // Navigate to services page
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl font-semibold text-foreground">Pinnacle</span>
                <span className="text-xl font-semibold text-primary">Wise</span>
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground">
                  Professional<br />
                  Company Services
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Your trusted partner for comprehensive business solutions.
                  We help companies grow, innovate, and succeed.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 min-w-[140px]"
                    onClick={handleGetStarted}
                  >
                    Get Started
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="min-w-[140px]"
                    onClick={handleLearnMore}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Banner />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-white shadow-lg border-2 border-primary/10 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {stat.title}
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 text-center transition-colors duration-300">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
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
                className="group p-6 rounded-2xl bg-white shadow-lg border-2 border-primary/10 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const stats = [
  {
    title: "10+ Years",
    description: "Of Excellence",
    icon: Building2
  },
  {
    title: "1000+",
    description: "Satisfied Clients",
    icon: Users
  },
  {
    title: "24/7",
    description: "Award Winning Support",
    icon: HeadphonesIcon
  }
]

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
