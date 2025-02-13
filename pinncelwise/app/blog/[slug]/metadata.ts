import { Metadata } from 'next'
import { getPostData } from '@/lib/blog'

type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug)
    
    if (!post) {
      return {
        title: '找不到文章 | Pinnacle Wise',
        description: '找不到相關文章',
      }
    }

    return {
      title: `${post.title} | Pinnacle Wise`,
      description: post.excerpt || '了解更多關於香港公司註冊、會計、審計、IT及營銷服務的專業知識',
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: post.author ? [post.author] : undefined,
        tags: post.tags,
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: '錯誤 | Pinnacle Wise',
      description: '載入文章時發生錯誤',
    }
  }
}
