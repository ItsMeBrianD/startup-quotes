<script lang="ts" context="module">
	export const load = async () => {
		return {
			props: {
				quote: 'This is my quote'
			}
		};
	};
</script>

<script lang="ts">
	export let quote: string;
</script>

<svelte:head>
    <meta property="og:title" content="StartupQuotes.io" />
    <meta property="og:description" content={quote} />
</svelte:head>

<main>
	<h1>{quote}</h1>
    <footer>
        Startup Quotes
    </footer>
</main>

<style lang="postcss">
    main {
        @apply w-screen h-screen bg-purple-900 text-white flex justify-center items-center relative;
    }
	h1 {
        @apply text-4xl;
        font-family: 'Dancing Script', cursive;
	}
    footer {
        @apply absolute bottom-10 left-1/2 -translate-x-1/2 text-sm;
        letter-spacing: 0.2ch;
        font-family: monospace;
    }
</style>
