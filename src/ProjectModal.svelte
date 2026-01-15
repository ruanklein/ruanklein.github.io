<script lang="ts">
  import { onDestroy } from 'svelte'
  import { fade, scale } from 'svelte/transition'
  import { X } from 'lucide-svelte'
  import i18n from './lib/i18n'

  export let isOpen = false
  export let projectName = ''
  export let onClose: () => void

  let dialogEl: HTMLDivElement | null = null
  let previousOverflow: string | null = null

  function close() {
    onClose()
  }

  function handleBackdropClick() {
    close()
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!isOpen) return
    if (event.key === 'Escape') {
      event.preventDefault()
      close()
    }
  }

  function lockScroll() {
    if (typeof document === 'undefined') return
    if (previousOverflow === null) {
      previousOverflow = document.documentElement.style.overflow
      document.documentElement.style.overflow = 'hidden'
    }
  }

  function unlockScroll() {
    if (typeof document === 'undefined') return
    if (previousOverflow !== null) {
      document.documentElement.style.overflow = previousOverflow
      previousOverflow = null
    }
  }

  $: if (isOpen) {
    lockScroll()
    queueMicrotask(() => dialogEl?.focus())
  } else {
    unlockScroll()
  }

  onDestroy(() => {
    unlockScroll()
  })
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    transition:fade={{ duration: 140 }}
  >
    <button
      type="button"
      class="absolute inset-0 bg-black/70 backdrop-blur-sm"
      on:click={handleBackdropClick}
      aria-label={i18n.t('modal.close')}
    ></button>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      bind:this={dialogEl}
      class="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-black/80 backdrop-blur-md shadow-xl shadow-black/60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      tabindex="-1"
      on:click|stopPropagation
      transition:scale={{ duration: 160, start: 0.98 }}
    >
      <div
        aria-hidden="true"
        class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      ></div>

      <div
        class="sticky top-0 z-10 border-b border-white/10 bg-black/60 backdrop-blur-md"
      >
        <div class="px-6 py-4 flex items-start justify-between gap-4">
          <div class="min-w-0">
            <h3
              id="project-modal-title"
              class="text-xl sm:text-2xl font-semibold tracking-tight truncate"
            >
              {projectName}
            </h3>
            <div class="mt-1 flex items-center gap-3">
              <p class="text-sm text-white/60">{i18n.t('projects.whyBuilt')}</p>
              <span
                class="hidden sm:inline h-4 w-px bg-white/10"
                aria-hidden="true"
              ></span>
              <span class="hidden sm:inline text-xs text-white/40">Esc</span>
            </div>
          </div>

          <button
            on:click={close}
            class="shrink-0 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/10 transition"
            aria-label={i18n.t('modal.close')}
          >
            <X class="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        class="relative max-h-[75vh] sm:max-h-[78vh] overflow-y-auto overscroll-contain"
      >
        <div class="p-6 prose prose-invert max-w-none">
          <slot />
        </div>
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/70 to-transparent"
        ></div>
      </div>
    </div>
  </div>
{/if}

<style>
  :global(.prose) {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.75;
  }

  :global(.prose h1) {
    font-size: 1.5rem;
    font-weight: 700;
    color: rgb(255, 255, 255);
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }

  :global(.prose h2) {
    font-size: 1.25rem;
    font-weight: 700;
    color: rgb(255, 255, 255);
    margin-bottom: 0.75rem;
    margin-top: 1.25rem;
  }

  :global(.prose h3) {
    font-size: 1.125rem;
    font-weight: 600;
    color: rgb(255, 255, 255);
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  :global(.prose p) {
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.8);
  }

  :global(.prose ul),
  :global(.prose ol) {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
  }

  :global(.prose li) {
    margin-bottom: 0.5rem;
  }

  :global(.prose strong) {
    font-weight: 600;
    color: rgb(255, 255, 255);
  }

  :global(.prose em) {
    font-style: italic;
    color: rgba(255, 255, 255, 0.9);
  }

  :global(.prose code) {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.9);
  }

  :global(.prose a) {
    color: rgb(255, 255, 255);
    text-decoration: underline;
    text-decoration-color: rgba(255, 255, 255, 0.3);
    transition: text-decoration-color 0.2s;
  }

  :global(.prose a:hover) {
    text-decoration-color: rgba(255, 255, 255, 0.6);
  }
</style>
