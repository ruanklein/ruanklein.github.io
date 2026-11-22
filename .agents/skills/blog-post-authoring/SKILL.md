---
name: blog-post-authoring
description: Use when creating or editing posts for ruan.sh's /blog, including their .svx content and manifest metadata.
---

# Blog Post Authoring

Create or update an individual ruan.sh blog post using the project's existing content, registration, rendering, and static-site conventions.

## How the blog is wired

- Write each article in `src/content/blog/posts/<slug>.svx`. mdsvex processes these files as Markdown with Svelte components.
- Register each article in `src/content/blog/manifest.ts`. Its `posts` entries provide `slug`, `title`, `date`, `preview`, `tag`, `icon`, and the imported `component`.
- The `/blog` page reads this manifest for cards, search, and tag filters. The top-level `tags` array controls which tag filters are available; the listing sorts posts by date descending.
- `/blog/[slug]` prerenders entries from the manifest. The post view renders the title, preview, date, body, tags, and adjacent-post links; it also builds page metadata and `BlogPosting` JSON-LD. The sitemap gets post URLs and `lastmod` from the same manifest.
- The manifest is currently ordered from oldest to newest. Adjacent-post navigation follows that array order, so preserve chronological order when inserting a post.

## Author or edit a post

1. Read the manifest and one or more nearby posts to match their content, component imports, metadata, and formatting. Use the slug as the `.svx` filename and manifest key: lowercase kebab case, stable after publication.
2. For a new post, import its `.svx` component and add one manifest entry with all required fields. Add any new tag to the top-level `tags` array as well. Choose an existing Lucide icon that fits the subject and place the post by date in the manifest order.
3. Write the article body in English by default, matching the current blog; use another language when requested. The post view already supplies the page's `<h1>`, title, preview, date, and tags, so do not duplicate the title as a body-level `<h1>`.
4. Keep instructions concrete and technically accurate. State prerequisites and expected results when they help the reader; include a rollback path for changes that alter system configuration. Verify version-sensitive claims against authoritative, preferably primary, sources and link those sources in the article.
5. Preserve an existing post's slug and publication date during routine edits unless the user asks to change them. The single `date` value currently supplies both `datePublished` and `dateModified`, and the sitemap's `lastmod`; do not imply a separate update date. For a new post without a supplied date, use the current date in `YYYY-MM-DD` form.

## Existing article components

- Use `<Command>` for a single command when its copy button and terminal presentation help. Set `root` when the displayed prompt should indicate a root shell; do not add `sudo` or root styling unless the command actually requires it.
- Use `<MultiLineContent>` for copyable multi-line text such as XML or configuration files. Follow the import and content-string pattern in `ollama-tailscale-macos.svx`.
- Use `<PostImage>` for article images. Import local assets from `$lib/assets`, provide meaningful `alt` text and intrinsic `width`/`height`, and add a caption when useful. Do not add decorative images without a purpose.
- Fenced code blocks are enhanced by the blog renderer with a language label and copy control. Keep language identifiers useful and examples runnable when possible.

## Validation

- Check that the `.svx` file, manifest import, slug, metadata, component, and tags agree; confirm no duplicate slug and that manifest order preserves intended adjacent-post links.
- Run `yarn check`, `yarn build`, and `yarn lint` for post changes. The build should prerender the new or updated route and regenerate the sitemap from the manifest.
- Confirm the post appears in `/blog`, its `/blog/<slug>` page renders, its tag filters work, and its title/preview/date are reflected in page metadata and sitemap output.
- If the request requires changing shared `.svelte` rendering or layout, inspect the affected blog components and follow the project's Svelte skills and autofixer guidance. Keep unrelated renderer, route, and layout changes out of a content-only task.
