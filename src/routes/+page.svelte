<script>
  // import ProgressBar from "$lib/components/helpers/ProgressBar.svelte";
  // import Hamburger from "$lib/components/helpers/Hamburger.svelte";
  import Scrollyintro from "$lib/components/helpers/Scrolly/Scrollyintro.svelte";
  import ScrollyChapter1 from "$lib/components/helpers/Scrolly/ScrollyChapter1.svelte";
  import ScrollyChapter2_1 from "$lib/components/helpers/Scrolly/ScrollyChapter2_1.svelte";
  import LaundryIconsTable from "$lib/components/helpers/LaundryIconsTable.svelte";
  import ScrollyChapter2_2 from "$lib/components/helpers/Scrolly/ScrollyChapter2_2.svelte";
  import Chapter3 from "$lib/components/helpers/Chapter3.svelte";
  import Footnote from "$lib/components/helpers/Footnote.svelte";
  import Breakout from "$lib/components/helpers/Breakout.svelte";
  import ScrollyFacts from "$lib/components/helpers/Scrolly/ScrollyFacts.svelte";

  import { onMount } from "svelte";

  import "$lib/styles/font.css";
  import "$lib/styles/global.css";
  let innerWidth = 0;
  let innerHeight = 0;

  /**
   * @type {number}
   */
  let scrollIndex;
  /**
   * @type {{ style: { width: string; }; }}
   */
  let container;

  onMount(() => {
    function getScroll() {
      let windowScroll =
          document.body.scrollTop || document.documentElement.scrollTop,
        windowheight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight,
        scrolled_index = (windowScroll / windowheight) * 100;
      scrollIndex = scrolled_index;
      container.style.width = scrolled_index + "%";
    }
    window.onscroll = function () {
      getScroll();
    };
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="progress-container">
  <div id="progress-bar" bind:this={container} />
</div>

{#if innerWidth > 1300}
  <div class="indicator">
    <div class="indicator_chapter">
      {#if scrollIndex > 5 && scrollIndex < 32}
        <a style="opacity:1;" href="#ScrollyChapter1"
          >I. The Environmental Impact
        </a>
      {:else}
        <a style="opacity:0.5;" href="#ScrollyChapter1">
          I. The Environmental Impact
        </a>
      {/if}
    </div>

    <span style="color:white;opacity: 0.5;">|</span>
    <div class="indicator_chapter">
      {#if scrollIndex >= 32 && scrollIndex < 54}
        <a style="opacity:1;" href="#ScrollyChapter2">II. The Care Label </a>
      {:else}
        <a style="opacity:0.5;" href="#ScrollyChapter2">II. The Care Label </a>
      {/if}
    </div>
    <span style="color:white;opacity: 0.5;">|</span>

    <div class="indicator_chapter">
      {#if scrollIndex >= 54 && scrollIndex < 94}
        <a style="opacity:1;" href="#ScrollyChapter3">III. The Key Is Sorting</a
        >
      {:else}
        <a style="opacity:0.5;" href="#ScrollyChapter3"
          >III. The Key Is Sorting</a
        >
      {/if}
    </div>

    <span style="color:white;opacity: 0.5;">|</span>
    <div class="indicator_chapter">
      {#if scrollIndex >= 94}
        <a style="opacity:1;" href="#ScrollyChapter4">IV. Time for Laundry </a>
      {:else}
        <a style="opacity:0.5;" href="#ScrollyChapter4"
          >IV. Time for Laundry
        </a>
      {/if}
    </div>
  </div>

  <Scrollyintro />
  <div id="ScrollyChapter1">
    <ScrollyChapter1 />
  </div>
  <ScrollyFacts />
  <div id="ScrollyChapter2">
    <ScrollyChapter2_1 />
  </div>

  <div class="line-division" />
  <LaundryIconsTable />
  <div class="line-division-2" />
  <div id="ScrollyChapter3">
    <ScrollyChapter2_2 />
  </div>
  <div id="ScrollyChapter4">
    <Chapter3 />
  </div>
  <Footnote />
{:else}
  <Breakout />
{/if}

<!-- <a href="/app">Click here</a> -->

<style>
  .progress-container {
    position: fixed;
    background-color: #7a7a7a;
    height: 10px;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  #progress-bar {
    position: fixed;
    background-color: var(--pl-green);
    top: 0;
    left: 0;
    height: 10px;
    width: 0%;
    z-index: 1000;
  }

  .line-division {
    height: 0.25rem;
    background: var(--pl-white);
    margin-top: 10vh;
    margin-bottom: 2vh;
    margin-right: 10vw;
    margin-left: 10vw;
    width: 80vw;
  }
  .line-division-2 {
    margin-top: 10vh;
    height: 20vh;
    width: 56vw;
    padding: 2;
  }
  .indicator {
    position: fixed;
    width: 100vw;
    height: 5vh;
    background-color: var(--pl-black);
    z-index: 200;
    padding-top: 2vh;
  }
  .indicator_chapter {
    color: var(--pl-white);
    font-family: var(--pl-serif);
    display: inline;
    font-size: 1rem;
    padding: 1rem;
  }
  a {
    color: var(--pl-white);
    text-decoration: none;
  }
</style>
