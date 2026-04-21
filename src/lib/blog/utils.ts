export function isExternalLink(href?: string): boolean {
  return !!href && /^(https?:)?\/\//.test(href)
}

export function formatLanguageLabel(lang: string): string {
  if (!lang) return 'plain text'
  return lang.replace(/[-_]/g, ' ')
}

export function getHeadingTag(depth: number): string {
  return `h${Math.min(Math.max(depth, 1), 6)}`
}

export function buildBlogHref(nextTags: string[] = []): string {
  const params = new URLSearchParams()
  for (const tag of nextTags) params.append('t', tag)
  const search = params.toString()
  return search ? `/blog?${search}` : '/blog'
}

export function buildPostHref(slug: string): string {
  return `/blog/${encodeURIComponent(slug)}`
}
