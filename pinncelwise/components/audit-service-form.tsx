'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

const formSchema = z.object({
  serviceType: z.string(),
  businessNature: z.string().min(2, {
    message: "Business nature must be at least 2 characters.",
  }),
  recordsComplete: z.string(),
  annualRevenue: z.string(),
  monthlyTransactions: z.string(),
  serviceRequirements: z.string(),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(8, {
    message: "Phone number must be at least 8 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

interface AuditServiceFormProps {
  language: 'en' | 'zh'
}

export function AuditServiceForm({ language }: AuditServiceFormProps) {
  const router = useRouter()

  const translations = {
    en: {
      title: "Accounting Service Application",
      subtitle: "Please fill in the form below. We promise to respond within 24 hours after receiving your information.",
      serviceType: "Service Type",
      monthlyAccounting: "Monthly Accounting Service",
      businessNature: "Business Nature",
      recordsComplete: "Are income, expense documents and bank records complete?",
      complete: "Complete",
      annualRevenue: "Annual Revenue (HKD)",
      monthlyTransactions: "Average Monthly Transactions",
      serviceRequirements: "Service Requirements",
      contactInfo: "Contact Information",
      name: "Name",
      phone: "Phone",
      email: "Email",
      submit: "Submit",
      success: "Form submitted successfully! Redirecting to WhatsApp...",
      error: "Please fill in all required fields correctly."
    },
    zh: {
      title: "會計服務申請",
      subtitle: "請填妥以下資料，本公司服務承諾收到資料後24小時內回覆。",
      serviceType: "服務類別",
      monthlyAccounting: "月結會計服務",
      businessNature: "業務性質",
      recordsComplete: "收入、支出單據和銀行出入數紀錄是否齊全？",
      complete: "齊全",
      annualRevenue: "全年營業額 (HKD)",
      monthlyTransactions: "平均每月交易宗數",
      serviceRequirements: "服務要求",
      contactInfo: "聯絡人資料",
      name: "姓名",
      phone: "電話",
      email: "電郵",
      submit: "提交",
      success: "表格提交成功！正在轉到WhatsApp...",
      error: "請正確填寫所有必填項目。"
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: "monthly",
      businessNature: "",
      recordsComplete: "complete",
      annualRevenue: "",
      monthlyTransactions: "",
      serviceRequirements: "",
      name: "",
      phone: "",
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Format the message for WhatsApp
      const message = `*${translations[language].title}*\n\n` +
        `${translations[language].serviceType}: ${values.serviceType}\n` +
        `${translations[language].businessNature}: ${values.businessNature}\n` +
        `${translations[language].recordsComplete}: ${values.recordsComplete}\n` +
        `${translations[language].annualRevenue}: ${values.annualRevenue}\n` +
        `${translations[language].monthlyTransactions}: ${values.monthlyTransactions}\n` +
        `${translations[language].serviceRequirements}: ${values.serviceRequirements}\n\n` +
        `*${translations[language].contactInfo}*\n` +
        `${translations[language].name}: ${values.name}\n` +
        `${translations[language].phone}: ${values.phone}\n` +
        `${translations[language].email}: ${values.email}`

      // WhatsApp phone number (Hong Kong format)
      const phoneNumber = '85295311156' // Updated WhatsApp number with Hong Kong country code

      // Create WhatsApp URL with encoded message
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

      // Show success message
      toast.success(translations[language].success)

      // Redirect to WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank')
      }, 1000)
    } catch (error) {
      toast.error(translations[language].error)
      console.error('Form submission error:', error)
    }
  }

  const t = translations[language]

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{t.title}</h2>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>

        <FormField>
          <FormLabel>{t.serviceType} *</FormLabel>
          <FormControl>
            <Input type="text" {...form.register('serviceType')} />
          </FormControl>
          <FormMessage />
        </FormField>

        <FormField>
          <FormLabel>{t.businessNature} *</FormLabel>
          <FormControl>
            <Input type="text" {...form.register('businessNature')} />
          </FormControl>
          <FormMessage />
        </FormField>

        <FormField>
          <FormLabel>{t.recordsComplete}</FormLabel>
          <FormControl>
            <Input type="text" {...form.register('recordsComplete')} />
          </FormControl>
          <FormMessage />
        </FormField>

        <FormField>
          <FormLabel>{t.annualRevenue}</FormLabel>
          <FormControl>
            <Input type="number" {...form.register('annualRevenue')} />
          </FormControl>
          <FormMessage />
        </FormField>

        <FormField>
          <FormLabel>{t.monthlyTransactions} *</FormLabel>
          <FormControl>
            <Input type="number" {...form.register('monthlyTransactions')} />
          </FormControl>
          <FormMessage />
        </FormField>

        <FormField>
          <FormLabel>{t.serviceRequirements}</FormLabel>
          <FormControl>
            <Textarea {...form.register('serviceRequirements')} />
          </FormControl>
          <FormMessage />
        </FormField>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t.contactInfo}</h3>
          <div className="space-y-4">
            <FormField>
              <FormLabel>{t.name} *</FormLabel>
              <FormControl>
                <Input type="text" {...form.register('name')} />
              </FormControl>
              <FormMessage />
            </FormField>

            <FormField>
              <FormLabel>{t.phone} *</FormLabel>
              <FormControl>
                <Input type="tel" {...form.register('phone')} />
              </FormControl>
              <FormMessage />
            </FormField>

            <FormField>
              <FormLabel>{t.email} *</FormLabel>
              <FormControl>
                <Input type="email" {...form.register('email')} />
              </FormControl>
              <FormMessage />
            </FormField>
          </div>
        </div>

        <Button type="submit" className="w-full">{t.submit}</Button>
      </form>
    </Form>
  )
}
