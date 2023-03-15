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
</script>

<div class="scrollyGraphic" in:fly ="{{ y: 150, duration: 1000 }}">
	 <Scroller {top} {threshold} {bottom} bind:count bind:index bind:offset bind:progress>
		<div slot="background">
			
			<div class="background-content" >
				{#if index == 0}
				<div class = "intro-text">
						<h1>Chapter I: The environmental impact</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo, mattis non bibendum sed, porttitor vitae neque.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo, mattis non bibendum sed, porttitor vitae neque.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo, mattis non bibendum sed, porttitor vitae neque.</p>

						<p>Common reasons why garments have been discard... 
						<strong>{index + 1}/{count}</strong>
					    </p>
					    <progress value={count ? (index + 1) / count : 0} />
				</div>

				{:else if index == 1}
				<div class = "intro-text" >
						<h1>Chapter I: The environmental impact</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo, mattis non bibendum sed, porttitor vitae neque.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo, mattis non bibendum sed, porttitor vitae neque.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo, mattis non bibendum sed, porttitor vitae neque.</p>
					    <p>... then they end up here 
						<strong>{index + 1}/{count}</strong>
					    </p>
					<progress value={count ? (index + 1) / count : 0} />
				</div>
				{:else if index == 2}
				<div class = "intro-text" >
						<h1>Chapter I: The environmental impact</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo, mattis non bibendum sed, porttitor vitae neque.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo, mattis non bibendum sed, porttitor vitae neque.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo, mattis non bibendum sed, porttitor vitae neque.</p>
					<p>...which is equal to X amount of CO2 in our atmosphere that leads to Global Warming.
						<strong>{index + 1}/{count}</strong>
					</p>
					<progress value={count ? (index + 1) / count : 0} />
				</div>

				{/if}

<!-- 
				<p>offset in current section</p>
				<progress value={offset || 0} />

				<p>total progress</p>
				<progress value={progress || 0} /> -->
			</div>
		</div>

		<div slot="foreground">
			<section>
				<!-- <div class="step">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum atque maxime porro
					voluptatem impedit ex dicta modi iusto ipsam odit accusamus ad hic nemo expedita debitis,
					repellendus eius cum! Numquam!
				</div> -->
			</section>
			<section>
				<!-- <div class="step">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi fugiat possimus
					repudiandae blanditiis temporibus. Assumenda, itaque in! Illo est, dolorem repellendus
					rerum quisquam suscipit facilis vel ut tempore magnam? Dolores!
				</div> -->
			</section>
			<section>
				<!-- <div class="step">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta, consequatur sunt
					facilis illo error suscipit rem rerum sint doloribus praesentium similique et? Fuga illum
					est ipsum accusantium necessitatibus alias?
				</div> -->
			</section>
		</div>
	</Scroller>
	
</div>

<style>
	
	/* .sticky-head{
		position: -webkit-sticky;
  		position: sticky;
		z-index: 9;
		padding-top: 5vh;
		top:10px;
		background-color: var(--pl-black);
	} */
	.intro-text{
      /* display: flex; */
      align-items: center;
      justify-content: center;
	  width: 56vw;
	  top:0;
   }
	h1{
    font-family: var(--pl-serif);
	text-align: center;
	justify-content: center;
	align-items: center;
	text-align: center;	
	position: relative;
	top:0;
	width:100%;
    color: var(--pl-white);
    font-weight: 400;
    font-style: normal;
    font-size: 50px;
    letter-spacing: -0.01em;
	}
	p{
	  font-family: var(--pl-sans);
	  justify-content: center;
	  align-items: center;
	  text-align: justify;
      color: var(--pl-white);
      font-weight: 400;
      font-style: normal;
	  font-size: 16px;
	  line-height: 20px;
      letter-spacing: 0.01em;
	  padding-bottom: 10px;
   }
	[slot='background'] {
		display: flex;
		justify-content: center;
		align-items: center; 
		height: 100vh;
		font-size: 16px;
		padding-top: 10vh;
		/* this works only for 1920 screen width needs to do break views*/
		margin-top: -8vh;

	}

	.background-content {
		/* background-color: hsla(210, 100%, 50%, 0.1); */
		border-top: 2px solid var(--blue3);
		border-bottom: 2px solid var(--blue3);
		font-size: 1.4em;
		overflow: hidden;
		padding: 1em 4em;
		/* this works only for 1920 screen width needs to do break views*/
		margin-top: -20vh;
	}


	/* [slot='foreground'] {
		pointer-events: none;
		max-width: 640px;
		margin: 0 auto;
		font-size: 16px;
	} */

	/* .step {
		font-size: 1em;
		box-sizing: border-box;
		padding: 1em 1.25em;
		background-color: hsla(0, 0%, 100%, 0.8);
		backdrop-filter: blur(10px);
		border-radius: 1em;
		border: 1px solid #333;
		pointer-events: auto;
	} */

	[slot='foreground'] section {
		pointer-events: all;
		height: 80vh;
		/* padding: 1em; */
		/* margin: 0 0 2em 0; */
		font-family: var(--sans);
		/* margin: 0 auto 20vh; */
	}

	[slot='foreground'] section:last-of-type {
		height: 100vh;
	}

	progress {
		display: block;
		width: 100%;
		height: 1rem;
		position: relative;
	}
</style>
