<script lang="ts">
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
	let copyLabel = $state('Copy');

	const promptPrefix = $derived(root ? '#' : '$');
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
			copyLabel = 'Copied';
		} catch {
			copyLabel = 'Unavailable';
		}

		clearCopyTimer();
		copyTimer = setTimeout(() => {
			copyLabel = 'Copy';
			copyTimer = null;
		}, 1800);
	}

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
	<div class="flex items-center justify-between gap-4">
		<code class="blog-command-code">
			<span class="blog-command-prefix">{promptPrefix}</span>
			<span>{displayedCommand}</span>
			{#if isTyping}
				<span class="blog-command-cursor" aria-hidden="true">|</span>
			{/if}
		</code>

		{#if copy}
			<button
				type="button"
				onclick={copyCommand}
				class="blog-copy-button shrink-0"
				aria-label="Copy command"
			>
				{copyLabel}
			</button>
		{/if}
	</div>
</div>
