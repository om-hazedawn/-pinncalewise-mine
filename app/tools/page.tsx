import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, FileText, Search, Settings } from "lucide-react"
import { PageHeader } from "../components/page-header"
import { AnimatedBackground } from "../components/animated-background"
import Link from "next/link"

const tools = [
  {
    title: "利得稅計算器",
    description: "快速計算您的應納稅額",
    icon: Calculator,
    href: "/tools/tax-calculator"
  },
  {
    title: "文件範本下載",
    description: "常用商業文件範本",
    icon: FileText,
    href: "/tools/document-templates"
  },
  {
    title: "公司名稱查冊",
    description: "查詢公司註冊狀態",
    icon: Search,
    href: "/tools/company-search"
  },
  {
    title: "商業登記證查詢",
    description: "驗證商業登記證",
    icon: Settings,
    href: "/tools/business-registration"
  },
]

export default function ToolsPage() {
  return (
    <AnimatedBackground variant="subtle">
      <div className="container mx-auto px-4 py-12">
        <PageHeader title="實用工具" description="幫助您更輕鬆地管理業務的實用工具" accent />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <Card key={tool.title}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{tool.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <Link href={tool.href}>
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:from-indigo-600 hover:to-rose-600">
                    使用工具
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">我們持續開發更多實用工具，幫助您更輕鬆地管理業務。</p>
          <Button variant="outline">查看更多工具</Button>
        </div>
      </div>
    </AnimatedBackground>
  )
}
