<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { resolveSelectedTags } from '$lib/blog/content';
	import type { BlogPostMeta } from '$lib/blog/types';
	import BlogListView from '../../views/BlogListView.svelte';

	type BlogIndexPageData = {
		posts: BlogPostMeta[];
		tags: string[];
	};

	let { data }: { data: BlogIndexPageData } = $props();

	const selectedTags = $derived(
		browser ? resolveSelectedTags(page.url.searchParams, data.tags) : []
	);
</script>

<svelte:head>
	<title>Blog - ruan.sh</title>
</svelte:head>

<BlogListView posts={data.posts} tags={data.tags} {selectedTags} />
