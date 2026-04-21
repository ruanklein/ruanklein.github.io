<script lang="ts">
	import { ExternalLink } from '@lucide/svelte';
	import type { BlogPostMeta } from '../lib/blog/types';
	import { buildBlogHref } from '../lib/blog/utils';
	import PostCard from '../components/blog/PostCard.svelte';

	let { posts }: { posts: BlogPostMeta[] } = $props();

	const intro =
		'10+ years building software. Focused on local-first, privacy-focused solutions with strong CLI tooling and automation, applying KISS principles.';

	const latestPosts = $derived([...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5));
</script>

<header class="mb-20">
	<div class="mb-4 flex items-center gap-6">
		<h1 class="text-5xl font-bold tracking-tight md:text-7xl">Ruan Felisbino</h1>
	</div>
	<p class="mb-8 text-xl text-white/70 md:text-2xl">Software Engineer</p>
	<p class="mb-6 max-w-2xl text-lg leading-relaxed text-white/60">{intro}</p>

	<div class="flex items-center gap-4">
		<a
			href="https://github.com/ruanklein"
			target="_blank"
			rel="noopener noreferrer"
			class="text-white/60 transition-colors hover:text-white"
			aria-label="GitHub"
		>
			<ExternalLink class="mr-1 inline-block h-3 w-3 text-white/30" />
			GitHub
		</a>
		<a
			href="https://www.linkedin.com/in/ruanklein/"
			target="_blank"
			rel="noopener noreferrer"
			class="text-white/60 transition-colors hover:text-white"
			aria-label="LinkedIn"
		>
			<ExternalLink class="ml-1 inline-block h-3 w-3 text-white/30" />
			LinkedIn
		</a>
		<a
			href="mailto:ruan.klein@gmail.com"
			class="text-white/60 transition-colors hover:text-white"
			aria-label="Email"
		>
			<ExternalLink class="ml-1 inline-block h-3 w-3 text-white/30" />
			Email
		</a>
	</div>
</header>

<section class="max-w-3xl">
	<div class="mb-8 flex items-end justify-between gap-4">
		<div>
			<p class="text-sm tracking-[0.3em] text-white/35 uppercase">Blog</p>
			<h2 class="mt-2 text-3xl font-bold tracking-tight">Latest posts</h2>
		</div>
		<p class="text-sm text-white/45">{latestPosts.length} posts</p>
	</div>

	<div class="space-y-4">
		{#each latestPosts as post (post.slug)}
			<PostCard {post} />
		{/each}
	</div>

	<div class="mt-8">
		<a
			href={buildBlogHref()}
			class="text-sm text-white/65 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
		>
			Browse all posts
		</a>
	</div>
</section>
