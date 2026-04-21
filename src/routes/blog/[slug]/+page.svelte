<script lang="ts">
	import type { Component } from 'svelte';
	import type { BlogPostMeta } from '$lib/blog/types';
	import { getPostComponent } from '$lib/blog/content';
	import BlogPostView from '../../../views/BlogPostView.svelte';

	type BlogPostPageData = {
		post: BlogPostMeta;
		previousPost: BlogPostMeta | null;
		nextPost: BlogPostMeta | null;
	};

	let { data }: { data: BlogPostPageData } = $props();

	function resolvePageTitle(post: BlogPostMeta): string {
		return `${post.title} - ruan.sh`;
	}

	const Content = $derived(getPostComponent(data.post.slug) as Component);
</script>

<svelte:head>
	<title>{resolvePageTitle(data.post)}</title>
</svelte:head>

<BlogPostView
	post={data.post}
	{Content}
	previousPost={data.previousPost}
	nextPost={data.nextPost}
/>
