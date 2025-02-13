import { marked } from 'marked'

interface MarkdownProps {
  content: string
}

export function Markdown({ content }: MarkdownProps) {
  const html = marked(content)
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: html }} 
      className="prose prose-lg dark:prose-invert max-w-none"
    />
  )
}
