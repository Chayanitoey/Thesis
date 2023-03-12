<script>
   import ProgressBar from '$lib/components/helpers/ProgressBar.svelte';
   import Hamburger from '$lib/components/helpers/Hamburger.svelte';
   import Scrollyintro from '$lib/components/helpers/Scrolly/Scrollyintro.svelte';
   import ScrollyChapter1 from '$lib/components/helpers/Scrolly/ScrollyChapter1.svelte';
   import ScrollyFacts from '$lib/components/helpers/Scrolly/ScrollyFacts.svelte';




   import '$lib/styles/font.css';
	import '$lib/styles/global.css';


</script>

<ProgressBar />
<Hamburger />
<Scrollyintro />
<ScrollyChapter1 />
<ScrollyFacts />




<div class="for-scroll"></div>


<style>
   :global(body) {
		background-color: var(--pl-black);
		transition: background-color 0.3s
	}
   .for-scroll {
      /* width: 2000px; */
      height: 2000px;
  }

</style>
