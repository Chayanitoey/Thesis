<script>
  // @ts-nocheck

  import Scroller from "./Scroller.svelte";
  import "$lib/styles/global.css";
  import { fly } from "svelte/transition";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import Chart1 from "$lib/components/helpers/Chart1.svelte";

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

<div class="intro-text">
  <h3>
    <span class="span-line" style="margin-left:-80px;" />
    CHAPTER I
    <span class="span-line" style="margin-left:15px;" />
  </h3>
  <h1>The Environmental Impact</h1>
  <p>
    One of the most common ways that mishandling laundry can result in economic
    loss is through the premature deterioration of clothing. When garments are
    not washed or dried properly, the fabric can become worn, faded, or
    stretched, leading to a shorter lifespan for the garment. This means that
    individuals must replace their clothing more frequently, resulting in
    additional expenses for new clothing purchases.
  </p>
  <p style="margin-top:8vh;text-align:center;font-weight:600;">
    Here are some common reasons why garments have been discarded...
    <!-- <strong>{index + 1}/{count}</strong> -->
  </p>
</div>

<div class="scrollyGraphic" in:fly={{ y: 150, duration: 1000 }}>
  <Scroller
    {top}
    {threshold}
    {bottom}
    bind:count
    bind:index
    bind:offset
    bind:progress
  >
    <div slot="background">
      <div class="background-content">
        <!-- {#if index == 0} -->
        <div class="intro-text">
          <div class="transition" in:fade={{ duration: 1000 }}>
            <Chart1 bind:index />
          </div>

          <!-- <progress value={count ? (index + 1) / count : 0} /> -->
        </div>
        <!-- {:else if index == 1} -->
        <!-- <div class="intro-text">
            <h3>
              <span class="span-line" style="margin-left:-80px;" />
              CHAPTER I
              <span class="span-line" style="margin-left:15px;" />
            </h3>

            <h1>The Environmental Impact</h1>
            <div class="transition" in:fade={{ duration: 1000 }}>
              <p>
                Mishandling laundry can also contribute to waste generation.
                When clothing is not properly cared for, it may become damaged,
                stained, or ill-fitting, leading individuals to dispose of the
                garment and purchase a replacement. This not only creates
                additional waste but also contributes to the consumption of
                resources needed to produce new clothing.
              </p>
              <p style="margin-top:8vh;text-align:center;font-weight:600;">
                ... then they end up here
              </p>
              <Chart1 bind:index />
            </div>
          </div> -->
        <!-- {:else if index == 2} -->
        <!-- <div class="intro-text">
            <h3>
              <span class="span-line" style="margin-left:-80px;" />
              CHAPTER I
              <span class="span-line" style="margin-left:15px;" />
            </h3>
            <h1>The Environmental Impact</h1>
            <div class="transition" in:fade={{ duration: 1000 }}>
              <p>
                It is clear that mishandling laundry has a significant impact on
                sustainability and the environment. To reduce these negative
                effects, individuals must learn proper laundry techniques and
                take the time to care for their clothing properly. By doing so,
                we can reduce our carbon footprint, minimize pollution, and
                promote more sustainable practices in our daily lives.
              </p>
              <p style="margin-top:8vh;text-align:center;font-weight:600;">
                ...which is equal to X amount of CO2 in our atmosphere that
                leads to Global Warming.
              </p>
              <Chart1 bind:index />
            </div>
          </div>
         -->
        <!-- {/if} -->

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum atque
          maxime porro voluptatem impedit ex dicta modi iusto ipsam odit
          accusamus ad hic nemo expedita debitis, repellendus eius cum! Numquam!
        </div> -->
      </section>
      <section>
        <div class="step">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum atque
          maxime porro voluptatem impedit ex dicta modi iusto ipsam odit
          accusamus ad hic nemo expedita debitis, repellendus eius cum! Numquam!
        </div>
      </section>
      <section>
        <div class="step">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi fugiat
          possimus repudiandae blanditiis temporibus. Assumenda, itaque in! Illo
          est, dolorem repellendus rerum quisquam suscipit facilis vel ut
          tempore magnam? Dolores!
        </div>
      </section>
      <section>
        <div class="step">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          soluta, consequatur sunt facilis illo error suscipit rem rerum sint
          doloribus praesentium similique et? Fuga illum est ipsum accusantium
          necessitatibus alias?
        </div>
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
  /* .chapter {
    position: relative;
    width: 300px;
  } */
  .span-line {
    position: absolute;
    width: 60px;
    margin-top: 13px;
    border: 1px solid #ffffff;
  }
  .intro-text {
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 56vw;
    top: 0;
  }
  h1 {
    font-family: var(--pl-serif);
    text-align: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    top: 0;
    width: 100%;
    color: var(--pl-white);
    font-weight: 400;
    font-style: normal;
    font-size: 50px;
    letter-spacing: -0.01em;
  }
  h3 {
    font-family: var(--pl-sans);
    font-weight: 700;
    font-size: 1rem;
    line-height: 29px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: var(--pl-white);
  }
  p {
    font-family: var(--pl-sans);
    align-items: center;
    text-align: justify;
    color: var(--pl-white);
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.01em;
    padding-bottom: 10px;
    padding-right: 10%;
    padding-left: 10%;

    /* max-width: 40vw; */
  }
  [slot="background"] {
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

  [slot="foreground"] {
    pointer-events: none;
    max-width: 640px;
    margin: 0 auto;
    font-size: 16px;
  }

  .step {
    font-size: 16px;
    box-sizing: border-box;
    padding: 2em 2em;
    background-color: var(--pl-black);
    color: var(--pl-white);
    backdrop-filter: blur(10px);
    border-radius: 1em;
    border: 1px solid #333;
    pointer-events: auto;
    max-width: 50vw;
    margin: auto;
    font-family: var(--pl-sans);
  }

  [slot="foreground"] section {
    pointer-events: all;
    height: 120vh;
    /* padding: 1em; */
    /* margin: 0 0 2em 0; */
    font-family: var(--sans);
    /* margin: 0 auto 20vh; */
  }

  [slot="foreground"] section:last-of-type {
    height: 120vh;
  }

  /* progress {
    display: block;
    width: 100%;
    height: 1rem;
    position: relative;
  } */
  .scrollyGraphic {
    margin-top: -5%;
  }
</style>
