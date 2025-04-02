"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { submitContactFormToSupabase } from "@/lib/supabase/contactService";
import { useLanguage } from "../context/language-context"

export default function ContactPage() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "", // Empty string instead of null
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactFormToSupabase({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: undefined,
        message: formData.message,
        service: formData.service
      });

      if (result.success) {
        // Show success toast notification and alert
        toast({
          title: language === "en" ? "Message Sent" : "訊息已發送",
          description: language === "en" ? "Thank you for your inquiry. We will get back to you soon." : "感謝您的查詢，我們將盡快回覆您。",
        });
        
        alert(language === "en" ? "Contact form submitted successfully!" : "表單提交成功！");

        // Reset form fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          service: "",
          company: "",
        });
      } else {
        // Show error toast
        toast({
          title: language === "en" ? "Send Failed" : "發送失敗",
          description: language === "en" ? result.error?.message || "Error submitting form. Please try again later." : result.error?.message || "提交表單時出錯，請稍後再試。",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: language === "en" ? "Send Failed" : "發送失敗",
        description: language === "en" ? "Error submitting form. Please try again later." : "提交表單時出錯，請稍後再試。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{language === "en" ? "Contact Us" : "聯絡我們"}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">{language === "en" ? "Contact Information" : "聯絡方式"}</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-primary shrink-0 mr-3" />
              <div>
                <h3 className="font-semibold mb-1">{language === "en" ? "Address" : "地址"}</h3>
                {language === "en" ? "Room 3, 17/F, Trendy Centre, 682 Castle Peak Road, Lai Chi Kok, Kowloom" : "荔枝角青山道682號潮流工貿中心17樓3室"}
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-primary shrink-0 mr-3" />
              <div>
                <h3 className="font-semibold mb-1">{language === "en" ? "Phone" : "電話"}</h3>
                <p>+852 9531 1156</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-6 w-6 text-primary shrink-0 mr-3" />
              <div>
                <h3 className="font-semibold mb-1">{language === "en" ? "Email" : "電郵"}</h3>
                <p>pinnwiselimited@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">{language === "en" ? "Business Hours" : "營業時間"}</h3>
            <div className="space-y-1">
              <p>{language === "en" ? "Monday to Friday: 10:00-19:00" : "星期一至五: 10:00-19:00"}</p>
              <p className="text-sm text-muted-foreground">{language === "en" ? "Closed on Saturdays, Sundays and public holidays" : "星期六、日及公眾假期休息"}</p>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{language === "en" ? "Send Message" : "發送訊息"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  {language === "en" ? "Name" : "姓名"}
                </label>
                <Input
                  id="name"
                  placeholder={language === "en" ? "Please enter your name" : "請輸入您的姓名"}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {language === "en" ? "Email" : "電郵"}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={language === "en" ? "Please enter your email" : "請輸入您的電郵"}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  {language === "en" ? "Phone" : "電話"}
                </label>
                <Input
                  id="phone"
                  placeholder={language === "en" ? "Please enter your phone number" : "請輸入您的電話"}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  {language === "en" ? "Message" : "訊息"}
                </label>
                <Textarea
                  id="message"
                  placeholder={language === "en" ? "Please enter your message" : "請輸入您的訊息"}
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button 
                className="w-full" 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? (language === "en" ? "Sending..." : "正在發送...")
                  : (language === "en" ? "Send Message" : "發送訊息")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
