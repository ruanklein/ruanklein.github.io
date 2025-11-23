<script lang="ts">
  import i18n from './lib/i18n'

  export let currentLocale: string
  export let onLocaleChange: (locale: string) => void

  let isOpen = false

  const locales = [
    { code: 'en', label: 'English' },
    { code: 'pt-BR', label: 'Português' },
  ]

  function toggleDropdown() {
    isOpen = !isOpen
  }

  function selectLocale(locale: string) {
    onLocaleChange(locale)
    isOpen = false
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement
    if (!target.closest('.language-selector')) {
      isOpen = false
    }
  }

  $: currentLocaleName =
    locales.find((l) => l.code === currentLocale)?.label || 'English'
</script>

<svelte:window on:click={handleClickOutside} />

<div class="language-selector relative">
  <button
    on:click|stopPropagation={toggleDropdown}
    class="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
    aria-label={i18n.t('nav.language')}
  >
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
      />
    </svg>
    <span>{currentLocaleName}</span>
    <svg
      class="w-3 h-3 transition-transform {isOpen ? 'rotate-180' : ''}"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {#if isOpen}
    <div
      class="absolute right-0 mt-2 py-2 bg-black border border-white/20 min-w-32 z-50"
    >
      {#each locales as locale}
        <button
          on:click={() => selectLocale(locale.code)}
          class="w-full px-4 py-2 text-left text-sm transition-colors {currentLocale ===
          locale.code
            ? 'text-white bg-white/10'
            : 'text-white/60 hover:text-white hover:bg-white/5'}"
        >
          {locale.label}
        </button>
      {/each}
    </div>
  {/if}
</div>
