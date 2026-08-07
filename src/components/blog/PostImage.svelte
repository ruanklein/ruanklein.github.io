<script lang="ts">
	let {
		src,
		alt,
		caption,
		width,
		height,
		loading = 'lazy'
	}: {
		src: string;
		alt: string;
		caption?: string;
		width?: number;
		height?: number;
		loading?: 'eager' | 'lazy';
	} = $props();
</script>

<figure class="blog-post-image">
	<div class="blog-post-image-frame">
		<div class="blog-post-image-highlight"></div>
		<img {src} {alt} {width} {height} {loading} />
	</div>

	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<style>
	.blog-post-image {
		width: fit-content;
		max-width: 100%;
		margin: 1.75rem 0;
	}

	.blog-post-image-frame {
		position: relative;
		overflow: hidden;
		border: 1px solid rgb(255 255 255 / 0.1);
		border-radius: 0.75rem;
		background: rgb(255 255 255 / 0.04);
		padding: 0.25rem;
		box-shadow: 0 18px 35px -28px rgb(255 255 255 / 0.38);
	}

	.blog-post-image-highlight {
		position: absolute;
		top: 0;
		right: 10%;
		left: 10%;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgb(255 255 255 / 0.35), transparent);
	}

	img {
		display: block;
		width: auto;
		max-width: 100%;
		height: auto;
		border-radius: 0.5rem;
	}

	figcaption {
		margin-top: 0.625rem;
		padding: 0 0.25rem;
		font-size: 0.75rem;
		line-height: 1.5;
		color: rgb(255 255 255 / 0.45);
	}
</style>
