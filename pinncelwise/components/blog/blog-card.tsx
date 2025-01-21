import { BlogPost } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { 
  BookOpen, 
  FileText, 
  FileCode, 
  Building, 
  Calculator, 
  FileSpreadsheet,
  HelpCircle
} from 'lucide-react'

const iconMap = {
  '創業指南': BookOpen,
  '公司註冊': Building,
  '會計': Calculator,
  '商業知識': FileText,
  '稅務': FileSpreadsheet,
  '技術': FileCode,
} as const

type IconType = keyof typeof iconMap

function getIcon(tags: string[]) {
  const matchedTag = tags.find(tag => tag in iconMap) as IconType
  const Icon = matchedTag ? iconMap[matchedTag] : HelpCircle
  return Icon
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const Icon = post.tags ? getIcon(post.tags) : HelpCircle

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group"
    >
      <article className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.author && (
                <>
                  <span>•</span>
                  <span>{post.author}</span>
                </>
              )}
            </div>
            <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
