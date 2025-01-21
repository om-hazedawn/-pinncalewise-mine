'use client'

import { LayoutWrapper } from '@/components/components-layout-wrapper'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { Building, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

const content = {
  en: {
    title: "Contact Us",
    subtitle: "Get in touch with our team",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      messagePlaceholder: "How can we help you?"
    },
    contact: {
      title: "Contact Information",
      address: {
        label: "Address",
        value: "Central, Hong Kong"
      },
      phone: {
        label: "Phone",
        value: "+852 1234 5678"
      },
      email: {
        label: "Email",
        value: "info@pinnaclewise.com"
      }
    }
  },
  zh: {
    title: "聯絡我們",
    subtitle: "與我們的團隊聯繫",
    form: {
      name: "姓名",
      email: "電郵",
      message: "訊息",
      submit: "發送訊息",
      namePlaceholder: "請輸入您的姓名",
      emailPlaceholder: "請輸入您的電郵",
      messagePlaceholder: "我們如何幫助您？"
    },
    contact: {
      title: "聯絡資料",
      address: {
        label: "地址",
        value: "香港中環"
      },
      phone: {
        label: "電話",
        value: "+852 1234 5678"
      },
      email: {
        label: "電郵",
        value: "info@pinnaclewise.com"
      }
    }
  }
}

export default function Contact() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en')
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const text = content[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        alert(language === 'en' ? 'Message sent successfully!' : '訊息發送成功！');
      } else {
        alert(language === 'en' ? 'Failed to send message. Please try again.' : '發送訊息失敗。請重試。');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(language === 'en' ? 'An error occurred. Please try again.' : '發生錯誤。請重試。');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <LayoutWrapper>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 pointer-events-none" />
        
        <section className="relative w-full py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center space-y-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {text.title}
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl">
                {text.subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{text.form.name}</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={text.form.namePlaceholder}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{text.form.email}</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={text.form.emailPlaceholder}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{text.form.message}</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={text.form.messagePlaceholder}
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        language === 'en' ? 'Sending...' : '發送中...'
                      ) : (
                        text.form.submit
                      )}
                    </Button>
                  </form>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">{text.contact.title}</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">{text.contact.address.label}</p>
                        <p className="text-muted-foreground">{text.contact.address.value}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">{text.contact.phone.label}</p>
                        <p className="text-muted-foreground">{text.contact.phone.value}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">{text.contact.email.label}</p>
                        <p className="text-muted-foreground">{text.contact.email.value}</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Building className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Office Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}
