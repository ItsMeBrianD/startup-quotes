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

<main>
	<h1>{quote}</h1>
</main>

<style lang="postcss">
    main {
        @apply w-screen h-screen bg-purple-500 text-white flex justify-center items-center;
    }
	h1 {
        @apply text-4xl;
        font-family: 'Dancing Script', cursive;
	}
</style>
