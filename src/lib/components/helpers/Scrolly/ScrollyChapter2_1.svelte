<script>
  // @ts-nocheck

  import Scroller from "./Scroller.svelte";
  import "$lib/styles/global.css";
  import { fly } from "svelte/transition";
  import { fade } from "svelte/transition";

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
        {#if index == 0}
          <p>mock 0</p>
        {:else if index == 1}
          <p>Highlighting Cotton</p>
        {:else if index == 2}
          <p>Highlighting Nylon</p>
        {:else if index == 3}
          <p>Highlighting Spandex</p>
        {:else if index == 4}
          <p>Care Label</p>
        {:else if index == 5}
          <p>Care Label : Fabric Composition</p>
        {:else if index == 6}
          <p>Care Label : Laundry Care Symbols</p>
        {:else if index == 7}
          <p>Wash Care Symbols</p>
        {:else if index == 8}
          <p>Dry Care Symbols</p>
        {:else if index == 9}
          <p>Iron Care Symbols</p>
        {:else if index == 10}
          <p>Other Special Care Symbols i.e. Dry Clean and Bleach</p>
        {/if}
      </div>
    </div>
    <div slot="foreground">
      <section>
        <div class="left-align-text">
          <h2>1. Learning The Care Label</h2>
          <p class="p-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
            tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo,
            mattis non bibendum sed, porttitor vitae neque. <br />
            <li>Showing the jacket total</li>
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
            tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo,
            mattis non bibendum sed, porttitor vitae neque.<br />
            <li>Highlighting just Cotton</li>
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
            tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo,
            mattis non bibendum sed, porttitor vitae neque. <br />
            <li>Highlighting just Nylon</li>
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
            tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo,
            mattis non bibendum sed, porttitor vitae neque.<br />
            <li>Highlighting just Spandex</li>
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
            tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo,
            mattis non bibendum sed, porttitor vitae neque.<br />
            <li>Zooming in the care label</li>
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
            tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo,
            mattis non bibendum sed, porttitor vitae neque.<br />
            <li>Highlighting the textile description</li>
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
            tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo,
            mattis non bibendum sed, porttitor vitae neque.<br />
            <li>Highlighting the Laundry icons</li>
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
            tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo,
            mattis non bibendum sed, porttitor vitae neque.<br />
            <li>Wash Icons Explaination</li>
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
            tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo,
            mattis non bibendum sed, porttitor vitae neque.<br />
            <li>Dry Icons Explaination</li>
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
            tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo,
            mattis non bibendum sed, porttitor vitae neque.<br />
            <li>Iron Icons Explaination</li>
          </p>
        </div>
      </section>
      <section>
        <div class="left-align-text">
          <p class="p-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
            tortor efficitur, porttitor nibh id, suscipit ex. Fusce massa leo,
            mattis non bibendum sed, porttitor vitae neque.<br />
            <li>Other Icons Explaination i.e. Dry clean and Bleach</li>
          </p>
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
    font-family: var(--pl-sans);
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 38px;
    letter-spacing: 0.01em;
    color: var(--pl-green);
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

    /* max-width: 40vw; */
  }
  .p-left {
    justify-content: left;
    align-items: left;
    text-align: justify;
    color: var(--pl-white);
    padding-bottom: 10px;
    padding-right: 0%;
    padding-left: 0%;
  }
  [slot="background"] {
    display: flex;
    justify-content: right;
    align-items: right;
    height: 100vh;
    font-size: 16px;
    padding-top: 10vh;
    /* this works only for 1920 screen width needs to do break views*/
    /* margin-top: -23vh; */
  }

  .background-content {
    /* background-color: hsla(210, 100%, 50%, 0.1); */
    border-top: 2px solid var(--blue3);
    border-bottom: 2px solid var(--blue3);
    font-size: 1.4em;
    overflow: hidden;
    padding: 1em 4em;
    /* this works only for 1920 screen width needs to do break views*/
    /* margin-top: -23vh; */
  }
  .left-align-text {
    float: left;
    max-width: 40vw;
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
</style>
