<script lang="ts">
  import { onMount } from 'svelte';
  import { 
    Github, 
    Linkedin, 
    Mail, 
    Code, 
    Terminal, 
    X
  } from '@lucide/svelte';
  import Icon from '@iconify/svelte';

  let mounted = false;
  let aboutVisible = false;
  let contactVisible = false;
  let mobileMenuOpen = false;
  
  onMount(() => {
    mounted = true;
    
    // Stagger animations for cards
    setTimeout(() => aboutVisible = true, 300);
    setTimeout(() => contactVisible = true, 600);
  });

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-surface-50 via-surface-100 to-surface-200 dark:from-surface-900 dark:via-surface-800 dark:to-surface-700">
  
  <!-- Navigation Bar -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-surface-50/70 dark:bg-surface-900/60 backdrop-blur-xl border-b border-primary-200/20 dark:border-primary-700/20 shadow-lg/10">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full overflow-hidden bg-white shadow-md">
            <img src="logo.png" alt="Ruan Logo" class="w-full h-full object-contain" />
          </div>
          <span class="text-lg font-bold text-primary-700 dark:text-primary-300">ruan.sh</span>
        </div>
        
        <!-- Navigation Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#presentation" class="nav-link text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300">
            Presentation
          </a>
          <a href="#about" class="nav-link text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300">
            About Me
          </a>
          <a href="#contact" class="nav-link text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300">
            Contact
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          on:click={toggleMobileMenu}
          class="md:hidden p-2 rounded-lg text-surface-700 dark:text-surface-300 hover:bg-primary-100/50 dark:hover:bg-primary-900/20 transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          {#if mobileMenuOpen}
            <X class="w-5 h-5" />
          {:else}
            <Terminal class="w-5 h-5" />
          {/if}
        </button>
        
      </div>

      <!-- Mobile Menu -->
      {#if mobileMenuOpen}
        <div class="md:hidden border-t border-primary-200/20 dark:border-primary-700/20 mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#presentation" 
              on:click={closeMobileMenu}
              class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100/50 dark:hover:bg-primary-900/20 transition-colors duration-300"
            >
              Presentation
            </a>
            <a 
              href="#about" 
              on:click={closeMobileMenu}
              class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100/50 dark:hover:bg-primary-900/20 transition-colors duration-300"
            >
              About Me
            </a>
            <a 
              href="#contact" 
              on:click={closeMobileMenu}
              class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100/50 dark:hover:bg-primary-900/20 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      {/if}
    </div>
  </nav>

  <!-- Main Container -->
  <div class="container mx-auto px-4 py-8 max-w-4xl pt-24">
    
    <!-- Hero Section -->
    <section id="presentation" class="text-center mb-12 animate-fade-in" class:opacity-0={!mounted}>
      <div class="card hero-card p-8 variant-glass-primary border border-primary-200 dark:border-primary-700">
        <div class="flex flex-col items-center space-y-4">
          <div class="w-24 h-24 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white">
            <img src="my.jpeg" alt="Ruan Logo" class="object-contain" />
          </div>
          
          <div>
            <div class="mb-2">
              <p class="text-sm text-surface-500 dark:text-surface-400 mb-1">Hi! My name is</p>
              <h1 class="h1 text-primary-700 dark:text-primary-300 font-bold">RUAN</h1>
            </div>
            
            <div class="mb-2">
              <p class="text-sm text-surface-500 dark:text-surface-400 mb-1">and I am a</p>
              <h2 class="h2 text-surface-700 dark:text-surface-200 font-semibold">Software Engineer</h2>
            </div>
            
            <div class="mb-2">
              <p class="text-sm text-surface-500 dark:text-surface-400 mb-1">and I have</p>
              <span class="badge variant-filled-secondary text-lg font-bold px-4 py-2">+10 years experience</span>
            </div>
            
            <div class="mb-4">
              <p class="text-sm text-surface-500 dark:text-surface-400 text-center">and I work with the following technologies</p>
            </div>
            
            <!-- Technology Icons -->
            <div class="tech-icons flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
              
              <!-- Node.js -->
              <div class="group relative tooltip" data-tooltip="Node.js">
                <Icon 
                  icon="simple-icons:nodedotjs" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-success-500" 
                />
              </div>

              <!-- TypeScript -->
              <div class="group relative tooltip" data-tooltip="TypeScript">
                <Icon 
                  icon="simple-icons:typescript" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-primary-500" 
                />
              </div>

              <!-- Golang -->
              <div class="group relative tooltip" data-tooltip="Golang">
                <Icon 
                  icon="simple-icons:go" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-secondary-500" 
                />
              </div>

              <!-- PHP -->
              <div class="group relative tooltip" data-tooltip="PHP">
                <Icon 
                  icon="simple-icons:php" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-primary-500" 
                />
              </div>

              <!-- Python -->
              <div class="group relative tooltip" data-tooltip="Python">
                <Icon 
                  icon="simple-icons:python" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-primary-600" 
                />
              </div>

              <!-- Svelte -->
              <div class="group relative tooltip" data-tooltip="Svelte">
                <Icon 
                  icon="simple-icons:svelte" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-error-500" 
                />
              </div>

              <!-- React -->
              <div class="group relative tooltip" data-tooltip="React">
                <Icon 
                  icon="simple-icons:react" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-secondary-400" 
                />
              </div>

              <!-- Docker -->
              <div class="group relative tooltip" data-tooltip="Docker">
                <Icon 
                  icon="simple-icons:docker" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-primary-500" 
                />
              </div>

              <!-- Shell Script -->
              <div class="group relative tooltip" data-tooltip="Shell Script">
                <Icon 
                  icon="simple-icons:gnubash" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-success-600" 
                />
              </div>

              <!-- Linux -->
              <div class="group relative tooltip" data-tooltip="Linux">
                <Icon 
                  icon="simple-icons:linux" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-warning-600" 
                />
              </div>

              <!-- C Language -->
              <div class="group relative tooltip" data-tooltip="C">
                <Icon 
                  icon="simple-icons:c" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-surface-600" 
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="mb-12">
      <!-- About Card -->
      <div class="card p-8 variant-glass-surface max-w-4xl mx-auto" class:opacity-0={!aboutVisible} class:translate-y-full={!aboutVisible}>
        <header class="card-header">
          <h3 class="h2 flex items-center justify-center gap-3 mb-6">
            <Code class="w-7 h-7 text-primary-500" />
            About Me
          </h3>
        </header>
        <section class="p-4">
          <p class="text-surface-600 dark:text-surface-300 leading-relaxed mb-6 text-lg">
            I'm passionate about technology and the endless possibilities it offers. Here, I'll briefly share my personal experience 
            with programming and tech, this is not about my professional background in companies. For that, please check out my LinkedIn.
          </p>
          <p class="text-surface-600 dark:text-surface-300 leading-relaxed mb-6 text-lg">
            My journey began in 2008 with my first "Hello World" in C. At the time, I had absolutely no idea what a compiler was. 
            Around the same time, I started exploring GNU/Linux using the legendary Slackware distribution. What an experience!
          </p>
          <p class="text-surface-600 dark:text-surface-300 leading-relaxed mb-6 text-lg">
            From there, I became a self-taught developer, diving deep into Shell scripting, Perl, Python, and the entire Linux ecosystem. 
            I also enrolled in university and graduated in Systems Analysis and Development in 2015. It was during that time that I learned 
            more about how the web works, and where I built my first web projects using PHP and JavaScript.
          </p>
          <p class="text-surface-600 dark:text-surface-300 leading-relaxed mb-6 text-lg">
            Although I've always loved learning on my own, university gave me the push I needed to start getting into web development. 
            Before that, just to give some context, I was more into low-level and desktop programming, automation scripts and CLI utilities, mostly.
          </p>
          <p class="text-surface-600 dark:text-surface-300 leading-relaxed mb-6 text-lg">
            Over the years, I kept studying and exploring new languages and technologies on my own. I've worked with Node.js, TypeScript, 
            React.js, Electron, Redux, Next.js... the list goes on. These days, I've really been enjoying programming in Golang, 
            as it reminds me a lot of C, my first language, and the one that sparked my passion for coding.
          </p>
          <p class="text-surface-600 dark:text-surface-300 leading-relaxed mb-6 text-lg">
            Along the way, I've also contributed to a few open source projects. I was a contributor to SlackBuilds.org for a while, 
            maintaining WinUSB; a tool to create bootable Windows USB drives, as the main maintainer.
          </p>
          <p class="text-surface-600 dark:text-surface-300 leading-relaxed mb-6 text-lg">
            I also used to write articles, tips, and scripts for Viva o Linux, the largest GNU/Linux portal in Latin America.
          </p>
          <p class="text-surface-600 dark:text-surface-300 leading-relaxed mb-6 text-lg">
            As you can probably tell, I've had a strong connection with Linux and open source throughout my journey. Even though I no longer 
            use Linux as my main OS (I gave in to Apple, sorry!), I still consider it an excellent system for all kinds of users.
          </p>
          <p class="text-surface-600 dark:text-surface-300 leading-relaxed text-lg">
            Guided by the Unix philosophy and the KISS principle, I strive to build solutions with the lowest possible complexity, 
            clearly separating each component's responsibilities. This approach makes systems more accessible to both users and fellow developers. 
            After all, good code should tell a story, not be a puzzle.
          </p>
        </section>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <div class="card contact-card p-6 variant-glass-secondary" class:opacity-0={!contactVisible} class:translate-y-full={!contactVisible}>
        <header class="card-header text-center">
          <h3 class="h3">Let's talk?</h3>
          <p class="text-surface-600 dark:text-surface-300">
            Always open to discuss interesting projects and opportunities
          </p>
        </header>
        <section class="p-4">
          <div class="flex justify-center space-x-4">
            <a href="https://github.com/ruanklein" class="btn variant-ghost-primary flex items-center gap-2" target="_blank">
              <Github class="w-5 h-5" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/ruanklein" class="btn variant-ghost-secondary flex items-center gap-2" target="_blank">
              <Linkedin class="w-5 h-5" />
              LinkedIn
            </a>
            <a href="mailto:ruan.klein@gmail.com" class="btn variant-ghost-tertiary flex items-center gap-2">
              <Mail class="w-5 h-5" />
              Email
            </a>
          </div>
        </section>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center mt-12 py-6 text-surface-500 dark:text-surface-400">
      <p class="text-sm">
        Made with <Icon icon="simple-icons:svelte" class="inline w-4 h-4 text-error-500" /> and <Icon icon="simple-icons:tailwindcss" class="inline w-4 h-4 text-primary-500" />
      </p>
      <p class="text-xs mt-2">
        ruan.sh
      </p>
    </footer>
  </div>
</div>

<style>
  .animate-fade-in {
    animation: fadeIn 1s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .gradient-heading {
    background: linear-gradient(135deg, rgb(var(--color-primary-500)), rgb(var(--color-secondary-500)));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Card Animations */
  .card {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(0);
  }

  .card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  /* Stagger entrance animations */
  .card.opacity-0 {
    opacity: 0;
  }

  .card.translate-y-full {
    transform: translateY(40px);
  }

  /* Hero card special effects */
  .hero-card {
    background: linear-gradient(145deg, rgba(var(--color-primary-100), 0.3), rgba(var(--color-secondary-100), 0.2));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(var(--color-primary-200), 0.3);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hero-card:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 35px 60px -12px rgba(var(--color-primary-500), 0.4);
    border-color: rgba(var(--color-primary-300), 0.6);
  }

  /* Technology icons floating animation */
  .tech-icons {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  /* Development principles cards */
  .principle-card {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .principle-card:hover {
    transform: translateY(-15px) rotate(2deg);
  }

  .principle-icon {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .principle-card:hover .principle-icon {
    transform: scale(1.1) rotate(-2deg);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }

  /* Contact section pulse effect */
  .contact-card {
    position: relative;
    overflow: hidden;
  }

  .contact-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(var(--color-secondary-300), 0.4), transparent);
    transition: left 0.8s;
  }

  .contact-card:hover::before {
    left: 100%;
  }

  /* Button hover enhancements */
  .btn {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  /* Tooltip Styles */
  .tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgb(var(--color-surface-900));
    color: rgb(var(--color-surface-50));
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s;
    z-index: 10;
    pointer-events: none;
  }

  .tooltip::before {
    content: '';
    position: absolute;
    bottom: -29px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid rgb(var(--color-surface-900));
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s;
    z-index: 10;
  }

  .tooltip:hover::after,
  .tooltip:hover::before {
    opacity: 1;
    visibility: visible;
  }

  /* Dark mode tooltip adjustments */
  :global(.dark) .tooltip::after {
    background-color: rgb(var(--color-surface-100));
    color: rgb(var(--color-surface-900));
  }

  :global(.dark) .tooltip::before {
    border-bottom-color: rgb(var(--color-surface-100));
  }

  /* Smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }

  /* Navigation Bar Styles */
  nav {
    transition: all 0.3s ease;
    background: linear-gradient(135deg, 
      rgba(var(--color-surface-50), 0.7) 0%, 
      rgba(var(--color-surface-100), 0.6) 50%, 
      rgba(var(--color-surface-50), 0.7) 100%);
    box-shadow: 0 8px 32px rgba(var(--color-primary-500), 0.1);
  }

  :global(.dark) nav {
    background: linear-gradient(135deg, 
      rgba(var(--color-surface-900), 0.6) 0%, 
      rgba(var(--color-surface-800), 0.5) 50%, 
      rgba(var(--color-surface-900), 0.6) 100%);
    box-shadow: 0 8px 32px rgba(var(--color-primary-500), 0.2);
  }

  /* Liquid glass effect on scroll */
  nav::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      transparent 100%);
    pointer-events: none;
  }

  :global(.dark) nav::before {
    background: linear-gradient(180deg, 
      rgba(255, 255, 255, 0.05) 0%, 
      transparent 100%);
  }

  .nav-link {
    position: relative;
    transition: all 0.3s ease;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, rgb(var(--color-primary-500)), rgb(var(--color-secondary-500)));
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  /* Active nav link styles */
  .nav-link.active {
    color: rgb(var(--color-primary-600));
  }

  .nav-link.active::after {
    width: 100%;
  }

  /* Mobile Menu Styles */
  .mobile-menu {
    animation: slideDown 0.3s ease-out;
    background: linear-gradient(135deg, 
      rgba(var(--color-surface-50), 0.95) 0%, 
      rgba(var(--color-surface-100), 0.9) 100%);
    backdrop-filter: blur(20px);
  }

  :global(.dark) .mobile-menu {
    background: linear-gradient(135deg, 
      rgba(var(--color-surface-900), 0.95) 0%, 
      rgba(var(--color-surface-800), 0.9) 100%);
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .mobile-nav-link {
    transition: all 0.2s ease;
  }

  .mobile-nav-link:hover {
    transform: translateX(4px);
  }

  /* Section scroll padding for fixed navbar */
  section {
    scroll-margin-top: 80px;
    border-left: 4px solid transparent;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding-left: 16px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  section:hover {
    border-left-color: #d4a574;
    padding-left: 20px;
  }

  /* Prevent double borders on ALL internal elements */
  section * {
    border-left: none !important;
  }

  section .card,
  section .card-header,
  section header,
  section p,
  section blockquote {
    border-left: none !important;
  }

  /* Ensure section hover border takes precedence */
  section:hover * {
    border-left: none !important;
  }

  /* Enhanced focus states for accessibility */
  .card:focus-within {
    outline: 2px solid rgb(var(--color-primary-500));
    outline-offset: 4px;
  }
</style>
