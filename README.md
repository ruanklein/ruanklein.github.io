# ruan.sh

Personal website and blog built as a Svelte 5 SPA.

## Features

- **Minimalist Design**: Pure black (#000) and white (#fff) color scheme
- **Portfolio Home**: Personal intro and social links
- **Blog Index**: Search and tag-based filtering
- **Blog Post View**: Markdown rendering with heading anchors and code-copy button
- **Client-side Routing**: `/`, `/blog`, `/blog/:slug` with browser history support
- **Responsive**: Mobile-first design with smooth transitions
- **Dark Mode Only**: True dark theme without compromise

## Tech Stack

- [Svelte 5](https://svelte.dev/) - Reactive framework
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type-safe application code
- [@humanspeak/svelte-markdown](https://www.npmjs.com/package/@humanspeak/svelte-markdown) - Markdown rendering
- [lucide-svelte](https://lucide.dev/) - Icon library

## Architecture

The app uses a layered SPA structure:

1. **State and Routing** (`src/lib/blog/*.svelte.ts`)
2. **Reusable Components** (`src/components/**`)
3. **Route Views** (`src/views/**`)
4. **App Orchestrator** (`src/App.svelte`)

Key points:

- Routing contract: `/`, `/blog`, `/blog/:slug`
- Tag filters use repeated query params: `?t=setup&t=cli`
- Blog metadata source: `public/blog-manifest.json`
- Post content source: `public/posts/*.md`
- Pager order follows manifest order (`manifestStore.posts`) for editorial control

For a detailed project map intended for LLMs and contributors, see [CLAUDE.md](./CLAUDE.md).

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

## UI

See [ai/ui.md](./ai/ui.md) for ui system documentation.

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `main`.

## License

© 2026 Ruan Felisbino. All rights reserved.
