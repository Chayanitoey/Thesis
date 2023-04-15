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

  import ScrollyFacts from "$lib/components/helpers/Scrolly/ScrollyFacts.svelte";

  import "$lib/styles/font.css";
  import "$lib/styles/global.css";
</script>

<ProgressBar />
<Hamburger />
<Scrollyintro />
<ScrollyChapter1 />
<ScrollyFacts />
<ScrollyChapter2_1 />
<LaundryIconsTable />
<ScrollyChapter2_2 />
<Chapter3 />
<Footnote />

<!-- <a href="/app">Click here</a> -->

<!-- <div class="for-scroll" /> -->
<style>
  :global(body) {
    background-color: var(--pl-black);
    transition: background-color 0.3s;
    width: auto;
  }
  /* .for-scroll {
    height: 2000px;
  } */
</style>
