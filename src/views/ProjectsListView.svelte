<script lang="ts">
	import { browser } from '$app/environment';
	import { Go } from '@dev.icons/svelte/mono';
	import { ArrowUpRight, FolderGit2, GitFork, LockKeyhole } from '@lucide/svelte';
	import type { Project, ProjectType } from '../lib/projects';

	let { projects }: { projects: Project[] } = $props();

	function resolveCardClass(type: ProjectType): string {
		if (type === 'proprietary') {
			return 'border-amber-200/20 bg-amber-50/[0.025] hover:border-amber-200/35 hover:bg-amber-50/[0.05]';
		}

		return 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]';
	}
</script>

<header class="mb-12">
	<div class="mb-4 flex items-center gap-4">
		<FolderGit2 class="h-7 w-7 text-white/40" />
		<p class="text-sm tracking-[0.3em] text-white/35 uppercase">Project portfolio</p>
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
				class={`group block rounded-xl border p-6 transition-colors ${resolveCardClass(project.type)}`}
			>
				<div class="flex items-start justify-between gap-6">
					<div>
						{#if project.type === 'proprietary'}
							<span
								class="mb-4 inline-flex items-center gap-1.5 rounded-full border border-amber-200/25 bg-amber-200/[0.08] px-2.5 py-1 text-[0.65rem] tracking-[0.18em] text-amber-100/75 uppercase"
							>
								<LockKeyhole class="h-3 w-3" />
								Proprietary
							</span>
						{:else}
							<span
								class="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-200/20 bg-emerald-200/[0.06] px-2.5 py-1 text-[0.65rem] tracking-[0.18em] text-emerald-100/65 uppercase"
							>
								<GitFork class="h-3 w-3" />
								Open source
							</span>
						{/if}
						<h3 class="text-2xl font-semibold tracking-tight text-white">{project.name}</h3>
						<p class="mt-2 text-sm text-white/45">{project.tagline}</p>
						<p class="mt-3 max-w-2xl leading-7 text-white/60">{project.summary}</p>
					</div>
					<div class="flex shrink-0 flex-col items-end gap-4">
						<div
							class="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]"
							title={project.language}
						>
							{#if browser}
								<Go size={28} title={project.language} />
							{:else}
								<span class="font-mono text-xs text-white/60" aria-hidden="true">Go</span>
							{/if}
							<span class="sr-only">{project.language}</span>
						</div>
						<ArrowUpRight
							class="h-5 w-5 text-white/35 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
						/>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
