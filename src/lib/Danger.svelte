<script lang="ts" context="module">
	export interface Danger {
		timeout: number;
		message: string;
	}
</script>

<script lang="ts">
	import { setContext } from 'svelte';

	import { writable } from 'svelte/store';

    import {fly, slide} from "svelte/transition";

	const danger = writable([]);

	const createDanger = (d: Danger) => {
		$danger = [...$danger, d];
		setTimeout(() => ($danger = $danger.filter((_d) => _d !== d)), d.timeout);
	};

	setContext('createDanger', createDanger);
</script>

<section>
	{#each $danger as d}
		<div in:slide out:fly={{y:-50}}>{d.message}</div>
	{/each}
</section>
<slot />

<style lang="postcss">
	div {
		@apply bg-gray-800 bg-opacity-50 text-white p-2 text-sm;
	}
    section {
        @apply absolute left-1/2 -translate-x-1/2 bottom-4 z-50 flex flex-col-reverse gap-2;
    }
</style>
