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
        font-family:var(--pl-sans);
        background:var(--pl-black);
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 0.15em;
        padding: 8em;
        top:0;
        color: var(--pl-white);
    }
    p {
        font-family:var(--pl-sans);
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
    }
    p:hover {
        text-decoration: underline;
    }
    .bar {
        border-style: solid;
        border-color: white;
        border-width: 1px;
        height: 0;
    }
</style>