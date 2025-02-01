import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

interface PageProps {
  params: Promise<{ lang?: string }>
}

export const metadata = {
  title: '最新文章',
  description: '了解更多關於香港公司註冊、會計、審計和秘書服務的專業知識',
}

export default async function BlogPage({ params }: PageProps) {
  const { lang } = await params
  const posts = await getAllPosts()
  const language = lang === 'zh' ? 'zh' : 'en'

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:text-primary transition-colors">
                {post.title}
              </h2>
            </Link>
            <time className="text-sm text-muted-foreground">
              {formatDate(post.date)}
            </time>
            {post.description && (
              <p className="mt-4 text-muted-foreground">{post.description}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
