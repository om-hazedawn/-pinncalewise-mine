"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { submitContactFormToSupabase } from "@/lib/supabase/contactService";

export default function ContactPage() {
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
          title: "訊息已發送",
          description: "感謝您的查詢，我們將盡快回覆您。",
        });
        
        alert("Contact form submitted successfully!");

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
          title: "發送失敗",
          description: result.error?.message || "提交表單時出錯，請稍後再試。",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "發送失敗",
        description: "提交表單時出錯，請稍後再試。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">聯絡我們</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">聯絡方式</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-primary shrink-0 mr-3" />
              <div>
                <h3 className="font-semibold mb-1">地址</h3>
                <p>香港</p>
                <p>九龍荔枝角</p>
                <p>永康街9號</p>
                <p>18樓1806室</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-primary shrink-0 mr-3" />
              <div>
                <h3 className="font-semibold mb-1">電話</h3>
                <p>+852 9531 1156</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-6 w-6 text-primary shrink-0 mr-3" />
              <div>
                <h3 className="font-semibold mb-1">電郵</h3>
                <p>pinnwiselimited@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">營業時間</h3>
            <p>星期一至五: 10:00-19:00</p>
            <p>星期六、日及公眾假期休息</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>發送訊息</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  姓名
                </label>
                <Input
                  id="name"
                  placeholder="請輸入您的姓名"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  電郵
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="請輸入您的電郵"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  電話
                </label>
                <Input
                  id="phone"
                  placeholder="請輸入您的電話"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  訊息
                </label>
                <Textarea
                  id="message"
                  placeholder="請輸入您的訊息"
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
                {isSubmitting ? "正在發送..." : "發送訊息"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
