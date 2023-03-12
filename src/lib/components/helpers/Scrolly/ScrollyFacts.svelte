<script>
	import Scroller from './Scroller.svelte';
	import '$lib/styles/global.css';
	import { fly } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	/**
	 * @type {number}
	 */
	let count;
	/**
	 * @type {number}
	 */
	let index;
	/**
	 * @type {any}
	 */
	let offset;
	/**
	 * @type {any}
	 */
	let progress;
	let top = 0; // 0 - 1
	let threshold = 0.5; // 0 - 1
	let bottom = 1; // 0 - 1
    let arr = '7 - 8 times before we throw it out.'
</script>

<div class="scrollyGraphic">
	<Scroller {top} {threshold} {bottom} bind:count bind:index bind:offset bind:progress>
		<div slot="background">
			<div class="background-content">
				{#if index < 2}
				<div class = "intro-text"  in:fly="{{ y: 150, duration: 1000 }}">
					<h1>On average, we use each garment between 
                    <br> {arr}</h1>
                </div>

				{:else if index == 2}
				<div class = "intro-text" in:fly ="{{ y: 150, duration: 1000 }}">
					<h1>We can do better.</h1>
				</div>

				{/if}

				<!-- <p>current section: <strong>{index + 1}/{count}</strong></p>
				<progress value={count ? (index + 1) / count : 0} />

				<p>offset in current section</p>
				<progress value={offset || 0} />

				<p>total progress</p>
				<progress value={progress || 0} /> -->
			</div>
		</div>

		<div slot="foreground">
			<section>
				<!-- <div class="step">
					1
				</div> -->
			</section>
			<section>
				<!-- <div class="step">
					2
				</div> -->
			</section>
            <section>
				<!-- <div class="step">
					3
				</div> -->
			</section>
		</div>
	</Scroller>
</div>

<style>

	 .intro-text{
      display: flex;
      align-items: left;
      width: 50vw;
      height: auto;
      /* margin-top:40vh; */
   }
 
   h1{
      font-family: var(--pl-serif);
	  text-align: left;
      color: var(--pl-white);
      font-weight: 400;
      font-style: normal;
      font-size: 5vw;
      line-height: 1em;
      letter-spacing: -0.03em;
   }

	[slot='background'] {
		display: flex;
		justify-content: left;
		align-items: left;
		height: 100vh;
		/* font-size: 16px; */
        margin-top:20vh;
	}

	.background-content {
		
		/* border-top: 2px solid var(--blue3);
		border-bottom: 2px solid var(--blue3); */
		font-size: 1.4em;
		overflow: hidden;
		padding: 1em 4em;
	}

	[slot='foreground'] {
		pointer-events: none;
		max-width: 640px;
		margin: 0 auto;
		font-size: 16px;
	}


	[slot='foreground'] section {
		pointer-events: all;
		height: 80vh;
		padding: 1em;
		margin: 0 0 2em 0;
		font-family: var(--sans);
		margin: 0 auto 20vh;
	}

	[slot='foreground'] section:last-of-type {
		height: 100vh;
	}


	.scrollyGraphic{
		z-index: 1;
    }
</style>
