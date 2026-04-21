import type { Action } from 'svelte/action';
import { formatLanguageLabel } from './utils';

function getCodeLanguage(codeBlock: HTMLElement): string {
	for (const className of codeBlock.classList) {
		if (className.startsWith('language-')) {
			return className.slice('language-'.length);
		}
	}

	return '';
}

function createMetaBar(
	language: string,
	codeText: string
): {
	element: HTMLDivElement;
	destroy: () => void;
} {
	const meta = document.createElement('div');
	meta.className = 'blog-code-meta';

	const label = document.createElement('span');
	label.className = 'blog-code-lang';
	label.textContent = formatLanguageLabel(language || 'shell');

	const button = document.createElement('button');
	button.type = 'button';
	button.className = 'blog-copy-button';
	button.textContent = 'Copy';

	let resetTimer: ReturnType<typeof setTimeout> | null = null;

	const resetButton = () => {
		button.textContent = 'Copy';
		resetTimer = null;
	};

	const handleClick = async () => {
		try {
			await navigator.clipboard.writeText(codeText);
			button.textContent = 'Copied';

			if (resetTimer) {
				clearTimeout(resetTimer);
			}

			resetTimer = setTimeout(resetButton, 1800);
		} catch {
			button.textContent = 'Unavailable';

			if (resetTimer) {
				clearTimeout(resetTimer);
			}

			resetTimer = setTimeout(resetButton, 1800);
		}
	};

	button.addEventListener('click', handleClick);
	meta.append(label, button);

	return {
		element: meta,
		destroy: () => {
			button.removeEventListener('click', handleClick);
			if (resetTimer) {
				clearTimeout(resetTimer);
			}
		}
	};
}

function enhancePreBlock(pre: HTMLPreElement): (() => void) | null {
	if (pre.dataset.enhanced === 'true') {
		return null;
	}

	const code = pre.querySelector('code');
	if (!(code instanceof HTMLElement)) {
		return null;
	}

	const wrapper = document.createElement('div');
	wrapper.className = 'blog-code-block';

	const language = getCodeLanguage(code);
	const meta = createMetaBar(language, code.textContent ?? '');
	const parent = pre.parentElement;

	if (!parent) {
		meta.destroy();
		return null;
	}

	pre.dataset.enhanced = 'true';

	parent.insertBefore(wrapper, pre);
	wrapper.append(meta.element, pre);

	return () => {
		meta.destroy();
		delete pre.dataset.enhanced;

		if (wrapper.parentElement) {
			wrapper.parentElement.insertBefore(pre, wrapper);
			wrapper.remove();
		}
	};
}

export const enhanceMarkdown: Action<HTMLElement> = (node) => {
	const cleanups = Array.from(node.querySelectorAll('pre')).flatMap((pre) => {
		const cleanup = enhancePreBlock(pre);
		return cleanup ? [cleanup] : [];
	});

	return {
		destroy() {
			for (const cleanup of cleanups.reverse()) {
				cleanup();
			}
		}
	};
};
