import manifestData from '../assets/blog-manifest.json';
import type { Component } from 'svelte';
import type { BlogManifest, BlogPostMeta } from './types';

const postModules = import.meta.glob('/src/lib/content/posts/*.md', {
	eager: true
}) as Record<string, { default: Component }>;

const blogManifest = manifestData as BlogManifest;

export function getBlogManifest(): BlogManifest {
	return blogManifest;
}

export function getPostBySlug(slug: string): BlogPostMeta | null {
	return blogManifest.posts.find((post) => post.slug === slug) ?? null;
}

export function hasPostContent(slug: string): boolean {
	return !!postModules[`/src/lib/content/posts/${slug}.md`]?.default;
}

export function getPostComponent(slug: string): Component | null {
	return postModules[`/src/lib/content/posts/${slug}.md`]?.default ?? null;
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
