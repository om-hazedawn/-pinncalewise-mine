"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { submitContactFormToSupabase, SupabaseContactFormData } from "@/lib/supabase/contactService"
import { useLanguage } from "../context/language-context"
import { Loader2, CheckCircle2 } from "lucide-react" // Import icons

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string({
    required_error: "Please select a service you're interested in.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

type FormValues = z.infer<typeof formSchema>

const content = {
  en: {
    title: "Contact Us",
    subtitle: "Get in touch with our team",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    phonePlaceholder: "Your phone number (optional)",
    companyPlaceholder: "Your company (optional)",
    messagePlaceholder: "How can we help you?",
    serviceLabel: "Service Interested In",
    services: {
      companySecretary: "Company Secretary",
      accounting: "Accounting & Taxation",
      businessRegistration: "Business Registration",
      virtualOffice: "Virtual Office",
      other: "Other Services"
    },
    submitButton: "Submit Inquiry",
    submitting: "Submitting...",
    successMessage: "Your message has been sent! We'll get back to you soon.",
    errorMessage: "There was an error submitting your form. Please try again."
  },
  zh: {
    title: "聯絡我們",
    subtitle: "與我們的團隊聯繫",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "您的電子郵件",
    phonePlaceholder: "您的電話號碼（可選）",
    companyPlaceholder: "您的公司（可選）",
    messagePlaceholder: "我們如何幫助您？",
    serviceLabel: "感興趣的服務",
    services: {
      companySecretary: "公司秘書",
      accounting: "會計與稅務",
      businessRegistration: "商業註冊",
      virtualOffice: "虛擬辦公室",
      other: "其他服務"
    },
    submitButton: "提交查詢",
    submitting: "提交中...",
    successMessage: "您的訊息已發送！我們將很快回覆您。",
    errorMessage: "提交表單時出錯。請再試一次。"
  }
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()
  const { language } = useLanguage()
  const currentContent = content[language]

  const submitButtonContent = () => {
    if (isSubmitting) {
      return (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {currentContent.submitting}
        </>
      )
    }
    if (isSuccess) {
      return (
        <>
          <CheckCircle2 className="mr-2 h-4 w-4 animate-bounce" />
          {currentContent.successMessage}
        </>
      )
    }
    return currentContent.submitButton
  }

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    setIsSuccess(false)
    
    try {
      // Submit to Supabase
      const result = await submitContactFormToSupabase(data);
      
      if (!result.success) {
        throw new Error(result.error?.message || 'Failed to submit contact form');
      }
      
      // Show success message
      toast({
        title: "Success!",
        description: currentContent.successMessage,
        duration: 5000,
      })
      
      setIsSuccess(true)
      
      // Reset form after a short delay to show success state
      setTimeout(() => {
        form.reset()
        setIsSuccess(false)
      }, 2000)
    } catch (error) {
      console.error("Contact form submission error:", error);
      
      // Show error message with specific details if available
      const errorMessage = error instanceof Error
        ? error.message
        : currentContent.errorMessage;
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
      }, 500) // Small delay to ensure loading state is visible
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-lg shadow-lg">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">{currentContent.title}</h2>
        <p className="text-white/60">{currentContent.subtitle}</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder={currentContent.namePlaceholder} 
                    {...field} 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder={currentContent.emailPlaceholder} 
                    type="email" 
                    {...field} 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Phone</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={currentContent.phonePlaceholder} 
                      type="tel" 
                      {...field} 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Company</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={currentContent.companyPlaceholder} 
                      {...field} 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">{currentContent.serviceLabel}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder={currentContent.serviceLabel} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-900 border-white/10 text-white">
                    <SelectItem value="company-secretary">{currentContent.services.companySecretary}</SelectItem>
                    <SelectItem value="accounting">{currentContent.services.accounting}</SelectItem>
                    <SelectItem value="business-registration">{currentContent.services.businessRegistration}</SelectItem>
                    <SelectItem value="virtual-office">{currentContent.services.virtualOffice}</SelectItem>
                    <SelectItem value="other">{currentContent.services.other}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={currentContent.messagePlaceholder} 
                    rows={4} 
                    {...field} 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-medium transition-all duration-300 ${
              isSuccess
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-gradient-to-r from-white to-white/90 text-black hover:from-white/95 hover:to-white/85'
            } shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]`}
          >
            {submitButtonContent()}
          </Button>
        </form>
      </Form>
    </div>
  )
}
