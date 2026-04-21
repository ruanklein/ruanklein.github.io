<script lang="ts">
	import * as LucideIcons from '@lucide/svelte';
	import type { BlogPostMeta } from '../../lib/blog/types';
	import { buildPostHref, buildBlogHref } from '../../lib/blog/utils';

	let {
		post,
		showTags = false,
		showIcon = false
	}: {
		post: BlogPostMeta;
		showTags?: boolean;
		showIcon?: boolean;
	} = $props();

	function toPascalCase(value: string): string {
		return value
			.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
			.replace(/[^a-zA-Z0-9]+/g, ' ')
			.trim()
			.split(/\s+/)
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
			.join('');
	}

	function resolveIcon(name: string) {
		const icons = LucideIcons as Record<string, typeof LucideIcons.Activity>;
		return icons[name] ?? icons[toPascalCase(name)] ?? null;
	}

	const IconComponent = $derived(resolveIcon(post.icon));
</script>

<article
	class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-[1px] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[0_20px_45px_-28px_rgba(255,255,255,0.28)]"
>
	<div
		class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
	></div>
	<a
		href={buildPostHref(post.slug)}
		class="block rounded-[15px] bg-black/65 px-5 py-4 backdrop-blur-sm"
	>
		<div class="flex items-center justify-between gap-3">
			<p class="text-xs tracking-[0.24em] text-white/35 uppercase tabular-nums">
				{post.date}
			</p>
			{#if showIcon}
				<div
					class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.6rem] tracking-[0.16em] text-white/55 uppercase transition-colors group-hover:border-white/20 group-hover:text-white/80"
				>
					{#if IconComponent}
						<IconComponent class="h-3.5 w-3.5" />
					{:else}
						{post.icon}
					{/if}
				</div>
			{/if}
		</div>
		<h3 class="mt-2 text-xl font-semibold text-white">{post.title}</h3>
		<p class="mt-2 leading-relaxed text-white/60">{post.preview}</p>
	</a>

	{#if showTags && post.tag.length > 0}
		<div class="mt-2 flex flex-wrap gap-2 px-5 pb-4">
			{#each post.tag as tagName (tagName)}
				<a
					href={buildBlogHref([tagName])}
					class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[0.62rem] tracking-[0.18em] text-white/55 uppercase transition-colors hover:border-white/25 hover:text-white"
				>
					{tagName}
				</a>
			{/each}
		</div>
	{/if}
</article>
