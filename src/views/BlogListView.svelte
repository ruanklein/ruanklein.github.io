<script lang="ts">
	import { sortPostsByDateDesc } from '../lib/blog/utils';
	import type { BlogPostMeta } from '../lib/blog/types';
	import PostCard from '../components/blog/PostCard.svelte';
	import BlogFilters from '../components/blog/BlogFilters.svelte';

	let {
		posts,
		tags,
		selectedTags
	}: {
		posts: BlogPostMeta[];
		tags: string[];
		selectedTags: string[];
	} = $props();

	let query = $state('');

	const sortedPosts = $derived(sortPostsByDateDesc(posts));

	const visiblePosts = $derived(
		sortedPosts.filter((post) => {
			const matchesAllSelectedTags =
				selectedTags.length === 0 || selectedTags.every((tagName) => post.tag.includes(tagName));

			if (!matchesAllSelectedTags) {
				return false;
			}

			const q = query.trim().toLowerCase();
			if (!q) return true;

			return [post.title, post.preview, post.slug, ...post.tag].join(' ').toLowerCase().includes(q);
		})
	);
</script>

<section class="max-w-3xl">
	<BlogFilters bind:query {tags} {selectedTags} visibleCount={visiblePosts.length} />

	{#if visiblePosts.length === 0}
		<p class="text-white/50">No posts available yet.</p>
	{:else}
		<div class="space-y-4">
			{#each visiblePosts as post (post.slug)}
				<PostCard {post} showTags showIcon />
			{/each}
		</div>
	{/if}
</section>
