import type { PageLoad } from './$types';
import { getBlogManifest } from '$lib/blog/content';

export const prerender = true;

export const load: PageLoad = () => {
	const manifest = getBlogManifest();

	return {
		posts: manifest.posts,
		tags: manifest.tags
	};
};
