import { getSortedPostsData } from '@/lib/blog'
import { BlogCard } from '@/components/blog/blog-card'

export const metadata = {
  title: '最新文章',
  description: '了解更多關於香港公司註冊、會計、審計和秘書服務的專業知識',
}

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">最新文章</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
