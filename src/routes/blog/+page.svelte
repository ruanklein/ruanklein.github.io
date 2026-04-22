<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { getBlogManifest, resolveSelectedTags } from '$lib/blog/content';
	import BlogListView from '../../views/BlogListView.svelte';

	const { posts, tags } = getBlogManifest();

	const selectedTags = $derived(browser ? resolveSelectedTags(page.url.searchParams, tags) : []);
</script>

<svelte:head>
	<title>Blog - ruan.sh</title>
</svelte:head>

<BlogListView {posts} {tags} {selectedTags} />
