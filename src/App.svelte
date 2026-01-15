<script lang="ts">
  import { onMount } from 'svelte'
  import { Github, ExternalLink, Linkedin, Mail } from 'lucide-svelte'
  import ProjectModal from './ProjectModal.svelte'
  import LanguageSelector from './LanguageSelector.svelte'
  import i18n from './lib/i18n'

  // Import project story components
  import SynapSeqStory from './stories/SynapSeq.svelte'
  import ToolboxShortcutsStory from './stories/ToolboxShortcuts.svelte'

  let selectedProject: string | null = null
  let currentLocale = i18n.locale
  let localeKey = 0 // For forcing component reactivity
  let scrolled = false

  $: {
    i18n.locale = currentLocale
    localeKey++ // Increment to force component re-render
  }

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 8
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  const projects = [
    {
      nameKey: 'synapseq.name',
      descriptionKey: 'synapseq.description',
      url: 'https://github.com/ruanklein/synapseq',
      storyComponent: SynapSeqStory,
      subProjects: [
        {
          nameKey: 'synapseq.site.name',
          descriptionKey: 'synapseq.site.description',
          url: 'https://synapseq.org',
        },
        {
          nameKey: 'synapseq.hub.name',
          descriptionKey: 'synapseq.hub.description',
          url: 'https://hub.synapseq.org',
        },
      ],
    },
    {
      nameKey: 'toolbox.name',
      descriptionKey: 'toolbox.description',
      url: 'https://github.com/ruanklein/toolbox-shortcuts',
      storyComponent: ToolboxShortcutsStory,
    },
  ]

  function toggleStory(projectName: string) {
    selectedProject = selectedProject === projectName ? null : projectName
  }

  function handleLocaleChange(locale: string) {
    currentLocale = locale
  }
</script>

