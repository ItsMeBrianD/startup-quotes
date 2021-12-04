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
	import FaRegCopy from 'svelte-icons/fa/FaRegCopy.svelte'
	import { getContext, tick } from 'svelte';
	import type Danger from '$lib/Danger.svelte';
	import html2canvas from 'html2canvas';

	export let quote: string;
	let loading = new Promise((r) => setTimeout(r, 0));
	let timeout = false;
	const createDanger = getContext<(d: Danger) => void>('createDanger');
	const loadNewQuote = async function () {
		if (!timeout) {
			timeout = true;
			setTimeout(() => (timeout = false), 1000);
			//@ts-expect-error
			window.gtag('send', 'newQuote');
			quote = await fetch('/word').then((r) => r.text());
		} else {
			createDanger({
				timeout: 1000,
				message: 'Slow down, the next big idea takes some thought!'
			});
		}
	};

	function handleWindowKeyPress(e: KeyboardEvent) {
		if (e.key === ' ') {
			loadNewQuote();
		}
	}

	let container: HTMLElement, screenshotting = false;
	async function copyImage() {
		// const blob = await domtoimage.toBlob(container);
		screenshotting = true;
		await tick();
		const canvas = await html2canvas(container, {
			windowHeight: 500,
			windowWidth: 800
		});
		const blob = await new Promise((r) => canvas.toBlob(r));
		navigator.clipboard.write([
			new ClipboardItem({
				'image/png': blob
			})
		]);
		createDanger({
			timeout: 1000,
			message: 'Copied to clipboard!'
		});
		screenshotting = false;
	}
</script>

<svelte:head>
	<meta property="og:title" content="StartupQuotes.io" />
	<meta property="og:description" content="Working at a startup is like... {quote}" />
</svelte:head>
<svelte:window on:keypress={handleWindowKeyPress} />
<main bind:this={container} class:screenshotting>
	<div>
		<h1>Working at a startup is like</h1>
		{#await loading}
			<p />
		{:then}
			{#key quote}
				<span class="quote" in:fly={{ y: 50 }}>{quote}</span>
			{/key}
		{/await}
	</div>
	<div class="buttons">
		<button
			on:click={loadNewQuote}
			title="Pro Tip: Pushing buttons is very 2008; instead, just hit the space bar."
		>
			Working at a startup is also like...
		</button>
		<a
			href="https://twitter.com/intent/tweet?text={encodeURI(
				`Working at a startup is like ${quote}\n\nhttps://startupquotes.io`
			)}"
			target="_blank"
		>
			<button class="social">
				<FaTwitter />
				<span>Tweet</span>
			</button>
		</a>
		<button class="social" on:click={copyImage}>
			<FaRegCopy />
			<span>Copy</span>
		</button>
	</div>
	<footer>
		<p>Startup Quotes</p>
		<p class="font-bold">Made with 🫀 in Malibu</p>
	</footer>
	{#if screenshotting}
		<span class="branding"> startupquotes.io </span>
	{/if}
</main>

<style lang="postcss">
	main {
		@apply w-screen h-screen text-white relative text-center
        grid grid-rows-3 grid-cols-1 gap-4 p-8 bg-blue;

		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1266%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='url(%23SvgjsLinearGradient1267)'%3e%3c/rect%3e%3cpath d='M1920 0L1692.34 0L1920 3.69z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1692.34 0L1920 3.69L1920 64.85L998.7499999999999 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M998.75 0L1920 64.85L1920 288.31L851.56 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M851.56 0L1920 288.31L1920 811.0899999999999L635.3799999999999 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 1080L755.5 1080L0 668.97z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 668.97L755.5 1080L1240.4 1080L0 555.9000000000001z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 555.9000000000001L1240.4 1080L1499.99 1080L0 378.3600000000001z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 378.3600000000001L1499.99 1080L1707.19 1080L0 282.03000000000014z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1266'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='10.94%25' y1='-19.44%25' x2='89.06%25' y2='119.44%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1267'%3e%3cstop stop-color='rgba(16%2c 103%2c 209%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(67%2c 146%2c 241%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
		background-size: cover;
		background-repeat: no-repeat;
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
	div:not(.buttons) {
		@apply grid h-full grid-rows-2 row-span-2 gap-4;
	}
	div.buttons {
		@apply w-96 mx-auto h-20 items-center;
	}
	button {
		@apply border-2 border-white bg-blue p-2 text-lg cursor-pointer select-none block mb-2
        shadow-lg mx-auto;
	}
	button.social {
		@apply w-40 h-12 text-blue bg-white border-blue shadow-lg flex justify-between items-center pr-4;
	}
	button.social :global(> svg) {
		@apply w-12;
	}
	span.branding {
		@apply absolute -bottom-4;
	}

	@media screen and (max-width: 800px) {
		main.screenshotting {
			@apply grid-rows-2 relative;
			h1 {
				@apply text-5xl;
			}
			span.quote {
				@apply text-4xl;
			}
			div.buttons,
			footer {
				@apply hidden;
			}
			span.branding {
				@apply bottom-12 text-xl left-1/2 -translate-x-1/2 font-extralight italic visible;
				letter-spacing: 5px;
			}
		}
	}
</style>
