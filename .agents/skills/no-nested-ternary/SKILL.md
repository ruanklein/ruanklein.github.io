---
name: no-nested-ternary
description: Enforces readable conditional logic by forbidding chained/nested ternaries in the same expression, especially in Svelte runes and template markup.
---

# No Nested Ternary

## Goal

Prevent abusive ternary usage that hurts readability and reviewability.

## Rules

1. Never use more than one ternary operator in the same expression.
2. Never nest ternaries (e.g. `a ? b : c ? d : e`).
3. Prefer `if/else` blocks for multi-branch conditions.
4. For reusable logic, extract a named function with early returns.
5. For simple two-branch value selection, a single ternary is allowed.

## Svelte-Specific Guidance

1. In `$derived(...)`, avoid chained ternaries. Move logic to helper functions when there are 3 or more branches.
2. In markup (`class=`, text interpolation, props), keep ternary usage to one conditional max.
3. If a condition grows over time, migrate from ternary to computed variable/function immediately.

## Refactor Patterns

### Avoid

```ts
const title =
  route === null ? 'home' : route === 'blog' ? 'blog' : is404 ? '404' : 'home'
```

### Prefer

```ts
function resolveTitle(route: string | null, is404: boolean): string {
  if (route === null) return 'home'
  if (route === 'blog') return 'blog'
  if (is404) return '404'
  return 'home'
}

const title = $derived(resolveTitle(route, is404))
```

## Review Checklist

1. Is there any expression with `?` used more than once? Refactor.
2. Is conditional logic hard to scan left-to-right? Refactor.
3. Is the expression reused or likely to grow? Extract function.

## Validation

1. Run `npx @sveltejs/mcp svelte-autofixer <file> --svelte-version 5` after edits.
2. Run project build/check to confirm no regressions.
