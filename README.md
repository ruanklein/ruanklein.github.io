# ruan.sh

Personal website and blog built with SvelteKit, Svelte 5 and mdsvex.

## Features

- **Static Site Generation**: SvelteKit with `@sveltejs/adapter-static`
- **Portfolio Home**: Personal intro and social links
- **Blog Index**: Search and tag-based filtering
- **Blog Post View**: mdsvex-powered markdown posts with code-copy toolbar and post tags
- **Manifest-driven Content**: Post metadata and tag taxonomy come from a central manifest
- **Responsive UI**: Mobile-first layout with a black and white visual system

## Tech Stack

- [SvelteKit](https://svelte.dev/docs/kit/introduction) - App framework and routing
- [Svelte 5](https://svelte.dev/) - Component and reactivity model
- [mdsvex](https://mdsvex.pngwn.io/) - Markdown content pipeline for posts
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type-safe application code
- [@lucide/svelte](https://lucide.dev/) - Icon library

## Architecture

The app uses SvelteKit file-based routing with a small shared blog content layer:

1. **Route Shell**: `src/routes/+layout.svelte`, `src/routes/+page.svelte`
2. **Blog Routes**: `src/routes/blog/+page.svelte`, `src/routes/blog/[slug]/+page.svelte`
3. **Reusable Views and Components**: `src/views/**`, `src/components/**`
4. **Blog Content Layer**: `src/lib/blog/content.ts`, `src/lib/blog/enhance-markdown.ts`

Key points:

- Routing contract: `/`, `/blog`, `/blog/:slug`
- Tag filters use repeated query params: `?t=setup&t=cli`
- Blog metadata source: `src/content/blog/manifest.json`
- Post content source: `src/content/blog/posts/*.md`
- Pager order follows manifest order for editorial control
- Markdown code blocks are enhanced client-side to add a toolbar and clipboard copy action

## Project Structure

```text
src/
	components/        Reusable UI pieces
	content/
		blog/            Blog content domain
			manifest.json  Blog metadata and tag taxonomy
			posts/         Markdown post files processed by mdsvex
	lib/
		blog/            Content lookup, types, URL helpers, markdown enhancement
	routes/            SvelteKit pages and layouts
	views/             Route-level view components
static/              Public assets copied as-is to the final build
```

## Development

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Type and Svelte checks
yarn check

# Build for production
yarn build

# Preview production build
yarn preview

# Optional: run Svelte autofixer after .svelte edits
npx @sveltejs/mcp svelte-autofixer <file> --svelte-version 5
```

## Deployment

The site is generated as static files and deployed to GitHub Pages via GitHub Actions on push to `main`.

Notes:

- The workflow uploads the `build/` directory produced by `adapter-static`
- The site is published at the root of a custom domain, so no SvelteKit `base` path is configured

## License

© 2026 Ruan Felisbino. All rights reserved.
