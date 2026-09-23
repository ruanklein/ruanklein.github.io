<script lang="ts">
	import { browser } from '$app/environment';
	import { Go } from '@dev.icons/svelte/mono';
	import { ArrowLeft, ArrowUpRight, ExternalLink, GitFork, LockKeyhole } from '@lucide/svelte';
	import type { Project, ProjectType } from '../lib/projects';

	let { project }: { project: Project } = $props();

	function resolveHeroClass(type: ProjectType): string {
		if (type === 'proprietary') {
			return 'border-amber-200/20 bg-gradient-to-br from-amber-50/[0.09] via-white/[0.03] to-transparent';
		}

		return 'border-white/10 bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-transparent';
	}
</script>

<article class="max-w-4xl">
	<a
		href="/projects"
		class="mb-8 inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
	>
		<ArrowLeft class="h-4 w-4" />
		Back to projects
	</a>

	<header
		class={`relative overflow-hidden rounded-2xl border p-8 md:p-12 ${resolveHeroClass(project.type)}`}
	>
		<div class="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-white/[0.05] blur-3xl"></div>
		<div
			class="absolute top-8 right-8 flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/75 md:top-12 md:right-12"
			title={project.language}
		>
			{#if browser}
				<Go size={42} title={project.language} />
			{:else}
				<span class="font-mono text-sm" aria-hidden="true">Go</span>
			{/if}
			<span class="sr-only">{project.language}</span>
		</div>
		<div class="relative">
			<div class="mb-6 flex items-center gap-3 text-sm tracking-[0.3em] text-white/40 uppercase">
				<span>Project</span>
				<span class="text-white/20">/</span>
				<span>{project.slug}</span>
			</div>
			{#if project.type === 'proprietary'}
				<div
					class="mb-5 inline-flex items-center gap-1.5 rounded-full border border-amber-200/25 bg-amber-200/[0.08] px-2.5 py-1 text-[0.65rem] tracking-[0.18em] text-amber-100/75 uppercase"
				>
					<LockKeyhole class="h-3 w-3" />
					Proprietary
				</div>
			{:else}
				<div
					class="mb-5 inline-flex items-center gap-1.5 rounded-full border border-emerald-200/20 bg-emerald-200/[0.06] px-2.5 py-1 text-[0.65rem] tracking-[0.18em] text-emerald-100/65 uppercase"
				>
					<GitFork class="h-3 w-3" />
					Open source
				</div>
			{/if}
			<h1 class="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl">
				{project.name}
			</h1>
			<p class="mt-6 max-w-2xl text-2xl leading-tight tracking-tight text-white/75 md:text-3xl">
				{project.tagline}
			</p>
			<p class="mt-6 max-w-2xl text-base leading-8 text-white/55 md:text-lg">{project.summary}</p>

			<div class="mt-10 flex flex-wrap items-center gap-3">
				<a
					href={project.repositoryUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/85"
				>
					View on GitHub
					<ArrowUpRight class="h-4 w-4" />
				</a>

				{#if project.websiteUrl && project.websiteLabel}
					<a
						href={project.websiteUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/35 hover:text-white"
					>
						{project.websiteLabel}
						<ExternalLink class="h-4 w-4" />
					</a>
				{/if}
			</div>
		</div>
	</header>

	<div class="mt-16 grid gap-12 md:grid-cols-[minmax(0,1.25fr)_minmax(16rem,0.75fr)]">
		<section aria-labelledby="about-project">
			<p class="text-sm tracking-[0.3em] text-white/35 uppercase">The idea</p>
			<h2 id="about-project" class="mt-3 text-3xl font-semibold tracking-tight">
				Built to be used.
			</h2>
			<p class="mt-6 text-lg leading-8 text-white/65">{project.overview}</p>
		</section>

		<aside class="rounded-xl border border-white/10 bg-white/[0.03] p-6">
			<p class="text-sm tracking-[0.3em] text-white/35 uppercase">At a glance</p>
			<dl class="mt-6 space-y-5">
				{#each project.stats as stat (stat.label)}
					<div>
						<dt class="text-xs tracking-[0.2em] text-white/35 uppercase">{stat.label}</dt>
						<dd class="mt-1 text-sm font-medium text-white/80">{stat.value}</dd>
					</div>
				{/each}
			</dl>
		</aside>
	</div>

	<section class="mt-16" aria-labelledby="highlights-heading">
		<p class="text-sm tracking-[0.3em] text-white/35 uppercase">Highlights</p>
		<h2 id="highlights-heading" class="mt-3 text-3xl font-semibold tracking-tight">
			What it brings together.
		</h2>
		<div class="mt-8 grid gap-4 sm:grid-cols-2">
			{#each project.highlights as highlight, index (highlight)}
				<div class="rounded-xl border border-white/10 bg-white/[0.025] p-5">
					<p class="font-mono text-xs text-white/30">{String(index + 1).padStart(2, '0')}</p>
					<p class="mt-6 leading-7 text-white/75">{highlight}</p>
				</div>
			{/each}
		</div>
	</section>

	{#if project.note}
		<aside class="mt-16 border-l-2 border-white/20 pl-5 text-sm leading-7 text-white/50">
			{project.note}
		</aside>
	{/if}
</article>
