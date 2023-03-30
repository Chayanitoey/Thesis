<script>
  import Scroller from "./Scroller.svelte";
  import "$lib/styles/global.css";
  import { fly } from "svelte/transition";
  import { fade } from "svelte/transition";
  import Jacket from "$lib/components/helpers/Jacket.svelte";
  import { Canvas } from "@threlte/core";

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

<div class="scrollyGraphic">
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
        <Canvas>
          <Jacket />
        </Canvas>

        {#if index == 0}
          <div class="intro-text" in:fly={{ y: 150, duration: 1000 }}>
            <h1>Lost Shape</h1>
          </div>
        {:else if index == 1}
          <div class="intro-text" in:fly={{ y: 150, duration: 1000 }}>
            <h1>Discolored</h1>
          </div>
        {:else if index == 2}
          <div class="intro-text" in:fly={{ y: 150, duration: 1000 }}>
            <h1>Broken</h1>
          </div>
        {:else if index == 3}
          <div class="intro-text" transition:fade>
            <h1 style="text-decoration: line-through;">
              Lost Shape, Discolored, Broken
            </h1>
          </div>
          <div class="intro-text" in:fly={{ y: 200, duration: 3000 }}>
            <p>
              These are the common rookie’s mistakes if you don’t know how to
              take care of your clothes properly-learning how to wash & care
              your garment is crucial for a long-life and sustainable fashion
              consumption. This project aims to demystify garment washing &
              caring.
            </p>
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
      <section>
        <!-- <div class="step">
					4
				</div> -->
      </section>
    </div>
  </Scroller>
</div>

<style>
  .intro-text {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 56vw;
    /* margin-top:40vh; */
  }

  h1 {
    font-family: var(--pl-serif);
    justify-content: center;
    text-align: center;
    color: var(--pl-white);
    font-weight: 400;
    font-style: normal;
    font-size: 50px;
    letter-spacing: -0.01em;
  }
  p {
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
    padding-right: 10%;
    padding-left: 10%;
  }

  [slot="background"] {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 16px;
  }

  .background-content {
    /* border-top: 2px solid var(--blue3);
		border-bottom: 2px solid var(--blue3); */
    font-size: 1.4em;
    overflow: hidden;
    padding: 1em 4em;
  }

  [slot="background"] p {
    margin: 0;
    font-size: 0.8em;
    color: white;
  }

  [slot="foreground"] {
    pointer-events: none;
    max-width: 640px;
    margin: 0 auto;
    font-size: 16px;
  }

  .step {
    font-size: 1em;
    box-sizing: border-box;
    padding: 1em 1.25em;
    background-color: hsla(0, 0%, 100%, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 1em;
    border: 1px solid #333;
    pointer-events: auto;
  }

  [slot="foreground"] section {
    pointer-events: all;
    height: 80vh;
    padding: 1em;
    margin: 0 0 2em 0;
    font-family: var(--sans);
    margin: 0 auto 20vh;
  }

  [slot="foreground"] section:last-of-type {
    height: 100vh;
  }

  progress {
    display: block;
    width: 100%;
    height: 1rem;
    position: relative;
  }
  .scrollyGraphic {
    z-index: 1;
  }
</style>
