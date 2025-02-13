import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "虛擬辦公室",
    price: "$900/年",
    description: "提供專業的虛擬辦公室服務",
  },
  {
    title: "周年申報表",
    price: "$605",
    description: "($500 + $105 政府費)",
  },
  {
    title: "通知開業",
    price: "$300",
    description: "協助處理開業相關文件",
  },
  {
    title: "更改公司名稱",
    price: "$795",
    description: "($500 + 295政府費)",
  },
  {
    title: "更改公司註冊地址",
    price: "$500",
    description: "處理地址變更手續",
  },
  {
    title: "更改公司分行地址",
    price: "$500",
    description: "處理分行地址變更",
  },
  {
    title: "更改董事/公司秘書詳情資料",
    price: "$300",
    description: "資料更新服務",
  },
  {
    title: "董事委任/辭任通知",
    price: "$500",
    description: "處理董事變更手續",
  },
]

export default function OtherServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">其他服務</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>
                <span className="text-2xl font-bold text-primary">{service.price}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button className="w-full">申請服務</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">需要其他服務或有任何疑問？請隨時與我們聯繫。</p>
        <Button size="lg" variant="outline">
          聯絡我們
        </Button>
      </div>
    </div>
  )
}

