import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import {
	getAdjacentPosts,
	getBlogManifest,
	getPostBySlug,
	hasPostContent
} from '$lib/blog/content';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return getBlogManifest().posts.map((post) => ({
		slug: post.slug
	}));
};

export const load: PageLoad = ({ params }) => {
	const post = getPostBySlug(params.slug);

	if (!post || !hasPostContent(params.slug)) {
		throw error(404, 'Post not found');
	}

	const { previousPost, nextPost } = getAdjacentPosts(params.slug);

	return {
		slug: params.slug,
		previousSlug: previousPost?.slug ?? null,
		nextSlug: nextPost?.slug ?? null
	};
};
