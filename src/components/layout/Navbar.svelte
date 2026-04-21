<script lang="ts">
	import { BookOpen } from '@lucide/svelte';
	import { buildBlogHref } from '../../lib/blog/utils';
</script>

<nav class="sticky top-0 z-40 border-b border-white/10 bg-black/95 backdrop-blur-sm">
	<div class="container mx-auto max-w-4xl px-6 py-4">
		<div class="flex items-center justify-between">
			<a href="/" class="flex items-center gap-3" aria-label="Go to home">
				<img
					src="/logo.png"
					alt="Ruan Felisbino"
					class="h-10 w-10 rounded-full shadow-lg shadow-white/20"
				/>
				<span class="text-lg font-semibold">ruan.sh</span>
			</a>
			<a
				href={buildBlogHref()}
				class="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
			>
				<BookOpen class="h-4 w-4" />
				Blog
			</a>
		</div>
	</div>
</nav>
