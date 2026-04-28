import { Terminal, Sparkles } from '@lucide/svelte';
import type { BlogManifest } from '../../lib/blog/types';
import SudoTouchIdPost from './posts/sudo-touch-id.svx';
import OllamaTailscaleMacosPost from './posts/ollama-tailscale-macos.svx';

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
		}
	]
};
