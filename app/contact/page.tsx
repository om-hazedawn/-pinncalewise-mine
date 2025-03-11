"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { formService } from "@/lib/formService";
import { toast } from "@/components/ui/use-toast";
import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user] = useAuthState(auth);

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
      // Submit form data to Firebase via our form service
      const response = await formService.SubmitForm({
        Name: formData.Name,
        Email: formData.Email,
        Phone: formData.Phone,
        Message: formData.Message,
        FormType: "contact",
        UserId: user?.uid
      });

      if (response.Success) {
        // Show success toast notification
        toast({
          title: "訊息已發送",
          description: "感謝您的查詢，我們將盡快回覆您。",
        });

        // Reset form fields
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Message: ""
        });

        // Post to API for email sending
        await fetch("/api/crm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.Name,
            email: formData.Email,
            phone: formData.Phone,
            message: formData.Message,
            formType: "contact",
            userId: user?.uid
          }),
        });
      } else {
        // Show error toast
        toast({
          title: "發送失敗",
          description: response.Message,
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
                <label htmlFor="Name" className="block text-sm font-medium mb-1">
                  姓名
                </label>
                <Input 
                  id="Name" 
                  placeholder="請輸入您的姓名" 
                  value={formData.Name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="Email" className="block text-sm font-medium mb-1">
                  電郵
                </label>
                <Input 
                  id="Email" 
                  type="email" 
                  placeholder="請輸入您的電郵" 
                  value={formData.Email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="Phone" className="block text-sm font-medium mb-1">
                  電話
                </label>
                <Input 
                  id="Phone" 
                  placeholder="請輸入您的電話" 
                  value={formData.Phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="Message" className="block text-sm font-medium mb-1">
                  訊息
                </label>
                <Textarea 
                  id="Message" 
                  placeholder="請輸入您的訊息" 
                  rows={4}
                  value={formData.Message}
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
