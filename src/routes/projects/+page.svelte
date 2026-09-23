<script lang="ts">
	import ProjectsListView from '../../views/ProjectsListView.svelte';
	import { projects } from '$lib/projects';
</script>

<svelte:head>
	<title>Projects - ruan.sh</title>
	<meta name="description" content="A selection of open-source projects by Ruan Felisbino." />
</svelte:head>

<ProjectsListView {projects} />
