<script>
  import { onMount } from "svelte";
  import { browser, dev } from "$app/environment";
  import _debounce from "lodash.debounce";
  import "modern-css-reset/dist/reset.min.css";
  import "$lib/styles/font.css";
  import "$lib/styles/global.css";

  const setTrueVh = () => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight / 100}px`
    );
  };

  onMount(setTrueVh);
</script>

<!-- <svelte:window on:resize={_debounce(setTrueVh, 50)} /> -->

{#if browser && dev}
  <nav><span>Dummy Masthead</span></nav>
{/if}

<slot />

<style>
  nav {
    width: 100vw;
    height: 71px;
    position: sticky;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    display: grid;
    place-items: center;
    background: var(--pl-blue);
    z-index: 1000;
  }

  span {
    font-family: var(--pl-sans);
    font-weight: 900;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 1rem;
    line-height: 1;
  }
</style>
