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
        <p>current section: <strong>{index + 1}/{count}</strong></p>
        <progress value={count ? (index + 1) / count : 0} />

        <p>offset in current section</p>
        <progress value={offset || 0} />

        <p>total progress</p>
        <progress value={progress || 0} />
      </div>
    </div>

    <div slot="foreground">
      <section>
        <!-- <div class="step"> -->
        <h2>Remembering the rule of thumb</h2>
        <p>
          Sort by <span style="background-color:var(--pl-blue);">color</span> or
          <span style="background-color:var(--pl-red);">fabric type</span>:
          Sorting the laundry has to happen, and it's a good place not to cut
          corners by performing a rush job. Sorting is the time when you can
          treat and prevent all kinds of problems, so make it a habit to
          practice your due diligence when sorting.**Credit to
          <a
            href="https://www.nytimes.com/guides/smarterliving/how-to-do-laundry"
            >NYT**</a
          >
        </p>
        <!-- </div> -->
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
      <section>
        <div class="step">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga
          ratione iure numquam nisi blanditiis optio, minus soluta quaerat esse
          aliquam exercitationem temporibus autem mollitia maxime facilis
          tempore officiis maiores.
        </div>
      </section>
    </div>
  </Scroller>
</div>

<style>
  h2 {
    font-family: var(--pl-serif);
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 38px;
    letter-spacing: 0.01em;
    color: var(--pl-green);
  }
  p {
    font-family: var(--pl-sans);
    /* justify-content: left;
    align-items: left;
    text-align: justify; */
    color: var(--pl-white);
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.01em;
    padding-bottom: 10px;
    padding-right: 10%;
    /* padding-left: 10%; */

    /* max-width: 40vw; */
  }

  [slot="background"] {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 16px;
  }

  .background-content {
    background-color: hsla(210, 100%, 50%, 0.1);
    border-top: 2px solid var(--pl-blue);
    border-bottom: 2px solid var(--pl-blue);
    font-size: 1.4em;
    overflow: hidden;
    padding: 1em 4em;
  }
  [slot="foreground"] {
    pointer-events: none;
    max-width: 56vw;
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
  }

  [slot="foreground"] section {
    pointer-events: all;
    height: 80vh;
    padding: 1em;
    margin: 0 0 2em 0;
    font-family: var(--pl-sans);
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
</style>
