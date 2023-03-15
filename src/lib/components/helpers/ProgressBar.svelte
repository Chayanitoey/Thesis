<script>
	import '$lib/styles/font.css';
	import '$lib/styles/global.css';

	import {onMount} from 'svelte';
	
	/**
	 * @type {HTMLDivElement}
	 */
	let container;
	
	onMount(() => {
		// const child = document.createElement('span');
		// child.textContent = 'child';
		// container.appendChild(child);
		function progressBarScroll() {
				let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
					height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
					scrolled = (winScroll / height) * 100;
					container.style.width = scrolled + "%";
				}

				window.onscroll = function () {
				progressBarScroll();
				};

	});

</script>
<div class="progress-container">
	<div id= "progress-bar" bind:this={container}/>
</div>


<style>

.progress-container {
  position: fixed;
  background-color: #7A7A7A;
  height: 10px;
  top:0;
  left:0;
  width: 100%;
  z-index: 1000;
}

#progress-bar {
  position: fixed;
  background-color: var(--pl-green);
  top:0;
  left:0;
  height: 10px;
  width: 0%;
  z-index: 1000;

}

</style>
