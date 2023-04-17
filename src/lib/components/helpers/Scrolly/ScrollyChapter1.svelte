<script>
  // @ts-nocheck

  import Scroller from "./Scroller.svelte";
  import "$lib/styles/global.css";
  import { fly } from "svelte/transition";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import Chart1 from "$lib/components/helpers/Chart1.svelte";
  import AreaChart from "$lib/components/helpers/AreaChart.svelte";

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
</div>

<div class="chart-1">
  <div class="transition" in:fade={{ duration: 1000 }}>
    <Chart1 />
  </div>
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
        <div class="chart">
          <AreaChart bind:index />
        </div>
      </div>
    </div>

    <div slot="foreground">
      <section style="margin-top:-60vh;margin-bottom:30vh;">
        <div class="step-1">
          The data below are from 1960 to 2018, relating to the total number of
          tons of textiles generated, recycled, composted, combusted with energy
          recovery and landfilled.
          <br />
          <span style="paddng-top:2;font-size:0.6rem; color:var(--pl-grey);">
            Source: <a
              href="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/textiles-material-specific-data"
              >American Apparel and Footwear Association, International Trade
              Commission, the U.S. Department of Commerce's Office of Textiles
              and Apparel, and the Council for Textile Recycling.</a
            ></span
          >
        </div>
      </section>
      <section>
        <div class="step">
          One of the primary reasons why individuals discard their garments is
          due to damaged materials, according to the research by <a
            href="http://mistrafuturefashion.com">MMF</a
          >, mister future fashion research institute.
        </div>
      </section>
      <section>
        <div class="step">
          The research paper has also shown that individuals can prevent damage
          to their clothing's materials by following proper care methods and
          becoming knowledgeable about the garment care process.
        </div>
      </section>
      <section style="margin-top:60vh;">
        <div class="step">
          By taking the simple steps in caring, individuals can extend the life
          of their clothing and reduce the amount of textile waste that ends up
          in landfills and prolong garment life-cycle.
        </div>
      </section>
    </div>
  </Scroller>
</div>

<style>
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
  .chart {
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 56vw;
    /* margin-top: 30vh; */
  }
  .chart-1 {
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 65vw;
    height: 100vh;
    margin-top: 10vh;
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
  }

  .background-content {
    /* background-color: hsla(210, 100%, 50%, 0.1); */
    border-top: 2px solid var(--blue3);
    border-bottom: 2px solid var(--blue3);
    font-size: 1.4em;
    overflow: hidden;
    padding: 1em 1em;
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
    /* background-color: var(--pl-black); */
    color: var(--pl-white);
    backdrop-filter: blur(10px);
    border-radius: 1em;
    border: 1px solid #333;
    pointer-events: auto;
    max-width: 50vw;
    margin: auto;
    font-family: var(--pl-sans);
  }
  .step-1 {
    font-size: 16px;
    box-sizing: border-box;
    padding: 2em 2em;
    /* background-color: var(--pl-black); */
    color: var(--pl-white);
    backdrop-filter: blur(10px);
    /* border-radius: 1em;
    border: 1px solid #333; */
    pointer-events: auto;
    max-width: 50vw;
    /* margin-top: -10vh; */
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
  a {
    color: var(--pl-white);
  }
  a:hover {
    color: var(--pl-green);
  }
</style>
