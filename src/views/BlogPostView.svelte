<script lang="ts">
	import type { Component } from 'svelte';
	import { ArrowLeft } from '@lucide/svelte';
	import { enhanceMarkdown } from '../lib/blog/enhance-markdown';
	import type { BlogPostMeta } from '../lib/blog/types';
	import { buildBlogHref } from '../lib/blog/utils';
	import BlogPager from '../components/blog/BlogPager.svelte';

	let {
		post,
		Content,
		previousPost,
		nextPost
	}: {
		post: BlogPostMeta;
		Content: Component;
		previousPost: BlogPostMeta | null;
		nextPost: BlogPostMeta | null;
	} = $props();
</script>

<section class="max-w-3xl">
	<a
		href={buildBlogHref()}
		class="mb-6 flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
	>
		<ArrowLeft class="h-4 w-4" />
		Back to blog
	</a>

	<div class="mb-10 border-b border-white/10 pb-6">
		<p class="text-sm tracking-[0.24em] text-white/35 uppercase">{post.date}</p>
		<h1 class="mt-3 text-4xl font-bold tracking-tight">{post.title}</h1>
		<p class="mt-3 max-w-2xl leading-relaxed text-white/60">{post.preview}</p>
	</div>

	<article use:enhanceMarkdown class="blog-markdown text-white/80">
		<Content />
	</article>

	{#if post.tag.length > 0}
		<footer class="mt-6 border-t border-white/10 pt-4">
			<div class="flex flex-wrap items-center gap-2">
				<p class="text-[0.62rem] tracking-[0.2em] text-white/35 uppercase">Tags</p>
				{#each post.tag as tagName (tagName)}
					<a
						href={buildBlogHref([tagName])}
						class="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[0.58rem] tracking-[0.16em] text-white/70 uppercase transition-colors hover:border-white/30 hover:text-white"
					>
						{tagName}
					</a>
				{/each}
			</div>
		</footer>
	{/if}

	<BlogPager {previousPost} {nextPost} />
</section>
