<script lang="ts">
	import SeoHead from '../../../components/SeoHead.svelte';
	import ProjectDetailView from '../../../views/ProjectDetailView.svelte';
	import { buildProjectJsonLd, siteUrl } from '$lib/seo';
	import type { Project } from '$lib/projects';

	let { data }: { data: { project: Project } } = $props();
</script>

<SeoHead
	title={`${data.project.name} — Projects — ruan.sh`}
	description={data.project.summary}
	canonical={`${siteUrl}/projects/${data.project.slug}`}
	jsonLd={buildProjectJsonLd(data.project)}
/>

<ProjectDetailView project={data.project} />
