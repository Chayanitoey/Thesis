<script>
  // @ts-nocheck

  import Scroller from "./Scroller.svelte";
  import { lazyLoad } from "$lib/components/helpers/lazyLoad.js";
  import "$lib/styles/global.css";
  import { fly } from "svelte/transition";
  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import Sweater from "$lib/images/Sweater_desktop.png";
  import laundrySymbols from "$lib/images/careIcons.png";
  import laundryicons from "$lib/images/laundryicons.svg";
  import Blazer from "$lib/images/Blazer.svg";
  import FabricBlazer from "$lib/images/FabricBlazer.svg";
  import FabricComponents from "$lib/images/FabricComponents.svg";

  import ZoomInLabel from "$lib/images/ZoomInLabel.svg";
  import Label from "$lib/images/Label.svg";

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
  //this is for zooming image
  let transform = 0;
  let scale = 1;
  let translate_x = 0;
  let translate_y = 0;
</script>

<div class="intro-text">
  <h3>
    <span class="span-line" style="margin-left:-80px;" />
    CHAPTER II
    <span class="span-line" style="margin-left:15px;" />
  </h3>
  <h1>How To Care Garments?</h1>
  <p>
    One of the most common ways that mishandling laundry can result in economic
    loss is through the premature deterioration of clothing. When garments are
    not washed or dried properly, the fabric can become worn, faded, or
    stretched, leading to a shorter lifespan for the garment. This means that
    individuals must replace their clothing more frequently, resulting in
    additional expenses for new clothing purchases.
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
        {#if index < 2}
          <p>
            <img
              src="https://raw.githubusercontent.com/Chayanitoey/laundry_icons/main/Blazer/Jacket.png"
              alt="Blazer"
              style="width:26vw;margin-left:-30vw;z-index:-100;position:absolute;"
            />
          </p>
          {#if index == 1}
            <img
              src="https://raw.githubusercontent.com/Chayanitoey/laundry_icons/main/Blazer/FabricComposition.png"
              alt="showing fabric compositions of this blazer"
              style="width:36vw;margin-left:-35.2vw;margin-top:-4.5vh;z-index:100;position:absolute;"
            />
          {/if}
        {:else if index >= 2 && index <= 3}
          <p>
            <img
              use:lazyLoad={ZoomInLabel}
              alt="highlighting the fabric composition"
              id="image-{index}"
              style="transform: 
              scale({(index / 2) * (index / 2) * (index / 2) * (index / 2)}
                ,{(index / 2) *
                (index / 2) *
                (index / 2) *
                (index / 2)}; width:36vw;z-index:100;position:absolute;
                 margin-left:{index == 3
                ? '-70vw'
                : '-35.2vw'};margin-top:{index == 3 ? '-70vh' : '-12vh'};"
            />
          </p>
        {:else if index == 4}
          <p>
            <img
              use:lazyLoad={Label}
              alt="showing fabric compositions of this blazer"
              style="width:30vw;margin-top:0vh;margin-right:7vw;"
            />
          </p>
          <!-- <div
            in:fade={{ delay: 450 }}
            style="position:absolute; background-color: rgba(255, 246, 155, 0.6); width:24vw; height:6vh;margin-top:-42vh; margin-left:7vw; "
          /> -->
          <!-- {:else if index == 5}
          <p>
            <img
              use:lazyLoad={laundryicons}
              alt="care symbols in the us"
              style="width:40vw;"
            />
          </p>
        {:else if index == 8}
          <p>Showing all care symbols from US, Europe, Japan</p> -->
          <!-- {:else if index == 9}
          <p>Showing all Iron Care Symbols in US</p>
        {:else if index == 10}
          <p>
            Showing all Other Special Care Symbols i.e. Dry Clean and Bleach
          </p> -->
        {/if}
      </div>
    </div>
    <div slot="foreground">
      <section>
        <div class="left-align-text" style="margin-top:20vh;">
          <h2>The Care Label</h2>
          <p class="p-left">
            When it comes to proper garment care, it all begins with correctly
            reading the care label. Fortunately, US brands and manufacturers are
            required to include a care tag on their items, making it easier for
            consumers to know how to care for their garments. For example,
            imagine you've just purchased a brand new blazer jacket...
            <br />
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            Clothes are more often made of several fabric compositions. This
            jacket has <span class="emphasis-green">68% wool</span> and
            <span class="emphasis-blue">32% Viscose</span>
            on its exterior with <span class="emphasis-red">100% culpro</span>
            in the interior.
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            When it comes to caring for a garment like a puffer jacket, it can
            be difficult to determine the best cleaning method.
            <br />
            <br />
            That's where the care label comes in - it's an essential tool for understanding
            how to properly care for your clothing. In fact, you'll almost always
            find the care label on the bottom left of a jacket,
            <span class="emphasis"
              >here is a *guide* available to help you locate it.</span
            >
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            In accordance with official environmental policy mandates, <span
              class="emphasis"
              >all US brands are now required to provide information about the
              fabric compositions of their products.</span
            >
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            If you’re unlucky, care symbols might the only guide you have for
            the laundry instructions. In this case, the icons from left to right
            mean
            <span
              style="background-color: rgba(255, 246, 155,1); color: var(--pl-black); padding-left: 3px; padding-right: 3px; font-weight:900;"
            >
              "30°C wash, dry clean preferred, no iron, no bleach, dry flat in
              shade, no bleach."</span
            >
          </p>
        </div>
      </section>
      <!-- <section>
        <div class="left-align-text">
          <p class="p-left">
            It's easy to feel confused by these symbols, especially given that
            there are a total of x icons in the US system alone, and y care
            icons that are commonly used by international brands in Japan or
            Europe.
          </p>
        </div>
      </section> -->
      <!-- <section>
        <div class="left-align-text">
          <p class="p-left">Here is the table for learning those labels</p>
        </div>
      </section> -->
      <!-- <section>
        <div class="left-align-text">
          <p class="p-left">
            Iron symbols are possibly the most intuitive ones as it is in a form
            of a literal iron, it has about x variations in the US care symbol
            system.
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            It's also worth knowing about a few other care symbols. For example,
            a triangle icon usually indicates that bleaching is possible, while
            a circular icon typically means that the item should be dry-cleaned.
            By familiarizing yourself with these symbols, you'll be able to
            confidently care for your clothes and avoid any accidental damage.
          </p>
        </div>
      </section> -->
    </div>
  </Scroller>
</div>

<style>
  :global(#image-3) {
    margin-right: 50vw;
    max-width: 30vw;
    margin-top: -80vh;
  }
  :global(#image-2) {
    margin-top: -7vh;
  }

  img {
    display: block;
    width: 100%;
    /* transition: transform 0.25s, visibility 0.25s ease-in; */
    opacity: 1;
    transition: all 0.25s, visibility 0.25s ease-in;
    /* margin-top: -5vh; */
  }
  /* margin-top: -10vh; */

  .span-line {
    position: absolute;
    width: 60px;
    margin-top: 13px;
    border: 1px solid #ffffff;
  }
  .intro-text {
    /* display: flex; */
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
  h2 {
    font-family: var(--pl-serif);
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 38px;
    letter-spacing: 0.01em;
    color: var(--pl-green);
    padding-left: 1.5em;
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
    letter-spacing: 2%;
    letter-spacing: 0.01em;
    padding-bottom: 10px;
    padding-right: 10%;
    padding-left: 10%;

    /* max-width: 40vw; */
  }
  /* .background-content p {
    color: var(--pl-black);
  } */
  .p-left {
    justify-content: left;
    align-items: left;
    text-align: left;
    backdrop-filter: blur(10px);
    color: var(--pl-white);
    letter-spacing: 2%;
    padding-bottom: 10px;
    padding: 2em 2em;
  }
  [slot="background"] {
    display: flex;
    justify-content: right;
    /* background-color: rgba(250, 250, 250, 1); */
    align-items: right;
    height: 100vh;
    font-size: 16px;
    padding-top: 10vh;
    /* this works only for 1920 screen width needs to do break views*/
    /* margin-top: -23vh; */
  }

  .background-content {
    /* background-color: hsla(210, 100%, 50%, 0.1); */
    /* border-top: 2px solid var(--blue3);
    border-bottom: 2px solid var(--blue3); */
    font-size: 1.4em;
    max-width: 100vw;
    max-height: 80vh;
    overflow: hidden;
    padding: 1em 4em;
    /* this works only for 1920 screen width needs to do break views*/
    /* margin-top: -23vh; */
  }
  .left-align-text {
    float: left;
    max-width: 30vw;
    margin-left: 5vw;
    margin-top: 5vw;
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

  [slot="foreground"] section {
    pointer-events: all;
    height: 80vh;
    /* padding: 1em; */
    /* margin: 0 0 2em 0; */
    font-family: var(--sans);
    /* margin: 0 auto 20vh; */
  }

  [slot="foreground"] section:last-of-type {
    height: 100vh;
  }
  .emphasis {
    background-color: var(--pl-white);
    color: var(--pl-black);
    font-weight: 700;
    padding: 0 2px;
  }
  .emphasis-red {
    background-color: var(--pl-red);
    color: var(--pl-white);
    font-weight: 700;
    padding: 0 2px;
  }
  .emphasis-green {
    background-color: var(--pl-green);
    color: var(--pl-black);
    font-weight: 700;
    padding: 0 2px;
  }
  .emphasis-blue {
    background-color: var(--pl-blue);
    color: var(--pl-white);
    font-weight: 700;
    padding: 0 2px;
  }
</style>
