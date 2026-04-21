<script lang="ts">
	import type { BlogPostMeta } from '$lib/blog/types';
	import HomeView from '../views/HomeView.svelte';

	type HomePageData = {
		posts: BlogPostMeta[];
	};

	let { data }: { data: HomePageData } = $props();
</script>

<svelte:head>
	<title>ruan.sh</title>
</svelte:head>

<HomeView posts={data.posts} />
