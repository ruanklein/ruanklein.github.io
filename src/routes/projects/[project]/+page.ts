import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import { getProjectBySlug, projects } from '$lib/projects';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return projects.map((project) => ({
		project: project.slug
	}));
};

export const load: PageLoad = ({ params }) => {
	const project = getProjectBySlug(params.project);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return { project };
};
