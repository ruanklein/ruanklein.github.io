<script lang="ts">
	import SeoHead from '../../components/SeoHead.svelte';
	import { projectsDescription, siteUrl } from '$lib/seo';
	import ProjectsListView from '../../views/ProjectsListView.svelte';
	import { projects } from '$lib/projects';
</script>

<SeoHead
	title="Projects — ruan.sh"
	description={projectsDescription}
	canonical={`${siteUrl}/projects`}
/>

<ProjectsListView {projects} />
