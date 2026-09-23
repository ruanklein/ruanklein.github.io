<script lang="ts">
	import { getBlogManifest } from '$lib/blog/content';
	import SeoHead from '../components/SeoHead.svelte';
	import { buildHomeJsonLd, homeDescription, siteUrl } from '$lib/seo';
	import HomeView from '../views/HomeView.svelte';

	const { posts } = getBlogManifest();
</script>

<SeoHead
	title="Ruan Felisbino — software, projects, and notes"
	description={homeDescription}
	canonical={`${siteUrl}/`}
	jsonLd={buildHomeJsonLd()}
/>

<HomeView {posts} />
