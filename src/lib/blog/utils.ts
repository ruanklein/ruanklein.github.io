import * as LucideIcons from '@lucide/svelte';
import type { Component } from 'svelte';

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

function toPascalCase(value: string): string {
	return value
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
		.replace(/[^a-zA-Z0-9]+/g, ' ')
		.trim()
		.split(/\s+/)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
		.join('');
}

export function resolveLucideIcon(name: string): Component | null {
	const icons = LucideIcons as unknown as Record<string, Component>;
	return icons[name] ?? icons[toPascalCase(name)] ?? null;
}
