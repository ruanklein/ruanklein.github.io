<script lang="ts">
	import type { BlogPostMeta } from '../../lib/blog/types';
	import { buildPostHref } from '../../lib/blog/utils';

	let {
		previousPost,
		nextPost
	}: {
		previousPost: BlogPostMeta | null;
		nextPost: BlogPostMeta | null;
	} = $props();
</script>

<section class="mt-10 border-t border-white/10 pt-6">
	<p class="text-xs tracking-[0.24em] text-white/35 uppercase">Continue reading</p>

	{#snippet pagerCard(post: BlogPostMeta | null, type: 'previous' | 'next')}
		{#if post}
			<a
				href={buildPostHref(post.slug)}
				class="group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-white/5 to-white/2 p-px text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[0_20px_45px_-28px_rgba(255,255,255,0.28)]"
			>
				<div
					class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></div>

				{#if type === 'previous'}
					<div
						class="flex min-h-24 w-full items-start gap-3 rounded-[15px] bg-black/65 px-4 py-4 backdrop-blur-sm"
					>
						<span
							class="mt-1 text-white/55 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:text-white/80"
							>←</span
						>
						<div>
							<p class="text-xs tracking-[0.2em] text-white/40 uppercase">Previous</p>
							<p class="mt-2 font-medium text-white/90 transition-colors group-hover:text-white">
								{post.title}
							</p>
						</div>
					</div>
				{:else}
					<div
						class="flex min-h-24 w-full items-start justify-between gap-3 rounded-[15px] bg-black/65 px-4 py-4 backdrop-blur-sm"
					>
						<div>
							<p class="text-xs tracking-[0.2em] text-white/40 uppercase">Next</p>
							<p class="mt-2 font-medium text-white/90 transition-colors group-hover:text-white">
								{post.title}
							</p>
						</div>
						<span
							class="mt-1 text-white/55 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white/80"
							>→</span
						>
					</div>
				{/if}
			</a>
		{:else if type === 'previous'}
			<div
				class="flex min-h-24 items-start gap-3 rounded-2xl border border-white/10 bg-white/2 px-4 py-4 text-left opacity-55"
			>
				<span class="mt-1 text-white/35">←</span>
				<div>
					<p class="text-xs tracking-[0.2em] text-white/35 uppercase">Previous</p>
					<p class="mt-2 text-white/55">No previous post</p>
				</div>
			</div>
		{:else}
			<div
				class="flex min-h-24 items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/2 px-4 py-4 text-left opacity-55"
			>
				<div>
					<p class="text-xs tracking-[0.2em] text-white/35 uppercase">Next</p>
					<p class="mt-2 text-white/55">No next post</p>
				</div>
				<span class="mt-1 text-white/35">→</span>
			</div>
		{/if}
	{/snippet}

	<div class="mt-4 grid gap-3 md:grid-cols-2">
		{@render pagerCard(previousPost, 'previous')}
		{@render pagerCard(nextPost, 'next')}
	</div>
</section>
