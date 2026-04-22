<script lang="ts">
	import { getBlogManifest } from '$lib/blog/content';
	import HomeView from '../views/HomeView.svelte';

	const { posts } = getBlogManifest();
</script>

<svelte:head>
	<title>ruan.sh</title>
</svelte:head>

<HomeView {posts} />
