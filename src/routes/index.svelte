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
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';

	export let quote: string;
	let loading = new Promise((r) => setTimeout(r, 0));
	async function loadNewQuote() {
		quote = await fetch('/word').then((r) => r.text());
	}
</script>

<svelte:head>
	<meta property="og:title" content="StartupQuotes.io" />
	<meta property="og:description" content="Working at a startup is also like... {quote}" />
</svelte:head>

<main>
	<h1>Working at a startup is like</h1>
	{#await loading}
		<p />
	{:then}
		{#key quote}
			<span class="quote" in:fly={{ y: 50 }}>{quote}</span>
		{/key}
	{/await}
	<div>
		<button on:click={loadNewQuote}> Working at a startup is also like... </button>
		<a href="https://twitter.com/intent/tweet?text={encodeURI(`Working at a startup is like ${quote}\n\nhttps://startupquotes.io`)}" target="_blank">
			<button class="social">
				<FaTwitter />
                <span>Tweet</span>
			</button>
		</a>
	</div>
	<footer>
		<p>Startup Quotes</p>
		<p class="font-bold">Made with 🫀 in Malibu</p>
	</footer>
</main>

<style lang="postcss">
	main {
		@apply w-screen h-screen text-white relative text-center
        grid grid-rows-3 grid-cols-1 gap-4 p-8 bg-blue;
	}
	h1 {
		@apply text-4xl lg:text-7xl self-end;
		font-family: 'Montserrat', sans-serif;
	}
	span.quote {
		@apply text-3xl lg:text-6xl font-bold block;
		letter-spacing: 0.2ch;
		font-family: 'Bebas Neue', cursive;
	}
	footer {
		@apply absolute bottom-10 left-1/2 -translate-x-1/2 text-sm;
		letter-spacing: 0.2ch;
		font-family: 'Montserrat', sans-serif;
	}
	div {
		@apply w-96 mx-auto h-20 items-center;
	}
	button {
		@apply border-2 border-white bg-blue p-2 text-lg cursor-pointer select-none block mb-2
        shadow-lg mx-auto;
	}
	button.social {
		@apply w-32 h-12 text-blue bg-white border-blue shadow-lg flex justify-between items-center pr-4;
	}
    button.social :global(> svg) {
        @apply w-12;
    }
</style>
