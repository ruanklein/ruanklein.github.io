<script lang="ts">
	import { getPostBySlug, getPostComponent } from '$lib/blog/content';
	import BlogPostView from '../../../views/BlogPostView.svelte';

	type BlogPostPageData = {
		slug: string;
		previousSlug: string | null;
		nextSlug: string | null;
	};

	let { data }: { data: BlogPostPageData } = $props();
	const post = $derived(getPostBySlug(data.slug));
	const previousPost = $derived(data.previousSlug ? getPostBySlug(data.previousSlug) : null);
	const nextPost = $derived(data.nextSlug ? getPostBySlug(data.nextSlug) : null);
	const Content = $derived(getPostComponent(data.slug));
</script>

<svelte:head>
	<title>{post?.title ?? 'Blog'} - ruan.sh</title>
</svelte:head>

{#if post && Content}
	<BlogPostView {post} {Content} {previousPost} {nextPost} />
{/if}
