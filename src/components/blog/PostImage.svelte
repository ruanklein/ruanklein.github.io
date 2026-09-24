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

	let isLoaded = $state(false);
	let hasError = $state(false);

	function handleLoad() {
		isLoaded = true;
	}

	function handleError() {
		isLoaded = true;
		hasError = true;
	}
</script>

<figure class="blog-post-image">
	<div
		class="blog-post-image-frame"
		class:loaded={isLoaded}
		class:error={hasError}
		aria-busy={!isLoaded}
	>
		<div class="blog-post-image-highlight"></div>
		<div class="blog-post-image-loading" aria-hidden="true">
			<div class="blog-post-image-loading-bar"></div>
		</div>
		<img
			{src}
			{alt}
			{width}
			{height}
			{loading}
			decoding="async"
			onload={handleLoad}
			onerror={handleError}
		/>
		{#if hasError}
			<p class="blog-post-image-error" role="status">Unable to load image.</p>
		{/if}
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

	.blog-post-image-loading {
		position: absolute;
		inset: 0.25rem;
		z-index: 1;
		overflow: hidden;
		border-radius: 0.5rem;
		background: linear-gradient(
			110deg,
			rgb(255 255 255 / 0.04) 30%,
			rgb(255 255 255 / 0.12) 45%,
			rgb(255 255 255 / 0.04) 60%
		);
		background-size: 200% 100%;
		opacity: 1;
		transition: opacity 300ms ease;
		pointer-events: none;
		animation: blog-image-shimmer 1.6s linear infinite;
	}

	.blog-post-image-frame.loaded .blog-post-image-loading {
		opacity: 0;
	}

	.blog-post-image-frame.error .blog-post-image-loading {
		background: rgb(255 255 255 / 0.04);
		animation: none;
	}

	.blog-post-image-loading-bar {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 4rem;
		height: 0.125rem;
		border-radius: 999px;
		background: rgb(255 255 255 / 0.28);
		transform: translate(-50%, -50%);
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

	.blog-post-image-error {
		position: absolute;
		inset: 50% 1rem auto;
		z-index: 2;
		margin: 0;
		transform: translateY(-50%);
		text-align: center;
		font-size: 0.75rem;
		color: rgb(255 255 255 / 0.55);
	}

	figcaption {
		margin-top: 0.625rem;
		padding: 0 0.25rem;
		font-size: 0.75rem;
		line-height: 1.5;
		color: rgb(255 255 255 / 0.45);
	}

	@keyframes blog-image-shimmer {
		from {
			background-position: 200% 0;
		}

		to {
			background-position: -200% 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.blog-post-image-loading {
			animation: none;
		}

		.blog-post-image-loading {
			transition: none;
		}
	}
</style>
