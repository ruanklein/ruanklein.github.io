# UI Design System

## Overview

This is a minimalist, dark-mode portfolio design system using pure black (#000) and white (#fff) with opacity variations for hierarchy and elegance.

## Design Principles

- **Minimalism**: Clean, focused layouts with generous spacing
- **Pure Colors**: Only black (#000) and white (#fff) - no grays
- **Opacity-based Hierarchy**: Use alpha channel for visual weight
- **Elegant Interactions**: Subtle hover effects and transitions
- **Typography Scale**: Responsive sizing with clear hierarchy

## Color System

### Tailwind Configuration

```css
@theme {
  --color-black: #000;
  --color-white: #fff;
}
```

### Color Usage

| Element            | Color             | Usage                         |
| ------------------ | ----------------- | ----------------------------- |
| Background         | `bg-black`        | Main background               |
| Primary Text       | `text-white`      | Headlines, important text     |
| Secondary Text     | `text-white/70`   | Subtitles, secondary info     |
| Tertiary Text      | `text-white/60`   | Body text, descriptions       |
| Muted Text         | `text-white/50`   | Less important text           |
| Subtle Text        | `text-white/40`   | Hints, placeholders           |
| Borders Light      | `border-white/10` | Subtle dividers               |
| Borders Medium     | `border-white/20` | Cards, modals                 |
| Borders Hover      | `border-white/30` | Interactive elements on hover |
| Background Subtle  | `bg-white/5`      | Hover states for cards        |
| Background Medium  | `bg-white/10`     | Code blocks, inputs           |
| Background Overlay | `bg-black/80`     | Modal overlays                |
| Shadows            | `shadow-white/20` | Glows, elevation              |

## Typography

### Font Scale

```
h1: text-5xl md:text-7xl (48px/72px) - Main title
h2: text-3xl md:text-4xl (30px/36px) - Section titles
h3: text-xl (20px) - Project titles
h4: text-lg (18px) - Subsection titles
body: text-lg (18px) - Main description
small: text-sm (14px) - Secondary info
```

### Font Weights

- `font-bold` (700) - Headlines (h1, h2)
- `font-semibold` (600) - Project titles (h3)
- `font-medium` (500) - Links, buttons
- `font-normal` (400) - Body text

## Spacing System

### Layout Spacing

- Container: `max-w-4xl mx-auto px-6`
- Section spacing: `mb-20` (5rem)
- Content spacing: `space-y-6` (1.5rem)
- Tight spacing: `space-y-3` (0.75rem)
- Vertical padding: `py-16 md:py-24`

### Component Spacing

- Cards: `p-6` or `p-8`
- Inline gaps: `gap-2`, `gap-4`, `gap-6`
- Margins: `mb-3`, `mb-4`, `mb-6`, `mb-8`

## Components

### Header

```svelte
<header class="mb-20">
  <div class="flex items-center gap-6 mb-4">
    <img class="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg shadow-white/20" />
    <h1 class="text-5xl md:text-7xl font-bold tracking-tight">Name</h1>
  </div>
  <p class="text-xl md:text-2xl text-white/70 mb-8">Title</p>
  <p class="text-lg text-white/60 max-w-2xl leading-relaxed mb-6">Description</p>

  <!-- Links -->
  <div class="flex items-center gap-4">
    <a class="text-white/60 hover:text-white transition-colors">Icon</a>
  </div>
</header>
```

### Project List

```svelte
<div class="border-l-2 border-white/10 pl-6 space-y-3">
  <div class="flex items-start justify-between gap-4 py-2">
    <div class="flex-1">
      <div class="flex items-center gap-2 mb-1">
        <h3 class="text-xl font-semibold">Project Name</h3>
        <a class="text-white/40 hover:text-white/60 transition-colors">
          Icon
        </a>
      </div>
      <p class="text-sm text-white/60 mb-3">Description</p>
      <button class="text-sm text-white/50 hover:text-white/70 transition-colors underline decoration-white/20 hover:decoration-white/40">
        Read the story
      </button>
    </div>
  </div>
</div>
```

### Modal

```svelte
<!-- Overlay -->
<div class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
  <!-- Modal Content -->
  <div class="bg-black border border-white/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
    <!-- Header (sticky) -->
    <div class="sticky top-0 bg-black border-b border-white/10 p-6 flex items-start justify-between gap-4">
      <div>
        <h3 class="text-2xl font-bold mb-1">Title</h3>
        <p class="text-sm text-white/60">Subtitle</p>
      </div>
      <button class="text-white/40 hover:text-white transition-colors shrink-0">
        Close Icon
      </button>
    </div>
    <!-- Body -->
    <div class="p-6">Content</div>
  </div>
</div>
```

### Sub-projects

```svelte
<div class="pl-6 space-y-2 pb-2">
  <a class="group/sub flex items-start gap-2 text-white/70 hover:text-white transition-colors">
    <span class="text-white/30 mt-1">→</span>
    <div class="flex-1">
      <span class="text-sm font-medium">Name</span>
      <span class="text-white/40 mx-2">·</span>
      <span class="text-sm text-white/50">Description</span>
    </div>
    <Icon class="w-3 h-3 text-white/30 group-hover/sub:text-white/50 shrink-0 mt-1" />
  </a>
</div>
```

## Interactive States

### Hover Effects

- Text links: `hover:text-white/70`
- Icons: `hover:text-white` or `hover:text-white/60`
- Borders: `hover:border-white/30`
- Underlines: `hover:decoration-white/40`
- Backgrounds: `hover:bg-white/5`

### Transitions

- All interactive elements: `transition-colors`
- Cards: `transition-all duration-300`

## Prose Styles (Modal Content)

### Typography

```css
.prose {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.75;
}

.prose h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(255, 255, 255);
  margin-bottom: 1rem;
  margin-top: 1.5rem;
}

.prose h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: rgb(255, 255, 255);
  margin-bottom: 0.75rem;
  margin-top: 1.25rem;
}

.prose p {
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);
}

.prose strong {
  font-weight: 600;
  color: rgb(255, 255, 255);
}

.prose code {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
}

.prose a {
  color: rgb(255, 255, 255);
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.3);
}

.prose a:hover {
  text-decoration-color: rgba(255, 255, 255, 0.6);
}
```

## Icons

Using `lucide-svelte` icons:

- Standard size: `w-5 h-5` (20px)
- Small size: `w-4 h-4` (16px)
- Extra small: `w-3 h-3` (12px)
- Header icons: `w-6 h-6` (24px)

## Accessibility

- All links have `aria-label` attributes
- Modal has `role="dialog"` and `aria-modal="true"`
- All interactive elements have proper focus states
- Sufficient color contrast with opacity values

## Responsive Design

### Breakpoints

- Mobile first approach
- `md:` prefix for tablet/desktop (768px+)

### Responsive Patterns

- Font sizes: `text-5xl md:text-7xl`
- Spacing: `py-16 md:py-24`
- Logo: `w-16 h-16 md:w-20 md:h-20`
- Modal: `max-h-[80vh]` with scroll
