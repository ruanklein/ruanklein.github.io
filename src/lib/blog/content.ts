import type { Component } from 'svelte';
import { blogManifest } from '../../content/blog/manifest';
import type { BlogCatalog, BlogPostDefinition, BlogPostMeta } from './types';

function toPublicPost(post: BlogPostDefinition): BlogPostMeta {
	const { component: _component, ...publicPost } = post;
	return publicPost;
}

function getPostDefinitionBySlug(slug: string): BlogPostDefinition | null {
	return blogManifest.posts.find((post) => post.slug === slug) ?? null;
}

export function getBlogManifest(): BlogCatalog {
	return {
		tags: blogManifest.tags,
		posts: blogManifest.posts.map(toPublicPost)
	};
}

export function getPostBySlug(slug: string): BlogPostMeta | null {
	const post = getPostDefinitionBySlug(slug);
	return post ? toPublicPost(post) : null;
}

export function hasPostContent(slug: string): boolean {
	return !!getPostDefinitionBySlug(slug)?.component;
}

export function getPostComponent(slug: string): Component | null {
	return getPostDefinitionBySlug(slug)?.component ?? null;
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
		previousPost: currentIndex > 0 ? toPublicPost(blogManifest.posts[currentIndex - 1]) : null,
		nextPost:
			currentIndex < blogManifest.posts.length - 1
				? toPublicPost(blogManifest.posts[currentIndex + 1])
				: null
	};
}

export function resolveSelectedTags(searchParams: URLSearchParams, validTags: string[]): string[] {
	const rawTags = searchParams.getAll('t').map((value) => value.trim());
	const uniqueTags = [...new Set(rawTags)].filter(Boolean);

	return uniqueTags.filter((tagName) => validTags.includes(tagName));
}
