<script lang="ts">
	import { Heart } from '@lucide/svelte';
</script>

<footer class="mt-auto border-t border-white/10">
	<div class="container mx-auto max-w-4xl px-6 py-6 md:py-8">
		<div class="flex items-center justify-between gap-4">
			<span class="text-[13px] text-white/50">
				© {new Date().getFullYear()} ruan.sh
			</span>

			<a
				href="https://buymeacoffee.com/ruankleinb"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2 text-[13px] font-medium text-white/80 transition-opacity hover:opacity-70"
			>
				<Heart class="h-4 w-4" />
				Buy me a coffee
			</a>
		</div>
	</div>
</footer>
