const LANGUAGE_SEPARATOR_REGEX = /[-_]/g;

export function formatLanguageLabel(lang: string): string {
	if (!lang) return 'plain text';
	return lang.replace(LANGUAGE_SEPARATOR_REGEX, ' ');
}

export function sortPostsByDateDesc<T extends { date: string }>(posts: T[]): T[] {
	return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function buildBlogHref(nextTags: string[] = []): string {
	const params = new URLSearchParams();
	for (const tag of nextTags) params.append('t', tag);
	const search = params.toString();
	return search ? `/blog?${search}` : '/blog';
}

export function buildPostHref(slug: string): string {
	return `/blog/${encodeURIComponent(slug)}`;
}
