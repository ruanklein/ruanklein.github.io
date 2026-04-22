<script lang="ts">
	import { Check, Copy, TriangleAlert } from '@lucide/svelte';

	let {
		delay = 0,
		command,
		copy = true,
		root = false
	}: {
		delay?: number;
		command: string;
		copy?: boolean;
		root?: boolean;
	} = $props();

	let isVisible = $state(false);
	let hasStarted = $state(false);
	let displayedCommand = $state('');

	let typingTimer: ReturnType<typeof setTimeout> | null = null;
	let copyTimer: ReturnType<typeof setTimeout> | null = null;
	let copyState = $state<'idle' | 'copied' | 'unavailable'>('idle');

	const promptPrefix = $derived(root ? '#' : '$');
	const promptRole = $derived(root ? 'root' : 'user');
	const isTyping = $derived(hasStarted && displayedCommand.length < command.length);

	function clearTypingTimer(): void {
		if (!typingTimer) {
			return;
		}

		clearTimeout(typingTimer);
		typingTimer = null;
	}

	function clearCopyTimer(): void {
		if (!copyTimer) {
			return;
		}

		clearTimeout(copyTimer);
		copyTimer = null;
	}

	async function copyCommand(): Promise<void> {
		try {
			await navigator.clipboard.writeText(command);
			copyState = 'copied';
		} catch {
			copyState = 'unavailable';
		}

		clearCopyTimer();
		copyTimer = setTimeout(() => {
			copyState = 'idle';
			copyTimer = null;
		}, 1800);
	}

	function resolveCopyLabel(state: 'idle' | 'copied' | 'unavailable'): string {
		if (state === 'copied') {
			return 'Command copied';
		}

		if (state === 'unavailable') {
			return 'Clipboard unavailable';
		}

		return 'Copy command';
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

	function observeVisibility(node: HTMLElement): () => void {
		const startTyping = () => {
			if (hasStarted) {
				return;
			}

			hasStarted = true;

			if (delay <= 0 || command.length === 0) {
				displayedCommand = command;
				return;
			}

			let currentIndex = 0;

			const typeNextCharacter = () => {
				currentIndex += 1;
				displayedCommand = command.slice(0, currentIndex);

				if (currentIndex >= command.length) {
					typingTimer = null;
					return;
				}

				typingTimer = setTimeout(typeNextCharacter, delay);
			};

			typeNextCharacter();
		};

		if (typeof IntersectionObserver === 'undefined') {
			isVisible = true;
			startTyping();
			return () => {
				clearTypingTimer();
				clearCopyTimer();
			};
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					isVisible = true;
					startTyping();
					observer.disconnect();
				}
			},
			{ threshold: 0.15 }
		);

		observer.observe(node);

		return () => {
			clearTypingTimer();
			clearCopyTimer();
			observer.disconnect();
		};
	}
</script>

<div class="blog-command" {@attach observeVisibility}>
	<div class="blog-command-shell" data-role={promptRole}>
		<div class="blog-command-header">
			<span class="blog-command-dot"></span>
			<span class="blog-command-dot"></span>
			<span class="blog-command-dot"></span>

			{#if copy}
				<button
					type="button"
					onclick={copyCommand}
					class="blog-command-copy-button"
					aria-label={copyLabel}
					title={copyLabel}
				>
					<CopyIcon class="h-3.5 w-3.5" />
				</button>
			{/if}
		</div>

		<div class="blog-command-body">
			<span class="blog-command-token" aria-hidden="true">{promptPrefix}</span>
			<code class="blog-command-code">
				<span>{displayedCommand}</span>
				{#if isTyping}
					<span class="blog-command-cursor" aria-hidden="true">|</span>
				{/if}
			</code>
		</div>
	</div>
</div>
