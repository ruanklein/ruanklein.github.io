import type { Component } from 'svelte';

export type BlogPostMeta = {
	slug: string;
	title: string;
	date: string;
	preview: string;
	tag: string[];
	icon: Component;
};

export type BlogPostDefinition = BlogPostMeta & {
	component: Component;
};

export type BlogManifest = {
	tags: string[];
	posts: BlogPostDefinition[];
};

export type BlogCatalog = {
	tags: string[];
	posts: BlogPostMeta[];
};
