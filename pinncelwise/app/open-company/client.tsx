'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

interface Props {
  lang: string
}

export function OpenCompanyClientPage({ lang }: Props) {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">
          {lang === 'zh' ? '開設香港有限公司' : 'Open Hong Kong Limited Company'}
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          {lang === 'zh' 
            ? '專業、快捷、一站式成立香港有限公司服務' 
            : 'Professional, fast, one-stop Hong Kong company incorporation service'}
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="https://wa.me/85298168489">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp {lang === 'zh' ? '查詢' : 'Enquiry'}
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {lang === 'zh' ? '服務範圍' : 'Our Services'}
          </h2>
          <ul className="space-y-2">
            <li>• {lang === 'zh' ? '公司註冊' : 'Company Registration'}</li>
            <li>• {lang === 'zh' ? '公司秘書' : 'Company Secretary'}</li>
            <li>• {lang === 'zh' ? '註冊地址' : 'Registered Address'}</li>
            <li>• {lang === 'zh' ? '開立銀行賬戶' : 'Bank Account Opening'}</li>
          </ul>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {lang === 'zh' ? '為什麼選擇我們' : 'Why Choose Us'}
          </h2>
          <ul className="space-y-2">
            <li>• {lang === 'zh' ? '專業可靠' : 'Professional & Reliable'}</li>
            <li>• {lang === 'zh' ? '收費透明' : 'Transparent Pricing'}</li>
            <li>• {lang === 'zh' ? '一站式服務' : 'One-Stop Service'}</li>
            <li>• {lang === 'zh' ? '經驗豐富' : 'Rich Experience'}</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
