import { Terminal } from '@lucide/svelte';
import type { BlogManifest } from '../../lib/blog/types';
import SudoTouchIdPost from './posts/sudo-touch-id.svx';

export const blogManifest: BlogManifest = {
	tags: ['setup', 'cli'],
	posts: [
		{
			slug: 'sudo-touch-id',
			title: 'Enable Touch ID for sudo on macOS',
			date: '2026-04-21',
			preview: 'A guide on how to enable Touch ID for sudo commands on macOS.',
			tag: ['cli', 'setup'],
			icon: Terminal,
			component: SudoTouchIdPost
		}
	]
};
