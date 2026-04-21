import type { PageLoad } from './$types';
import { getBlogManifest } from '$lib/blog/content';

export const prerender = true;

export const load: PageLoad = () => {
	const { posts } = getBlogManifest();

	return {
		posts
	};
};
