<script lang="ts">
	import { buildBlogHref } from '../../lib/blog/utils';

	let {
		query = $bindable(),
		tags,
		selectedTags,
		visibleCount
	}: {
		query: string;
		tags: string[];
		selectedTags: string[];
		visibleCount: number;
	} = $props();

	function toggleTagHref(tagName: string): string {
		const has = selectedTags.includes(tagName);
		const next = has ? selectedTags.filter((tag) => tag !== tagName) : [...selectedTags, tagName];
		return buildBlogHref(next);
	}
</script>

<div class="mb-8 flex items-end justify-between gap-4">
	<div>
		<p class="text-sm tracking-[0.3em] text-white/35 uppercase">Blog</p>
		<h2 class="mt-2 text-3xl font-bold tracking-tight">All posts</h2>
	</div>
	<p class="text-sm text-white/45">{visibleCount} posts</p>
</div>

<div class="mb-7 rounded-2xl border border-white/10 bg-linear-to-b from-white/5 to-white/2 p-px">
	<div class="rounded-[15px] bg-black/65 px-4 py-4 backdrop-blur-sm">
		<div class="mb-3 flex items-center justify-between gap-3">
			<p
				class="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.22em] text-white/45 uppercase"
			>
				Search & Filters
			</p>
			{#if query || selectedTags.length > 0}
				<a
					href={buildBlogHref([])}
					onclick={() => {
						query = '';
					}}
					class="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1.5 text-[0.62rem] tracking-[0.2em] text-white/55 uppercase transition-colors hover:border-white/20 hover:text-white"
				>
					Reset
				</a>
			{/if}
		</div>

		<label class="relative block">
			<input
				type="search"
				placeholder="Search by title, slug, summary or tag"
				bind:value={query}
				class="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-sm text-white transition-colors outline-none placeholder:text-white/30 focus:border-white/25 focus:bg-white/6"
			/>
		</label>

		{#if tags.length > 0}
			<div class="mt-3 flex flex-wrap gap-2">
				<a
					href={buildBlogHref([])}
					class="rounded-full border px-3 py-1.5 text-[0.62rem] tracking-[0.2em] uppercase transition-colors {selectedTags.length ===
					0
						? 'border-white/30 bg-white/12 text-white'
						: 'border-white/10 bg-white/3 text-white/55 hover:border-white/20 hover:text-white'}"
				>
					All tags
				</a>
				{#each tags as tagName (tagName)}
					<a
						href={toggleTagHref(tagName)}
						class="rounded-full border px-3 py-1.5 text-[0.62rem] tracking-[0.2em] uppercase transition-colors {selectedTags.includes(
							tagName
						)
							? 'border-white/30 bg-white/12 text-white'
							: 'border-white/10 bg-white/3 text-white/55 hover:border-white/20 hover:text-white'}"
					>
						{tagName}
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
