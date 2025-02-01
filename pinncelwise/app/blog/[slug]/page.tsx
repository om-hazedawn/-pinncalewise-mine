import { getPostData, getAllPostIds } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface PageParams {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  try {
    const { slug } = await params
    const post = await getPostData(slug)
    return {
      title: post.title,
      description: post.description,
    }
  } catch (error) {
    return {
      title: 'Post Not Found',
      description: 'The post you are looking for does not exist.',
    }
  }
}

export async function generateStaticParams() {
  const posts = getAllPostIds()
  return posts
}

export default async function BlogPostPage({ params }: PageParams) {
  try {
    const { slug } = await params
    const post = await getPostData(slug)
    
    return (
      <article className="prose dark:prose-invert mx-auto py-8">
        <h1 className="mb-2">{post.title}</h1>
        <p className="text-sm text-muted-foreground mt-0">
          <time className="text-sm text-muted-foreground">
            {formatDate(post.date)}
          </time>
        </p>
        <div 
          className="mt-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    )
  } catch (error) {
    notFound()
  }
}
