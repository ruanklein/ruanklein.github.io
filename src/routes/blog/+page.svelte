<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import { getBlogManifest, resolveSelectedTags } from '$lib/blog/content';
	import SeoHead from '../../components/SeoHead.svelte';
	import { blogDescription, siteUrl } from '$lib/seo';
	import BlogListView from '../../views/BlogListView.svelte';

	const { posts, tags } = getBlogManifest();

	const selectedTags = $derived(browser ? resolveSelectedTags(page.url.searchParams, tags) : []);
</script>

<SeoHead title="Blog — ruan.sh" description={blogDescription} canonical={`${siteUrl}/blog`} />

<BlogListView {posts} {tags} {selectedTags} />
