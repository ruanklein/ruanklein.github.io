<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { siteName, socialImageAlt, socialImageUrl, type SeoJsonLd } from '$lib/seo';

	let {
		title,
		description,
		canonical,
		openGraphType = 'website',
		image = socialImageUrl,
		imageAlt = socialImageAlt,
		jsonLd
	}: {
		title: string;
		description: string;
		canonical: string;
		openGraphType?: string;
		image?: string;
		imageAlt?: string;
		jsonLd?: SeoJsonLd;
	} = $props();
</script>

<SvelteSeo
	{title}
	{description}
	applicationName={siteName}
	themeColor="#000000"
	manifest="/manifest.json"
	{canonical}
	openGraph={{
		title,
		description,
		url: canonical,
		type: openGraphType,
		locale: 'en_US',
		site_name: siteName,
		images: [
			{
				url: image,
				width: 150,
				height: 150,
				alt: imageAlt
			}
		]
	}}
	twitter={{
		card: 'summary_large_image',
		title,
		description,
		image,
		imageAlt
	}}
	{jsonLd}
/>
