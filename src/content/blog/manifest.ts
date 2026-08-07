import { Terminal, Sparkles } from '@lucide/svelte';
import type { BlogManifest } from '../../lib/blog/types';
import InstallBash5MacosPost from './posts/install-bash-5-macos.svx';
import SudoTouchIdPost from './posts/sudo-touch-id.svx';
import OllamaTailscaleMacosPost from './posts/ollama-tailscale-macos.svx';
import GoroutineOhMyZshThemePost from './posts/goroutine-oh-my-zsh-theme.svx';

export const blogManifest: BlogManifest = {
	tags: ['setup', 'cli', 'ai'],
	posts: [
		{
			slug: 'sudo-touch-id',
			title: 'Enable Touch ID for sudo on macOS',
			date: '2026-04-21',
			preview: 'A guide on how to enable Touch ID for sudo commands on macOS.',
			tag: ['cli', 'setup'],
			icon: Terminal,
			component: SudoTouchIdPost
		},
		{
			slug: 'ollama-tailscale-macos',
			title: 'Ollama <-> Tailscale <-> macOS',
			date: '2026-04-28',
			preview: 'A guide on how to set up Ollama on Tailscale on macOS.',
			tag: ['setup', 'ai'],
			icon: Sparkles,
			component: OllamaTailscaleMacosPost
		},
		{
			slug: 'install-bash-5-macos',
			title: 'Install Bash 5.x on macOS',
			date: '2026-06-27',
			preview: 'A guide on how to install and verify Bash 5.x on macOS using Homebrew.',
			tag: ['cli', 'setup'],
			icon: Terminal,
			component: InstallBash5MacosPost
		},
		{
			slug: 'goroutine-oh-my-zsh-theme',
			title: 'Goroutine: a minimal Oh My Zsh theme',
			date: '2026-08-07',
			preview: 'A bright, minimal Oh My Zsh theme inspired by Go.',
			tag: ['cli'],
			icon: Terminal,
			component: GoroutineOhMyZshThemePost
		}
	]
};