<main id="top" class="min-h-screen bg-black text-white">
  <!-- Navbar -->
  <nav class="sticky top-3 z-40">
    <div class="shell">
      <div
        class="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md supports-backdrop-filter:bg-black/60 shadow-sm shadow-black/40 transition {scrolled
          ? 'border-white/15 bg-black/80 shadow-md shadow-black/60'
          : ''}"
      >
        <div class="h-12 flex items-center justify-between gap-3 px-3 sm:px-4">
          <a
            href="#top"
            class="group flex items-center gap-2 rounded-full px-2 py-1 -ml-2 text-white/80 hover:text-white transition-colors"
            aria-label={i18n.t('header.siteName')}
          >
            <img
              src="/logo.png"
              alt="Ruan Felisbino"
              class="w-8 h-8 rounded-full ring-1 ring-white/10 shadow-sm shadow-white/10 group-hover:ring-white/20 transition"
            />
            <span class="text-sm font-semibold tracking-tight">
              {i18n.t('header.siteName')}
            </span>
          </a>

          <div class="flex items-center gap-2">
            <LanguageSelector
              {currentLocale}
              onLocaleChange={handleLocaleChange}
            />
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="shell py-16 md:py-24">
    <!-- Header -->
    <header class="mb-20">
      <div class="flex items-center gap-6 mb-4">
        <!-- <img
          src="/logo.png"
          alt={i18n.t('header.name')}
          class="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg shadow-white/20"
        /> -->
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight">
          {i18n.t('header.name')}
        </h1>
      </div>
      <p class="text-xl md:text-2xl text-white/70 mb-8">
        {i18n.t('header.title')}
      </p>
      <p class="text-lg text-white/60 max-w-2xl leading-relaxed mb-6">
        {i18n.t('header.description')}
      </p>

      <!-- Links -->
      <div class="flex items-center gap-4">
        <a
          href="https://github.com/ruanklein"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white/60 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Github class="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/ruanklein/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white/60 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin class="w-5 h-5" />
        </a>
        <a
          href="mailto:ruan.klein@gmail.com"
          class="text-white/60 hover:text-white transition-colors"
          aria-label="Email"
        >
          <Mail class="w-5 h-5" />
        </a>
      </div>
    </header>

    <!-- Projects -->
    <section>
      <h2 class="text-3xl md:text-4xl font-bold mb-8">
        {i18n.t('projects.title')}
      </h2>
      <div class="grid gap-4 md:gap-5">
        {#each projects as project}
          <article
            class="group rounded-2xl border border-white/10 bg-white/2 transition hover:border-white/15 hover:bg-white/3 {selectedProject ===
            project.nameKey
              ? 'border-white/20 bg-white/4'
              : ''}"
          >
            <div class="p-5 sm:p-6">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <h3 class="text-lg sm:text-xl font-semibold tracking-tight">
                      {i18n.t(project.nameKey)}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/30 p-1.5 text-white/60 hover:text-white hover:border-white/20 transition"
                      aria-label="View on GitHub"
                    >
                      <ExternalLink class="w-4 h-4" />
                    </a>
                  </div>

                  <p class="mt-1 text-sm text-white/60 leading-relaxed">
                    {i18n.t(project.descriptionKey)}
                  </p>
                </div>

                <button
                  on:click={() => toggleStory(project.nameKey)}
                  class="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs sm:text-sm text-white/70 hover:text-white hover:border-white/20 hover:bg-white/4 transition"
                >
                  {i18n.t('projects.readStory')}
                  <span
                    aria-hidden="true"
                    class="text-white/30 transition-transform group-hover:translate-x-0.5"
                    >→</span
                  >
                </button>
              </div>

              {#if project.subProjects}
                <div class="mt-4 pt-4 border-t border-white/10">
                  <div class="space-y-2">
                    {#each project.subProjects as subProject}
                      <a
                        href={subProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="group/sub flex items-start justify-between gap-4 rounded-xl border border-transparent px-3 py-2 hover:border-white/10 hover:bg-white/3 transition"
                      >
                        <div class="min-w-0">
                          <div
                            class="text-sm font-medium text-white/80 group-hover/sub:text-white transition"
                          >
                            {i18n.t(subProject.nameKey)}
                          </div>
                          <div class="text-xs text-white/45">
                            {i18n.t(subProject.descriptionKey)}
                          </div>
                        </div>
                        <ExternalLink
                          class="w-4 h-4 text-white/30 group-hover/sub:text-white/50 shrink-0 mt-0.5"
                        />
                      </a>
                    {/each}
                  </div>
                </div>
              {/if}
            </div>
          </article>
        {/each}
      </div>
    </section>
  </div>

  <!-- Footer -->
  <footer class="mt-24 pb-10">
    <div class="shell">
      <div class="border border-white/10 bg-white/2 rounded-2xl px-6 py-5">
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <p class="text-white/50 text-sm">
            © {new Date().getFullYear()}
            {i18n.t('header.name')}. {i18n.t('footer.rights')}
          </p>

          <div class="flex items-center gap-4">
            <a
              href="https://github.com/ruanklein"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/50 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github class="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ruanklein/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/50 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin class="w-4 h-4" />
            </a>
            <a
              href="mailto:ruan.klein@gmail.com"
              class="text-white/50 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail class="w-4 h-4" />
            </a>

            <span class="mx-1 h-4 w-px bg-white/10" aria-hidden="true"></span>

            <a
              href="#top"
              class="text-sm text-white/50 hover:text-white transition-colors"
              aria-label={i18n.t('footer.backToTop')}
            >
              {i18n.t('footer.backToTop')}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Modal -->
  {#if selectedProject}
    {@const project = projects.find((p) => p.nameKey === selectedProject)}
    {#if project}
      {#key localeKey}
        <ProjectModal
          isOpen={true}
          projectName={i18n.t(project.nameKey)}
          onClose={() => (selectedProject = null)}
        >
          <svelte:component this={project.storyComponent} />
        </ProjectModal>
      {/key}
    {/if}
  {/if}
</main>
