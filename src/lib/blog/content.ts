import manifestData from '../../content/blog/manifest.json';
import type { Component } from 'svelte';
import type { BlogManifest, BlogPostMeta } from './types';

const postModules = import.meta.glob('/src/content/blog/posts/*.md', {
	eager: true
}) as Record<string, { default: Component }>;

const postComponentsBySlug = Object.fromEntries(
	Object.entries(postModules)
		.map(([filePath, module]) => {
			const fileName = filePath.split('/').pop();

			if (!fileName?.endsWith('.md')) {
				return null;
			}

			const slug = fileName.slice(0, -3);
			return [slug, module.default] as const;
		})
		.filter((entry): entry is readonly [string, Component] => entry !== null)
);

const blogManifest = manifestData as BlogManifest;

export function getBlogManifest(): BlogManifest {
	return blogManifest;
}

export function getPostBySlug(slug: string): BlogPostMeta | null {
	return blogManifest.posts.find((post) => post.slug === slug) ?? null;
}

export function hasPostContent(slug: string): boolean {
	return !!postComponentsBySlug[slug];
}

export function getPostComponent(slug: string): Component | null {
	return postComponentsBySlug[slug] ?? null;
}

export function getAdjacentPosts(slug: string): {
	previousPost: BlogPostMeta | null;
	nextPost: BlogPostMeta | null;
} {
	const currentIndex = blogManifest.posts.findIndex((post) => post.slug === slug);

	if (currentIndex < 0) {
		return {
			previousPost: null,
			nextPost: null
		};
	}

	return {
		previousPost: currentIndex > 0 ? blogManifest.posts[currentIndex - 1] : null,
		nextPost:
			currentIndex < blogManifest.posts.length - 1 ? blogManifest.posts[currentIndex + 1] : null
	};
}

export function resolveSelectedTags(searchParams: URLSearchParams, validTags: string[]): string[] {
	const rawTags = searchParams.getAll('t').map((value) => value.trim());
	const uniqueTags = [...new Set(rawTags)].filter(Boolean);

	return uniqueTags.filter((tagName) => validTags.includes(tagName));
}
