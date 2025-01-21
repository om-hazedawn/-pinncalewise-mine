import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface BlogPost {
  id: string
  title: string
  date: string
  content: string
  excerpt: string
  slug: string
  author?: string
  coverImage?: string
  tags?: string[]
}

// This would be your blog posts data
const blogPosts: Record<string, { content: string; data: any }> = {
  'hong-kong-business-guide': {
    content: `在香港創業，選擇合適的公司類型是成功的第一步。本文將為您詳細解析香港不同類型公司的特點，幫助您做出最佳選擇。

## 公司類型比較

### 有限公司

有限公司是香港最常見的公司類型，具有以下特點：

- 獨立法人地位
- 股東責任限於其投資額
- 適用16.5%利得稅率
- 較高的商業信譽
- 易於籌集資金

### 無限公司

無限公司較為少見，主要特點包括：

- 東主承擔無限責任
- 較低的設立要求
- 適用15%利得稅率
- 管理較為靈活

## 如何選擇？

選擇公司類型時，需要考慮以下因素：

1. 資金需求
2. 風險承受能力
3. 業務規模
4. 未來發展計劃
5. 稅務考慮

## 註冊流程

無論選擇哪種公司類型，註冊流程大致相同：

1. 選擇公司名稱
2. 準備所需文件
3. 提交申請
4. 獲取證書

## 專業建議

建議在註冊前諮詢專業人士，確保選擇最適合的公司類型。我們的專業團隊隨時為您提供協助。`,
    data: {
      title: '香港創業指南：如何選擇最適合的公司類型',
      date: '2025-01-17',
      author: 'Pinnacle Wise',
      coverImage: '/images/blog/hong-kong-business.jpg',
      tags: ['創業指南', '公司註冊', '商業知識']
    }
  }
}

export function getSortedPostsData(): BlogPost[] {
  const allPostsData = Object.entries(blogPosts).map(([id, post]) => {
    const excerpt = post.content.slice(0, 200).trim() + '...'

    return {
      id,
      excerpt,
      slug: id,
      content: post.content,
      ...post.data
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  return Object.keys(blogPosts).map((slug) => {
    return {
      params: {
        slug
      }
    }
  })
}

export async function getPostData(slug: string): Promise<BlogPost> {
  const post = blogPosts[slug]
  if (!post) {
    throw new Error('Post not found')
  }

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(post.content)
  const content = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id: slug,
    slug,
    content,
    excerpt: post.content.slice(0, 200).trim() + '...',
    ...post.data
  }
}
