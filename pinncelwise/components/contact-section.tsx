'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { PhoneIcon, MessageSquare } from 'lucide-react'

interface ContactSectionProps {
  title: string
  description: string
  phone: string
  whatsapp: string
}

export function ContactSection({ title, description, phone, whatsapp }: ContactSectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-muted-foreground mb-12">{description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <PhoneIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">電話查詢</h3>
              <p className="text-muted-foreground mb-6">{phone}</p>
              <Button variant="outline" className="w-full">
                立即致電
              </Button>
            </Card>
            
            <Card className="p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">WhatsApp</h3>
              <p className="text-muted-foreground mb-6">{whatsapp}</p>
              <Button variant="outline" className="w-full">
                WhatsApp 聯絡
              </Button>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
