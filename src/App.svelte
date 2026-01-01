<script lang="ts">
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

  $: {
    i18n.locale = currentLocale
    localeKey++ // Increment to force component re-render
  }

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

<main class="min-h-screen bg-black text-white">
  <!-- Navbar -->
  <nav
    class="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-white/10 z-40"
  >
    <div class="container mx-auto px-6 py-4 max-w-4xl">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Ruan Felisbino"
            class="w-10 h-10 rounded-full shadow-lg shadow-white/20"
          />
          <span class="text-lg font-semibold">{i18n.t('header.siteName')}</span>
        </div>
        <LanguageSelector {currentLocale} onLocaleChange={handleLocaleChange} />
      </div>
    </div>
  </nav>

  <div class="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
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
      <div class="space-y-6">
        {#each projects as project}
          <div class="border-l-2 border-white/10 pl-6 space-y-3">
            <div class="flex items-start justify-between gap-4 py-2">
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                  <h3 class="text-xl font-semibold">
                    {i18n.t(project.nameKey)}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white/40 hover:text-white/60 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <ExternalLink class="w-4 h-4" />
                  </a>
                </div>
                <p class="text-sm text-white/60 mb-3">
                  {i18n.t(project.descriptionKey)}
                </p>

                <button
                  on:click={() => toggleStory(project.nameKey)}
                  class="text-sm text-white/50 hover:text-white/70 transition-colors underline decoration-white/20 hover:decoration-white/40"
                >
                  {i18n.t('projects.readStory')}
                </button>
              </div>
            </div>

            {#if project.subProjects}
              <div class="pl-6 space-y-2 pb-2">
                {#each project.subProjects as subProject}
                  <a
                    href={subProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group/sub flex items-start gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <span class="text-white/30 mt-1">→</span>
                    <div class="flex-1">
                      <span class="text-sm font-medium">
                        {i18n.t(subProject.nameKey)}
                      </span>
                      <span class="text-white/40 mx-2">·</span>
                      <span class="text-sm text-white/50">
                        {i18n.t(subProject.descriptionKey)}
                      </span>
                    </div>
                    <ExternalLink
                      class="w-3 h-3 text-white/30 group-hover/sub:text-white/50 shrink-0 mt-1"
                    />
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-32 pt-8 border-t border-white/10">
      <p class="text-white/40 text-sm">
        © {new Date().getFullYear()}
        {i18n.t('header.name')}. {i18n.t('footer.rights')}
      </p>
    </footer>
  </div>

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
