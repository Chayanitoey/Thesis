<script>
// @ts-nocheck

    	import { Hamburger } from "svelte-hamburgers";
		let open;
		import Menu from './Menu.svelte';


		import '$lib/styles/font.css';
		import '$lib/styles/global.css';

</script>
   
<div class ="leftnav">
	<Hamburger 
		bind:open 
		typee = springl
		--color= var(--pl-green)
		/>
	<Menu bind:open />

</div>



<style>
	.leftnav{
		position:fixed;
		top:0;
		left:0;
		z-index: 10;
	}
</style>