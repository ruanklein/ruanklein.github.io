<script lang="ts">
  import { X } from 'lucide-svelte'
  import i18n from './lib/i18n'

  export let isOpen = false
  export let projectName = ''
  export let onClose: () => void

  function handleBackdropClick() {
    onClose()
  }
</script>

{#if isOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
    class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    on:click={handleBackdropClick}
    role="dialog"
    aria-modal="true"
    tabindex="-1"
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="bg-black border border-white/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      on:click|stopPropagation
    >
      <div
        class="sticky top-0 bg-black border-b border-white/10 p-6 flex items-start justify-between gap-4"
      >
        <div>
          <h3 class="text-2xl font-bold mb-1">{projectName}</h3>
          <p class="text-sm text-white/60">{i18n.t('projects.whyBuilt')}</p>
        </div>
        <button
          on:click={onClose}
          class="text-white/40 hover:text-white transition-colors shrink-0"
          aria-label="Close modal"
        >
          <X class="w-6 h-6" />
        </button>
      </div>
      <div class="p-6 prose prose-invert max-w-none">
        <slot />
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
