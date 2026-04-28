<script lang="ts">
	import { Copy, Check, TriangleAlert } from '@lucide/svelte';

	let {
		content = '',
		copy = true
	}: {
		content: string;
		copy?: boolean;
	} = $props();

	let copyState = $state<'idle' | 'copied' | 'unavailable'>('idle');
	let copyTimer: ReturnType<typeof setTimeout> | null = null;

	async function copyContent(): Promise<void> {
		try {
			await navigator.clipboard.writeText(content);
			copyState = 'copied';
		} catch {
			copyState = 'unavailable';
		}

		if (copyTimer) {
			clearTimeout(copyTimer);
		}

		copyTimer = setTimeout(() => {
			copyState = 'idle';
			copyTimer = null;
		}, 1800);
	}

	function resolveCopyLabel(state: 'idle' | 'copied' | 'unavailable'): string {
		if (state === 'copied') {
			return 'Content copied';
		}

		if (state === 'unavailable') {
			return 'Clipboard unavailable';
		}

		return 'Copy content';
	}

	function resolveCopyIcon(state: 'idle' | 'copied' | 'unavailable') {
		if (state === 'copied') {
			return Check;
		}

		if (state === 'unavailable') {
			return TriangleAlert;
		}

		return Copy;
	}

	const CopyIcon = $derived(resolveCopyIcon(copyState));
	const copyLabel = $derived(resolveCopyLabel(copyState));
</script>

<div class="blog-command">
	<div class="blog-command-shell">
		<div class="blog-command-header">
			<span class="blog-command-dot"></span>
			<span class="blog-command-dot"></span>
			<span class="blog-command-dot"></span>

			{#if copy}
				<button
					type="button"
					onclick={copyContent}
					class="blog-command-copy-button"
					aria-label={copyLabel}
					title={copyLabel}
				>
					<CopyIcon class="h-3.5 w-3.5" />
				</button>
			{/if}
		</div>

		<div class="blog-command-body">
			<pre class="blog-command-code multi-line-content">{content}</pre>
		</div>
	</div>
</div>

<style>
	.multi-line-content {
		white-space: pre-wrap;
		word-break: break-all;
		font-family: monospace;
		margin: 0;
	}
</style>
