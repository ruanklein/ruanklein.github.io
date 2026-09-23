import type { Thing, WithContext } from 'schema-dts';
import type { BlogPostMeta } from './blog/types';
import type { Project } from './projects';

export const siteUrl = 'https://ruan.sh';
export const siteName = 'ruan.sh';
export const socialImageUrl = `${siteUrl}/rsh.png`;
export const socialImageAlt = 'ruan.sh logo';

export type SeoJsonLd = Thing | WithContext<Thing>;

export const homeDescription =
	'Personal site of Ruan Felisbino with software projects, experiments, and technical notes.';

export const blogDescription =
	'Technical notes and practical guides about macOS, command-line tools, AI, and software.';

export const projectsDescription =
	'A selection of software projects by Ruan Felisbino, including open-source tools and experiments.';

export function buildHomeJsonLd(): SeoJsonLd {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: siteName,
		url: siteUrl,
		description: homeDescription,
		publisher: {
			'@type': 'Person',
			name: 'Ruan Felisbino',
			url: siteUrl,
			sameAs: ['https://github.com/ruanklein', 'https://www.linkedin.com/in/ruanklein/']
		}
	} as SeoJsonLd;
}

export function buildBlogPostJsonLd(post: BlogPostMeta): SeoJsonLd {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.preview,
		datePublished: post.date,
		dateModified: post.date,
		url: `${siteUrl}/blog/${post.slug}`,
		mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
		image: socialImageUrl,
		keywords: post.tag,
		author: {
			'@type': 'Person',
			name: 'Ruan Felisbino',
			url: siteUrl
		},
		publisher: {
			'@type': 'Person',
			name: 'Ruan Felisbino',
			url: siteUrl
		}
	} as SeoJsonLd;
}

function getProjectStat(project: Project, label: string): string | undefined {
	return project.stats.find((stat) => stat.label.toLowerCase() === label.toLowerCase())?.value;
}

export function buildProjectJsonLd(project: Project): SeoJsonLd {
	const projectPageUrl = `${siteUrl}/projects/${project.slug}`;
	const base = {
		'@context': 'https://schema.org',
		name: project.name,
		description: project.summary,
		url: projectPageUrl,
		image: socialImageUrl,
		programmingLanguage: project.language,
		sameAs: project.websiteUrl ? [project.websiteUrl] : undefined,
		creator: {
			'@type': 'Person',
			name: 'Ruan Felisbino',
			url: siteUrl
		}
	};

	if (project.type === 'open-source') {
		return {
			...base,
			'@type': 'SoftwareSourceCode',
			codeRepository: project.repositoryUrl,
			license: getProjectStat(project, 'License')
		} as SeoJsonLd;
	}

	return {
		...base,
		'@type': 'SoftwareApplication',
		applicationCategory: 'SoftwareApplication'
	} as SeoJsonLd;
}
