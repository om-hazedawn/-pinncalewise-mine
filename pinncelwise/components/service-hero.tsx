'use client'

import { motion } from 'framer-motion'

interface ServiceHeroProps {
  title: string
  subtitle: string
  imageUrl: string
}

export function ServiceHero({ title, subtitle, imageUrl }: ServiceHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/20 to-background pt-16 pb-24">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
