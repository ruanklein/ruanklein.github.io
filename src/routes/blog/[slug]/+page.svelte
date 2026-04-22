<script lang="ts">
	import type { BlogPostMeta } from '$lib/blog/types';
	import { getPostComponent } from '$lib/blog/content';
	import BlogPostView from '../../../views/BlogPostView.svelte';

	type BlogPostPageData = {
		post: BlogPostMeta;
		previousPost: BlogPostMeta | null;
		nextPost: BlogPostMeta | null;
	};

	let { data }: { data: BlogPostPageData } = $props();
	const Content = $derived(getPostComponent(data.post.slug));
</script>

<svelte:head>
	<title>{data.post.title} - ruan.sh</title>
</svelte:head>

{#if Content}
	<BlogPostView
		post={data.post}
		{Content}
		previousPost={data.previousPost}
		nextPost={data.nextPost}
	/>
{/if}
