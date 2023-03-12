<script>
   import ProgressBar from '$lib/components/helpers/ProgressBar.svelte';
   import Hamburger from '$lib/components/helpers/Hamburger.svelte';
   // import Scrollygraphic from '$lib/components/helpers/Scrolly/Scrollygraphic.svelte';


   import '$lib/styles/font.css';
	import '$lib/styles/global.css';


</script>

<ProgressBar />
<Hamburger />
<div class = "intro-text">
   <h1>Lost Shape</h1>
</div>

<!-- <Scrollygraphic /> -->

<div class="for-scroll"></div>


<style>
   :global(body) {
		background-color: var(--pl-black);
		transition: background-color 0.3s
	}
   .intro-text{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top:40vh;
   }

   h1{
      font-family: var(--pl-serif);
      justify-content: center;
      color: var(--pl-white);
      font-weight: 400;
      font-style: normal;
      font-size: 50px;
      letter-spacing: -0.01em;
   }
   .for-scroll {
      width: 2000px;
      height: 2000px;
  }

</style>
