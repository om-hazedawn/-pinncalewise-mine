import { getPostData, getAllPostIds } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateMetadata({ params }) {
  try {
    const post = await getPostData(params.slug)
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: post.author ? [post.author] : undefined,
        images: post.coverImage ? [post.coverImage] : undefined,
      },
    }
  } catch {
    return {
      title: 'Blog Post Not Found',
    }
  }
}

export async function generateStaticParams() {
  const posts = getAllPostIds()
  return posts
}

export default async function BlogPostPage({ params }) {
  try {
    const post = await getPostData(params.slug)

    return (
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.author && (
                <>
                  <span>•</span>
                  <span>{post.author}</span>
                </>
              )}
            </div>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {post.coverImage && (
            <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    )
  } catch (error) {
    notFound()
  }
}
