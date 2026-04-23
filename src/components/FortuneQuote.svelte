<script lang="ts">
	let quote = $state('');
	let loading = $state(true);
	let quotesCache: string[] | null = $state(null);

	$effect(() => {
		let cancelled = false;

		async function fetchAndDisplay() {
			if (!quotesCache) {
				try {
					const response = await fetch('/fortune/computers.txt');
					const text = await response.text();
					if (cancelled) return;
					quotesCache = text.split('%').filter((q) => q.trim());
				} catch {
					if (cancelled) return;
					quotesCache = [];
				}
			}

			if (cancelled) return;
			if (quotesCache.length > 0) {
				quote = quotesCache[Math.floor(Math.random() * quotesCache.length)].trim();
			}
			loading = false;
		}

		fetchAndDisplay();

		return () => {
			cancelled = true;
		};
	});
</script>

{#if loading}
	<div class="h-16 animate-pulse rounded-lg bg-white/5"></div>
{:else if quote}
	<blockquote class="border-l-2 border-white/20 pl-4">
		<p class="mb-2 font-mono text-xs tracking-widest text-white/35">fortune</p>
		<p class="text-lg leading-relaxed text-white/60 italic">{quote}</p>
	</blockquote>
{/if}
