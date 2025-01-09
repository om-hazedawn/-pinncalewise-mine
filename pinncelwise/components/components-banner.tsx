'use client'

import { motion } from "framer-motion"
import { ChevronRight, LineChart, Building2, Users } from "lucide-react"

export function Banner() {
  return (
    <motion.div 
      className="relative w-full h-[400px] rounded-3xl overflow-hidden bg-primary/5"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)',
        backgroundSize: '24px 24px' 
      }} />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <LineChart className="w-12 h-12 text-primary/60 mb-6" />
        </motion.div>
        
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-foreground mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Empowering Your Business Growth
        </motion.h2>
        
        <motion.p
          className="text-muted-foreground mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Innovative solutions for modern business challenges
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center text-primary hover:text-primary/90 transition-colors cursor-pointer"
          whileHover={{ x: 5 }}
        >
          <span className="font-medium">Learn More</span>
          <ChevronRight className="ml-1 w-5 h-5" />
        </motion.div>
      </div>

      {/* Decorative icons */}
      <motion.div
        className="absolute bottom-8 left-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Building2 className="w-16 h-16 text-primary/20" />
      </motion.div>
      
      <motion.div
        className="absolute top-8 right-8"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Users className="w-16 h-16 text-primary/20" />
      </motion.div>
    </motion.div>
  )
}
