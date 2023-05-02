<script>
  import Scroller from "./Scroller.svelte";
  import "$lib/styles/global.css";
  import { fly } from "svelte/transition";
  import { fade } from "svelte/transition";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  // import Jacket from "$lib/components/helpers/Jacket.svelte";

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
        {#if index < 2}
          <div
            class="text-intro"
            transition:fade={{
              delay: 250,
              duration: 300,
              easing: quintOut,
            }}
          >
            <h1>
              <span
                style="
                  text-decoration:{index == 1 ? 'line-through' : 'none'};
                  text-decoration-color:{index == 1
                  ? 'var(--pl-green'
                  : 'none'};
                  
                  "
              >
                Shrinking
              </span>
            </h1>
            <h1>
              <span
                style="text-decoration:{index == 1 ? 'line-through' : 'none'};
                text-decoration-color:{index == 1 ? 'var(--pl-green' : 'none'};

              ">Discoloring</span
              >
            </h1>
            <h1>
              <span
                style="text-decoration:{index == 1 ? 'line-through' : 'none'};
                text-decoration-color:{index == 1 ? 'var(--pl-green' : 'none'};
                ">Broken Materials</span
              >
            </h1>
            <p style="margin-top:-10vh;">
              <strong>Perfect Laundry Day:</strong>
              enhancing garments longevity with better laundry practices.
              <br />
              <span style="margin-top:20px;">Chay Thawaranont | 2023</span>
            </p>
          </div>
        {/if}
      </div>
    </div>

    <div slot="foreground">
      <section />
      <section>
        <div class="text-scroll">
          These are the common rookie’s mistakes if you don’t know how to take
          care of your clothes properly-learning how to wash & care your garment
          is crucial for a long-life and sustainable fashion consumption.
          <br />
          <br />
          This project aims to demystify garment washing & caring.
        </div>
      </section>
    </div>
  </Scroller>
</div>

<style>
  .text-intro {
    display: inline-block;
    row-gap: 1rem;
    /* height: 100vh;
    margin-bottom: 20vh; */
    padding-top: 10rem;
    padding-left: 3rem;
    /* margin-top: 40vh; */
  }

  h1 {
    font-family: var(--pl-serif);
    margin-top: -15vh;
    color: var(--pl-white);
    font-weight: 400;
    font-style: normal;
    font-size: 9rem;
    letter-spacing: -0.01em;
  }
  p {
    font-family: var(--pl-sans);
    text-align: left;
    color: var(--pl-white);
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
    letter-spacing: 0.01em;
  }

  .text-scroll {
    font-size: 16px;
    box-sizing: border-box;
    padding: 2em 2em;
    background-color: var(--pl-black);
    color: var(--pl-white);
    backdrop-filter: blur(10px);
    border-radius: 1em;
    border: 1px solid #333;
    pointer-events: auto;
    max-width: 40vw;
    margin: auto;
    font-family: var(--pl-sans);
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

  .scrollyGraphic {
    z-index: 1;
  }
</style>
