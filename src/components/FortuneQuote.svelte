<script lang="ts">
	import { onMount } from 'svelte';

	let quote = $state('');
	let loading = $state(true);
	let quotesCache: string[] | null = $state(null);
	let textElement: HTMLParagraphElement | undefined = $state();

	const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789abcdefghijklmnopqrstuvwxyz';

	async function fetchQuote() {
		if (!quotesCache) {
			try {
				const response = await fetch('/fortune/computers.txt');
				const text = await response.text();
				quotesCache = text.split('%').filter((q) => q.trim());
			} catch {
				quotesCache = [];
			}
		}

		if (quotesCache.length > 0) {
			quote = quotesCache[Math.floor(Math.random() * quotesCache.length)].trim();
			loading = false;
		}
	}

	onMount(() => {
		let animationFrame: number;
		let cancelled = false;

		$effect(() => {
			if (!quote || !textElement) return;

			const finalText = quote;
			const duration = 1500;
			const startTime = performance.now();

			function scramble(currentTime: number) {
				if (cancelled || !textElement) return;

				const elapsed = currentTime - startTime;
				const progress = Math.min(elapsed / duration, 1);

				let result = '';
				for (let i = 0; i < finalText.length; i++) {
					const charProgress = Math.min((progress * finalText.length + i) / finalText.length, 1);
					if (charProgress >= 1 || finalText[i] === ' ' || finalText[i] === '\n') {
						result += finalText[i];
					} else {
						const randomIndex = Math.floor(Math.random() * CHARS.length);
						result += CHARS[randomIndex];
					}
				}

				textElement.textContent = result;

				if (progress < 1) {
					animationFrame = requestAnimationFrame(scramble);
				}
			}

			animationFrame = requestAnimationFrame(scramble);

			return () => {
				cancelled = true;
				if (animationFrame) {
					cancelAnimationFrame(animationFrame);
				}
			};
		});
	});

	fetchQuote();
</script>

{#if loading}
	<div class="h-16 animate-pulse rounded-lg bg-white/5"></div>
{:else}
	<blockquote class="border-l-2 border-white/20 pl-4">
		<!-- <p class="mb-2 font-mono text-xs tracking-widest text-white/35">fortune</p> -->
		<p bind:this={textElement} class="font-mono text-lg leading-relaxed text-white/60"></p>
	</blockquote>
{/if}
