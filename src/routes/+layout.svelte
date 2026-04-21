<script lang="ts">
	import './layout.css';
	import Navbar from '../components/layout/Navbar.svelte';
	import Footer from '../components/layout/Footer.svelte';

	let { children } = $props();
</script>

<main class="flex min-h-screen flex-col bg-black text-white">
	<Navbar />

	<div class="container mx-auto w-full max-w-4xl flex-1 px-6 py-16 md:py-24">
		{@render children()}
	</div>

	<Footer />
</main>
