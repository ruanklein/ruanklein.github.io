<script lang="ts">
	import { ArrowUpRight, FolderGit2 } from '@lucide/svelte';
	import type { Project } from '../lib/projects';

	let { projects }: { projects: Project[] } = $props();
</script>

<header class="mb-12">
	<div class="mb-4 flex items-center gap-4">
		<FolderGit2 class="h-7 w-7 text-white/40" />
		<p class="text-sm tracking-[0.3em] text-white/35 uppercase">Open source</p>
	</div>
	<h1 class="text-4xl font-bold tracking-tight md:text-5xl">Projects</h1>
	<p class="mt-4 max-w-2xl text-lg leading-8 text-white/60">
		A selection of projects I build and maintain.
	</p>
</header>

<section aria-labelledby="projects-heading">
	<div class="mb-6 flex items-end justify-between gap-4">
		<h2 id="projects-heading" class="text-sm tracking-[0.3em] text-white/35 uppercase">
			Selected work
		</h2>
		<p class="text-sm text-white/45">{projects.length} projects</p>
	</div>

	<div class="space-y-4">
		{#each projects as project (project.slug)}
			<a
				href={`/projects/${project.slug}`}
				class="group block rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
			>
				<div class="flex items-start justify-between gap-6">
					<div>
						<h3 class="text-2xl font-semibold tracking-tight text-white">{project.name}</h3>
						<p class="mt-2 text-sm text-white/45">{project.tagline}</p>
						<p class="mt-3 max-w-2xl leading-7 text-white/60">{project.summary}</p>
					</div>
					<ArrowUpRight
						class="h-5 w-5 shrink-0 text-white/35 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
					/>
				</div>
			</a>
		{/each}
	</div>
</section>
