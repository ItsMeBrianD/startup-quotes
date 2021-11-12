<script lang="ts" context="module">
	const keywords = {
		verbs: ['releasing', 'fixing'],
		adjectives: ['broken', 'good'],
		nouns: ['code', 'copy']
	};

	export const load = async () => {
		const adj = keywords.adjectives[Math.floor(keywords.adjectives.length * Math.random())];
		const verb = keywords.verbs[Math.floor(keywords.verbs.length * Math.random())];
		const noun = keywords.nouns[Math.floor(keywords.nouns.length * Math.random())];

		return {
			props: {
				quote: `${verb} ${adj} ${noun}`
			}
		};
	};
</script>

<script lang="ts">
	import { fly } from 'svelte/transition';

	export let quote: string;
</script>

<svelte:head>
	<meta property="og:title" content="StartupQuotes.io" />
	<meta property="og:description" content={quote} />
</svelte:head>

<main>
		<h1>Working at a startup is like</h1>
		{#await new Promise((r) => setTimeout(r, 0))}
			<p />
		{:then}
			<span transition:fly={{y:50}}>{quote}</span>
		{/await}
	<footer>Startup Quotes</footer>
</main>

<style lang="postcss">
	main {
		@apply w-screen h-screen bg-purple-900 text-white relative text-center
        grid grid-rows-2 grid-cols-1;
	}
	h1 {
		@apply text-4xl self-end;
		font-family: monospace;
	}
	span {
		@apply text-4xl font-bold block;
		font-family: 'Dancing Script', cursive;
	}
	footer {
		@apply absolute bottom-10 left-1/2 -translate-x-1/2 text-sm;
		letter-spacing: 0.2ch;
		font-family: monospace;
	}
</style>
