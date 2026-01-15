import { I18n } from 'i18n-js'

const i18n = new I18n({
  en: {
    header: {
      siteName: 'ruan.sh',
      name: 'Ruan Felisbino',
      title: 'Software Engineer',
      description:
        '10+ years building software across backend systems, CLI tooling, automation, infrastructure, and interfaces. I focus on clarity and predictability even in complex environments, avoiding unnecessary complication and giving users real control. I prefer local-first, portable, privacy-focused tools, guided by Unix principles and a pragmatic approach to solving real problems.',
    },
    nav: {
      language: 'Language',
    },
    projects: {
      title: 'Projects',
      readStory: 'Read the story',
      whyBuilt: 'Why I built this',
    },
    modal: {
      close: 'Close',
    },
    synapseq: {
      name: 'SynapSeq',
      description: 'My brainwave generator project',
      site: {
        name: 'SynapSeq Project',
        description: 'SynapSeq Project site',
      },
      hub: {
        name: 'SynapSeq Hub',
        description: 'A Repository for SynapSeq creations',
      },
    },
    toolbox: {
      name: 'Toolbox Shortcuts',
      description:
        'A utility for Immutable Linux desktop to maps any executables from a toolbox container',
    },
    stories: {
      synapseq: {
        title: 'Why I created SynapSeq',
        intro1:
          "Years ago, the few advanced tools in this space offered something that's almost impossible to find today: the ability to build complete, fully controlled audio sequences.",
        intro2:
          'You could define the carrier frequency, the beat, the amplitude, the noise type, the noise intensity, when each component started or ended, and how everything evolved along the timeline.',
        intro3:
          'These were tools built for real technical creation, not superficial sliders pretending to be customization.',
        intro4:
          'Over time, all of them disappeared. Some died with their developers, others were locked to outdated operating systems, and the rest simply stopped receiving updates.',
        intro5:
          "The market collapsed into shallow generators that can't produce a structured, timeline-driven session.",
        solutionTitle: 'The Solution',
        solution1:
          'SynapSeq was created to fill that gap. It brings back full control over how a sequence progresses, but with a clear, readable, human-friendly syntax.',
        solution2:
          'Instead of depending on clunky interfaces or proprietary formats, it uses plain text files, something every operating system can create, edit, and version.',
        solution3:
          'That puts control back in the hands of the creator and restores the level of precision those old tools once offered.',
        solution4:
          'The goal has always been the same: enabling anyone to craft intentional, structured, fully customized sequences without relying on abandoned software or oversimplified generators.',
      },
      toolbox: {
        title: 'What the toolbox-shortcuts utility does',
        intro1:
          'toolbox-shortcuts solves an annoying limitation in the Toolbox ecosystem: you install executables inside a container, but they end up trapped there, isolated from the host and from other containers. That breaks the workflow, forces you to "enter" the container just to run simple commands, and undermines the whole idea of organizing tools into separate environments.',
        intro2:
          'The utility creates actual bridges between containers and the host. It maps executables installed inside a toolbox to the outside world through smart symlinks, letting you call those binaries from anywhere: the host, another container, or any part of your setup.',
        intro3:
          'The result is predictable behavior: you keep tools organized wherever you want, but invoke them as if everything lived in the same environment.',
        conclusion:
          'In short, toolbox-shortcuts turns isolated containers into connected components of a single working environment, without hacks and without losing the clean separation that Toolbox provides.',
      },
    },
    footer: {
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },
  'pt-BR': {
    header: {
      siteName: 'ruan.sh',
      name: 'Ruan Felisbino',
      title: 'Analista Desenvolvedor',
      description:
        'Mais de 10 anos construindo software em várias camadas: backend, ferramentas CLI, automação, infraestrutura e interfaces. Trabalho buscando clareza e previsibilidade mesmo em sistemas complexos, evitando complicações desnecessárias e priorizando controle real do usuário. Gosto de criar ferramentas local-first, portáveis e focadas em privacidade, alinhadas à filosofia Unix e a um pragmatismo direto para resolver problemas reais.',
    },
    nav: {
      language: 'Idioma',
    },
    projects: {
      title: 'Projetos',
      readStory: 'Leia a história',
      whyBuilt: 'Por que construí isso',
    },
    modal: {
      close: 'Fechar',
    },
    synapseq: {
      name: 'SynapSeq',
      description: ' Meu gerador de sequências binaurais',
      site: {
        name: 'Projeto SynapSeq',
        description: 'Site do projeto SynapSeq',
      },
      hub: {
        name: 'SynapSeq Hub',
        description: 'Um repositório para criações SynapSeq',
      },
    },
    toolbox: {
      name: 'Toolbox Shortcuts',
      description:
        'Uma utilidade para desktop Linux imutável que mapeia executáveis de um container toolbox',
    },
    stories: {
      synapseq: {
        title: 'Por que criei o SynapSeq',
        intro1:
          'Anos atrás, as poucas ferramentas avançadas neste espaço ofereciam algo quase impossível de encontrar hoje: a capacidade de construir sequências de áudio completas e totalmente controladas.',
        intro2:
          'Você podia definir a frequência carrier, o "beat", a amplitude, o tipo de ruído, a intensidade do ruído, quando cada componente começava ou terminava, e como tudo evoluía ao longo da linha do tempo.',
        intro3:
          'Eram ferramentas construídas para criação técnica real, não controles superficiais fingindo ser customização.',
        intro4:
          'Com o tempo, todas elas desapareceram. Algumas morreram com seus desenvolvedores, outras ficaram presas a sistemas operacionais obsoletos, e o resto simplesmente parou de receber atualizações.',
        intro5:
          'O mercado colapsou em geradores rasos que não conseguem produzir uma sessão estruturada e orientada por linha do tempo.',
        solutionTitle: 'A Solução',
        solution1:
          'SynapSeq foi criado para preencher essa lacuna. Ele traz de volta o controle total sobre como uma sequência progride, mas com uma sintaxe clara, legível e amigável.',
        solution2:
          'Em vez de depender de interfaces desajeitadas ou formatos proprietários, usa arquivos de texto simples, algo que todo sistema operacional pode criar, editar e versionar.',
        solution3:
          'Isso coloca o controle de volta nas mãos do criador e restaura o nível de precisão que aquelas ferramentas antigas ofereciam.',
        solution4:
          'O objetivo sempre foi o mesmo: permitir que qualquer pessoa crie sequências intencionais, estruturadas e totalmente personalizadas sem depender de software abandonado ou geradores supersimplificados.',
      },
      toolbox: {
        title: 'O que é o toolbox-shortcuts',
        intro1:
          'Em sistemas operacionais imutáveis, como o Fedora Silverblue, é comum distribuir ferramentas em containers separados usando o Toolbox. Isso mantém o sistema limpo, mas cria um inconveniente: executáveis instalados dentro de um container ficam presos ali. Para rodar algo, você precisa entrar no container certo, quebrando o fluxo de trabalho e aumentando a fricção para tarefas simples.',
        intro2:
          'O toolbox-shortcuts nasceu para resolver exatamente isso. Ele cria symlinks inteligentes que expõem executáveis instalados dentro de um toolbox para o host e para outros containers, permitindo chamá-los de qualquer lugar como se fizessem parte do mesmo ambiente.',
        intro3:
          'O resultado é um comportamento previsível: você mantém as ferramentas organizadas onde quiser, mas as invoca como se tudo vivesse no mesmo ambiente.',
        conclusion:
          'Criei essa ferramenta para facilitar meu próprio uso diário no Silverblue. Hoje já não uso mais sistemas imutáveis, então não sei até que ponto ela continua relevante. Ainda assim, ela resolve um problema real desse modelo de workflow e pode ser útil para quem vive nesse ecossistema.',
      },
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      backToTop: 'Topo',
    },
  },
})

i18n.defaultLocale = 'en'
i18n.locale = 'en'

export default i18n
