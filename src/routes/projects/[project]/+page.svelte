<script lang="ts">
	import ProjectDetailView from '../../../views/ProjectDetailView.svelte';
	import type { Project } from '$lib/projects';

	let { data }: { data: { project: Project } } = $props();
</script>

<svelte:head>
	<title>{data.project.name} - Projects - ruan.sh</title>
	<meta name="description" content={data.project.summary} />
</svelte:head>

<ProjectDetailView project={data.project} />
