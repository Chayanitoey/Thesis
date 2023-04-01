<script>
  // @ts-nocheck

  import Scroller from "./Scroller.svelte";
  import "$lib/styles/global.css";
  import FabricGroup from "$lib/components/helpers/FabricGroup.svelte";
  import SortLaundryArcDiagram from "$lib/components/helpers/SortLaundryArcDiagram.svelte";

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
    CHAPTER III
    <span class="span-line" style="margin-left:15px;" />
  </h3>
  <h1>The Key Is In Sorting</h1>
</div>

<!-- <section> -->
<div class="sort_color">
  <h2>Sorting by Color</h2>

  <p>
    Sort by <span style="background-color:var(--pl-blue);">color</span> :
    Sorting the laundry has to happen, and it's a good place not to cut corners
    by performing a rush job. Sorting is the time when you can treat and prevent
    all kinds of problems, so make it a habit to practice your due diligence
    when sorting.**Credit to
    <a href="https://www.nytimes.com/guides/smarterliving/how-to-do-laundry"
      >NYT**</a
    >
    <br />
    <br />
    <br />
    <b>Sort by color:</b>
  </p>
  <FabricGroup />
</div>

<div class="sort_fabric_type">
  <h2>Sorting by Fabric Type</h2>

  <p>
    Sort by
    <span style="background-color:var(--pl-blue);">fabric type</span>: Sorting
    the laundry has to happen, and it's a good place not to cut corners by
    performing a rush job. Sorting is the time when you can treat and prevent
    all kinds of problems, so make it a habit to practice your due diligence
    when sorting.**Credit to
    <a href="https://www.nytimes.com/guides/smarterliving/how-to-do-laundry"
      >NYT**</a
    >
    <br />
    <br />
    <br />
    <b>Sort by fabric:</b>
  </p>
</div>
<!-- </section> -->

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
      <SortLaundryArcDiagram bind:index />
      <!-- <div class="background-content">
        <h3>Sort by fabric type:</h3>
        <p>current section: <strong>{index + 1}/{count}</strong></p>
        <progress value={count ? (index + 1) / count : 0} />

        <p>offset in current section</p>
        <progress value={offset || 0} />

        <p>total progress</p>
        <progress value={progress || 0} />
      </div> -->
    </div>

    <div slot="foreground">
      <section>
        <!-- <div class="step">
          <div class="step">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            fugiat possimus repudiandae blanditiis temporibus. Assumenda, itaque
            in! Illo est, dolorem repellendus rerum quisquam suscipit facilis
            vel ut tempore magnam? Dolores!
          </div>
        </div> -->
      </section>
      <section>
        <div class="step">Cotton</div>
      </section>
      <section>
        <div class="step">Linen</div>
      </section>
      <section>
        <div class="step">Wools</div>
      </section>
      <section>
        <div class="step">Silk</div>
      </section>
      <section>
        <div class="step">Rayon</div>
      </section>
      <section>
        <div class="step">Nylon</div>
      </section>
      <section>
        <div class="step">Polyester</div>
      </section>
      <section>
        <div class="step">Spandex</div>
      </section>
      <section>
        <div class="step">Blends</div>
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

  .sort_color {
    height: 80vh;
    max-width: 56vw;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  .sort_fabric_type {
    height: 5vh;
    max-width: 56vw;
    margin: auto;
    margin-top: 10%;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-family: var(--pl-serif);
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 38px;
    letter-spacing: 0.01em;
    color: var(--pl-green);
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
