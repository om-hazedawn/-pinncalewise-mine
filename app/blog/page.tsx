import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    title: "香港公司註冊流程指南",
    date: "2024-02-01",
    excerpt: "詳細解說在香港註冊公司的完整流程、所需文件及注意事項。",
    category: "公司註冊",
  },
  {
    title: "2024年度稅務更新重點",
    date: "2024-01-15",
    excerpt: "最新的稅務政策變化及其對企業的影響。",
    category: "稅務資訊",
  },
  {
    title: "選擇公司秘書服務的考慮因素",
    date: "2024-01-10",
    excerpt: "如何為您的企業選擇最適合的公司秘書服務。",
    category: "公司秘書",
  },
  {
    title: "中小企業會計管理技巧",
    date: "2024-01-05",
    excerpt: "有效的會計管理方法及常見錯誤避免。",
    category: "會計知識",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">慧思博客</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.title}>
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Button variant="outline">閱讀更多</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg">查看更多文章</Button>
      </div>
    </div>
  )
}

