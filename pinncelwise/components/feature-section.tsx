'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'

interface Feature {
  title: string
  description?: string
  items?: string[]
}

interface FeatureSectionProps {
  title: string
  features: Feature[]
}

export function FeatureSection({ title, features }: FeatureSectionProps) {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          {title}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                {feature.description && (
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                )}
                {feature.items && (
                  <ul className="list-disc pl-6 space-y-2">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
