export type BlogPostMeta = {
  slug: string
  title: string
  date: string
  preview: string
  tag: string[]
  icon: string
}

export type BlogManifest = {
  tags: string[]
  posts: BlogPostMeta[]
}
