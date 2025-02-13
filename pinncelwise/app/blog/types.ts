export type BlogPageProps = {
  params: { slug: string }
}

export type BlogPost = {
  slug: string
  title: string
  date: string
  author?: string
  excerpt?: string
  content: string
  tags?: string[]
}
