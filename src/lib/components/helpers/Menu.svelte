<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';

    import '$lib/styles/font.css';
	import '$lib/styles/global.css';

    /**
	 * @type {any}
	 */
     export let open;
</script>

{#if open}
    <div class="menu">
        {#each ['Home', 'Example', 'About', 'Contact'] as link, i}
            <p transition:fly={{ y: -15, delay: 50 * i }}>
                {link}
            </p>
        {/each}
    </div>

    <div class="bar" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
{/if}

<style>
  

    .menu {
        height:100vh;
        width:100vw;
        justify-content: center;

        background:var(--pl-black);
        text-align: center;
        font-size: 2rem;
        letter-spacing: 0.15em;
        padding-top: 30vh;
        top:0;
        color: var(--pl-green);
    }
    p {
        font-family:var(--pl-serif);
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
    }
    p:hover {
        color: var(--pl-white);
        text-decoration: underline;
    }
    .bar {
        border-style: solid;
        border-color: white;
        border-width: 1px;
        height: 0;
    }
</style>