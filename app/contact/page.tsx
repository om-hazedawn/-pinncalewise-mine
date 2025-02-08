import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
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
                <p>info@pinnaclewise.com</p>
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
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  姓名
                </label>
                <Input id="name" placeholder="請輸入您的姓名" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  電郵
                </label>
                <Input id="email" type="email" placeholder="請輸入您的電郵" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  電話
                </label>
                <Input id="phone" placeholder="請輸入您的電話" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  訊息
                </label>
                <Textarea id="message" placeholder="請輸入您的訊息" rows={4} />
              </div>

              <Button className="w-full">發送訊息</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

