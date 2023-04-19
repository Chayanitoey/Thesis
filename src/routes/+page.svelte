<script>
  import ProgressBar from "$lib/components/helpers/ProgressBar.svelte";
  import Hamburger from "$lib/components/helpers/Hamburger.svelte";
  import Scrollyintro from "$lib/components/helpers/Scrolly/Scrollyintro.svelte";
  import ScrollyChapter1 from "$lib/components/helpers/Scrolly/ScrollyChapter1.svelte";
  import ScrollyChapter2_1 from "$lib/components/helpers/Scrolly/ScrollyChapter2_1.svelte";
  import LaundryIconsTable from "$lib/components/helpers/LaundryIconsTable.svelte";
  import ScrollyChapter2_2 from "$lib/components/helpers/Scrolly/ScrollyChapter2_2.svelte";
  import Chapter3 from "$lib/components/helpers/Chapter3.svelte";
  import Footnote from "$lib/components/helpers/Footnote.svelte";
  import Breakout from "$lib/components/helpers/Breakout.svelte";

  import ScrollyFacts from "$lib/components/helpers/Scrolly/ScrollyFacts.svelte";

  import "$lib/styles/font.css";
  import "$lib/styles/global.css";
  let innerWidth = 1400;
  let innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<ProgressBar />
<!-- <Hamburger /> -->
{#if innerWidth > 1300}
  <Scrollyintro />
  <ScrollyChapter1 />
  <ScrollyFacts />
  <ScrollyChapter2_1 />
  <div class="line-division" />
  <LaundryIconsTable />
  <div class="line-division-2" />
  <ScrollyChapter2_2 />
  <Chapter3 />
  <Footnote />
{:else}
  <Breakout />
{/if}

<!-- <a href="/app">Click here</a> -->

<!-- <div class="for-scroll" /> -->
<style>
  /* .for-scroll {
    height: 2000px;
  } */
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
</style>
