'use client'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect, useState } from 'react'

interface MDXContentProps {
  source: string
}

export function MDXContent({ source }: MDXContentProps) {
  const [mdxSource, setMdxSource] = useState<any>(null)

  useEffect(() => {
    async function prepareMDX() {
      const mdx = await serialize(source)
      setMdxSource(mdx)
    }
    prepareMDX()
  }, [source])

  if (!mdxSource) {
    return <div>Loading...</div>
  }

  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote {...mdxSource} />
    </div>
  )
}
