export type ProjectStat = {
	label: string;
	value: string;
};

export type Project = {
	slug: string;
	name: string;
	tagline: string;
	summary: string;
	overview: string;
	repositoryUrl: string;
	websiteUrl?: string;
	websiteLabel?: string;
	highlights: string[];
	stats: ProjectStat[];
	note?: string;
};

export const projects: Project[] = [
	{
		slug: 'synapseq',
		name: 'SynapSeq',
		tagline: 'Sound, defined as text.',
		summary:
			'Text-driven audio sequencer for creating evolving audio sequences with tones, rhythms, noise, music, ambience, effects, and transitions.',
		overview:
			'SynapSeq turns readable .spsq sequences into evolving audio on a precise timeline. Compose tones, binaural, monaural, and isochronic rhythms, noise, music, ambience, effects, and transitions, then render from the command line or build sequences programmatically with the Go API.',
		repositoryUrl: 'https://github.com/synapseq-foundation/synapseq',
		websiteUrl: 'https://synapseq.org',
		websiteLabel: 'Explore synapseq.org',
		highlights: [
			'Readable, version-controlled `.spsq` source files',
			'Tones, rhythms, noise, music, ambience, and effects',
			'Precise timelines with transitions and motion effects',
			'Command-line rendering and a programmatic Go API'
		],
		stats: [
			{ label: 'Format', value: '.spsq sequences' },
			{ label: 'License', value: 'GPL v3 or later' },
			{ label: 'Focus', value: 'Text-driven audio' }
		],
		note: 'Research on rhythmic auditory patterns remains heterogeneous. SynapSeq makes no clinical promises.'
	},
	{
		slug: 'fmgo',
		name: 'fmgo',
		tagline: 'Go, meet Apple’s Foundation Models CLI.',
		summary:
			'A Go interface for Apple’s Foundation Models CLI (`fm`) that exposes native responses, streaming, structured output, and more.',
		overview:
			'fmgo wraps Apple’s native `fm` executable so Go programs can work with Foundation Models through a focused, idiomatic API. It supports regular and streaming responses, structured output, image inputs, token counting, availability checks, conversation transcripts, and an HTTP server.',
		repositoryUrl: 'https://github.com/ruanklein/fmgo',
		highlights: [
			'Native response and streaming APIs for Go',
			'Structured output with typed response helpers',
			'Image inputs, resumable conversations, and transcripts',
			'Token counting, availability checks, and server support'
		],
		stats: [
			{ label: 'Language', value: 'Go' },
			{ label: 'Runtime', value: 'macOS 27 or later' },
			{ label: 'Integration', value: 'Native `fm` executable' }
		],
		note: 'fmgo is not an Apple project or official Apple SDK. It wraps the native executable and does not reimplement Foundation Models.'
	},
	{
		slug: 'fm-chat',
		name: 'FM Chat',
		tagline: 'A focused macOS chat for on-device AI.',
		summary:
			'A small, native-feeling macOS desktop chat that demonstrates the fmgo library and Apple’s on-device Foundation Models.',
		overview:
			'FM Chat is a Wails desktop application for exploring on-device Foundation Models through fmgo. It streams responses, keeps conversations and selected images local, and provides a familiar macOS-style interface without requiring an API key, account, or network service.',
		repositoryUrl: 'https://github.com/ruanklein/fm-chat',
		highlights: [
			'On-device Foundation Models through fmgo',
			'Streaming responses with active generation state',
			'Local conversation history and image storage',
			'Multimodal prompts with automatic light and dark appearance'
		],
		stats: [
			{ label: 'Platform', value: 'macOS 27 or later' },
			{ label: 'Architecture', value: 'Apple Silicon' },
			{ label: 'Framework', value: 'Wails' }
		],
		note: 'FM Chat requires Apple Intelligence, accepted Foundation Models CLI terms, and the native `/usr/bin/fm` command.'
	}
];

export function getProjectBySlug(slug: string): Project | null {
	return projects.find((project) => project.slug === slug) ?? null;
}
