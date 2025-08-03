<script lang="ts">
  import { onMount } from 'svelte';
  import { 
    Github, 
    Linkedin, 
    Mail, 
  } from '@lucide/svelte';
  import Icon from '@iconify/svelte';

  let mounted = false;
  let aboutVisible = false;
  
  onMount(() => {
    mounted = true;
    
    // Stagger animations for cards
    setTimeout(() => aboutVisible = true, 300);
  });
</script>

<div class="min-h-screen bg-gradient-to-br from-surface-50 via-surface-100 to-surface-200 dark:from-surface-900 dark:via-surface-800 dark:to-surface-700">


  <!-- Main Container -->
  <div>
    
    <!-- Vintage Glass Container -->
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="vintage-glass-card max-w-4xl w-full p-8 rounded-3xl">
        
        <!-- Hero Section -->
        <section id="presentation" class="text-center animate-fade-in" class:opacity-0={!mounted}>
        <div class="flex flex-col items-center space-y-4">
          <div class="w-24 h-24 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white">
            <img src="logo.png" alt="Ruan Logo" class="object-contain" />
          </div>
          
          <div>
            <div class="mb-2">
              <p class="text-sm text-surface-500 dark:text-surface-200 mb-1">Hi! My name is</p>
              <h1 class="h1 text-primary-700 dark:text-primary-300 font-bold">RUAN</h1>
            </div>
            
            <div class="mb-2">
              <p class="text-sm text-surface-500 dark:text-surface-200 mb-1">and I am a</p>
              <h2 class="h2 text-surface-700 dark:text-surface-100 font-semibold">Software Engineer</h2>
            </div>
            
            <div class="mb-2">
              <p class="text-sm text-surface-500 dark:text-surface-200 mb-1">and I have</p>
              <span class="badge variant-filled-secondary text-lg font-bold px-4 py-2">+10 years experience</span>
            </div>
            
            <div class="mb-4">
              <p class="text-sm text-surface-500 dark:text-surface-200 text-center">and I work with the following technologies</p>
            </div>
            
            <!-- Technology Icons -->
            <div class="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto mb-4">
              
              <!-- Node.js -->
              <div class="group relative tooltip tech-float" data-tooltip="Node.js">
                <Icon 
                  icon="simple-icons:nodedotjs" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-success-500" 
                />
              </div>

              <!-- TypeScript -->
              <div class="group relative tooltip tech-float" data-tooltip="TypeScript">
                <Icon 
                  icon="simple-icons:typescript" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-primary-500" 
                />
              </div>

              <!-- Golang -->
              <div class="group relative tooltip tech-float" data-tooltip="Golang">
                <Icon 
                  icon="simple-icons:go" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-secondary-500" 
                />
              </div>

              <!-- PHP -->
              <div class="group relative tooltip tech-float" data-tooltip="PHP">
                <Icon 
                  icon="simple-icons:php" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-primary-500" 
                />
              </div>

              <!-- Python -->
              <div class="group relative tooltip tech-float" data-tooltip="Python">
                <Icon 
                  icon="simple-icons:python" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-primary-600" 
                />
              </div>

              <!-- Svelte -->
              <div class="group relative tooltip tech-float" data-tooltip="Svelte">
                <Icon 
                  icon="simple-icons:svelte" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-error-500" 
                />
              </div>

              <!-- React -->
              <div class="group relative tooltip tech-float" data-tooltip="React">
                <Icon 
                  icon="simple-icons:react" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-secondary-400" 
                />
              </div>

              <!-- Docker -->
              <div class="group relative tooltip tech-float" data-tooltip="Docker">
                <Icon 
                  icon="simple-icons:docker" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-primary-500" 
                />
              </div>

              <!-- Shell Script -->
              <div class="group relative tooltip tech-float" data-tooltip="Shell Script">
                <Icon 
                  icon="simple-icons:gnubash" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-success-600" 
                />
              </div>

              <!-- Linux -->
              <div class="group relative tooltip tech-float" data-tooltip="Linux">
                <Icon 
                  icon="simple-icons:linux" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-warning-600" 
                />
              </div>

              <!-- C Language -->
              <div class="group relative tooltip tech-float" data-tooltip="C">
                <Icon 
                  icon="simple-icons:c" 
                  class="w-8 h-8 transition-transform group-hover:scale-110 cursor-pointer text-surface-600" 
                />
              </div>

            </div>

            <!-- Philosophy -->
          <div class="mb-2">
            <p class="text-sm text-surface-500 dark:text-surface-200 mb-2">and my principle is</p>
            <h5 class="h5 text-orange-700 dark:text-orange-300 font-bold">Keep It Simple, Stupid!</h5>
          </div>

          <!-- Contact -->
          <div class="mb-6">
            <p class="text-sm text-surface-500 dark:text-surface-200 mb-2">and you can contact me by</p>
            <div class="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
              <a href="https://github.com/ruanklein" class="btn variant-ghost-primary flex items-center justify-center gap-2 py-3" target="_blank">
                <Github class="w-5 h-5" />
                GitHub
              </a>
              <a href="https://linkedin.com/in/ruanklein" class="btn variant-ghost-secondary flex items-center justify-center gap-2 py-3" target="_blank">
                <Linkedin class="w-5 h-5" />
                LinkedIn
              </a>
              <a href="mailto:ruan.klein@gmail.com" class="btn variant-ghost-tertiary flex items-center justify-center gap-2 py-3">
                <Mail class="w-5 h-5" />
                Email
              </a>
            </div>
          </div>

                    <!-- Footer -->
          <footer class="text-center py-12 text-surface-500 dark:text-surface-400">
            <div class="mb-4">
              <p class="text-sm text-surface-500 dark:text-surface-200 mb-1">Thanks for visiting my website</p>
              <p class="text-sm text-surface-500 dark:text-surface-200">
                Made with <Icon icon="simple-icons:svelte" class="inline w-4 h-4 text-error-500" /> and <Icon icon="simple-icons:tailwindcss" class="inline w-4 h-4 text-primary-500" />
              </p>
            </div>
          </footer>
          </div> <!-- Fecha div da linha 38 -->
        </div> <!-- Fecha div da linha 33 -->
        </section>
        
      </div>
    </div>

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

  /* Technology icons enhanced effects */
  .tech-float {
    animation: float 8s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }

  .tooltip {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .tooltip:hover {
    transform: translateY(-4px) scale(1.1);
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
  }

  /* Technology icon glow effects */
  .tooltip:hover :global(svg) {
    filter: drop-shadow(0 0 8px currentColor) brightness(1.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Staggered animation delays for floating effect */
  .tech-float:nth-child(1) { animation-delay: 0s; }
  .tech-float:nth-child(2) { animation-delay: 0.5s; }
  .tech-float:nth-child(3) { animation-delay: 1s; }
  .tech-float:nth-child(4) { animation-delay: 1.5s; }
  .tech-float:nth-child(5) { animation-delay: 2s; }
  .tech-float:nth-child(6) { animation-delay: 2.5s; }
  .tech-float:nth-child(7) { animation-delay: 3s; }
  .tech-float:nth-child(8) { animation-delay: 3.5s; }
  .tech-float:nth-child(9) { animation-delay: 4s; }
  .tech-float:nth-child(10) { animation-delay: 4.5s; }
  .tech-float:nth-child(11) { animation-delay: 5s; }

  /* Button hover enhancements */
  .btn {
    transition: all 0.3s ease;
  }

  .btn:hover {
    transform: translateY(-1px);
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

  /* Vintage Glass Card */
  .vintage-glass-card {
    background: linear-gradient(
      145deg,
      rgba(252, 248, 243, 0.25) 0%,
      rgba(240, 224, 207, 0.15) 50%,
      rgba(252, 248, 243, 0.25) 100%
    );
    backdrop-filter: blur(20px) saturate(1.2);
    border: 1px solid rgba(212, 165, 116, 0.3);
    box-shadow: 
      0 8px 32px rgba(212, 165, 116, 0.1),
      0 2px 8px rgba(184, 134, 89, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2),
      inset 0 -1px 0 rgba(212, 165, 116, 0.1);
    position: relative;
    overflow: hidden;
    transition: all 0.6s ease;
    animation: glassCardAppear 1.2s ease-out;
  }

  @keyframes glassCardAppear {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
      backdrop-filter: blur(20px) saturate(1.2);
    }
  }

  .vintage-glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(212, 165, 116, 0.6) 50%,
      transparent 100%
    );
  }

  .vintage-glass-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 30% 20%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
    pointer-events: none;
  }

  /* Dark mode vintage glass */
  :global(.dark) .vintage-glass-card {
    background: linear-gradient(
      145deg,
      rgba(68, 56, 53, 0.35) 0%,
      rgba(41, 37, 36, 0.25) 50%,
      rgba(68, 56, 53, 0.35) 100%
    );
    border: 1px solid rgba(139, 92, 53, 0.4);
    box-shadow: 
      0 8px 32px rgba(139, 92, 53, 0.15),
      0 2px 8px rgba(101, 67, 42, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1),
      inset 0 -1px 0 rgba(139, 92, 53, 0.15);
  }

  :global(.dark) .vintage-glass-card::before {
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(139, 92, 53, 0.8) 50%,
      transparent 100%
    );
  }
</style>
