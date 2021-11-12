<script lang="ts" context="module">
	import wordGen from '$lib/word_generator';

	export const load = async () => {
		return {
			props: {
				quote: wordGen()
			}
		};
	};
</script>

<script lang="ts">
	import { fly } from 'svelte/transition';

	export let quote: string;
	let loading = new Promise((r) => setTimeout(r, 0));
	async function handleClick() {
		quote = await fetch('/word').then((r) => r.text());
	}
</script>

<svelte:head>
	<meta property="og:title" content="StartupQuotes.io" />
	<meta property="og:description" content={quote} />
</svelte:head>

<main>
	<h1>Working at a startup is like</h1>
	<div>
		{#await loading}
			<p />
		{:then}
			{#key quote}
				<span in:fly={{ y: 50 }}>{quote}</span>
			{/key}
		{/await}
		<button on:click={handleClick}> Working at a startup is also like... </button>
	</div>
	<footer>
		<p>Startup Quotes</p>
		<p class="font-bold">Made with 🫀 in Malibu</p>
	</footer>
</main>

<style lang="postcss">
	main {
		@apply w-screen h-screen text-white relative text-center
        grid grid-rows-2 grid-cols-1 gap-4 p-8;
		background-color: #006aff;
	}
	h1 {
		@apply text-3xl lg:text-7xl self-end;
		font-family: 'Montserrat', sans-serif;
	}
	span {
		@apply text-2xl lg:text-6xl font-bold block;
		letter-spacing: 0.2ch;
		font-family: 'Bebas Neue', cursive;
	}
	footer {
		@apply absolute bottom-10 left-1/2 -translate-x-1/2 text-sm;
		letter-spacing: 0.2ch;
		font-family: 'Montserrat', sans-serif;
	}
    button {
        @apply border-2 border-white p-2 text-lg mt-6 cursor-pointer select-none;
    }
</style>
