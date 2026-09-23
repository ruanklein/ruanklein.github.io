import { getBlogManifest } from '$lib/blog/content';
import { projects } from '$lib/projects';
import type { RequestHandler } from './$types';

const siteUrl = 'https://ruan.sh';
type SitemapUrl = { loc: string; lastmod?: string };

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

export const prerender = true;

export const GET: RequestHandler = () => {
	const blogUrls = getBlogManifest().posts.map((post) => ({
		loc: `${siteUrl}/blog/${post.slug}`,
		lastmod: post.date
	}));
	const projectUrls = projects.map((project) => ({
		loc: `${siteUrl}/projects/${project.slug}`
	}));
	const urls: SitemapUrl[] = [
		{ loc: `${siteUrl}/` },
		{ loc: `${siteUrl}/blog` },
		...blogUrls,
		{ loc: `${siteUrl}/projects` },
		...projectUrls
	];

	const body = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...urls.map(({ loc, lastmod }) => {
			const lastmodTag = lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : '';
			return `<url><loc>${escapeXml(loc)}</loc>${lastmodTag}</url>`;
		}),
		'</urlset>'
	].join('');

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
};
