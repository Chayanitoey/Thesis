<script>
  import data from "$lib/data/laundryIcons.csv";
  import { tooltip } from "$lib/components/helpers/tooltip.js";
  import { fade } from "svelte/transition";

  let iconTypes = ["All", "Wash", "Dry", "Dry clean", "Bleach", "Iron"];
  let selected = "All";
  // const filterSelection = (e) => (selected = e.target.dataset.name);
  /**
   * @param {string} iconType
   */
  function filterSelection(iconType) {
    selected = iconType;
  }
</script>

<h2>All the care symbols & their meanings</h2>
<p>
  filter by :

  {#each iconTypes as iconType}
    <button
      class:active={selected === iconType}
      class="btn"
      role="button"
      on:click={() => filterSelection(iconType)}
      tabindex="0"
    >
      {iconType}
    </button>
  {/each}
</p>

<div class="grid-wrapper">
  <div class="grid-icons">
    {#each data as icon}
      {#if selected === "All"}
        <div class="icon-container" transition:fade>
          <img
            src="https://raw.githubusercontent.com/Chayanitoey/laundry_icons/main/laundryIcons_svg/{icon.svg_name}"
            alt={icon.icon_name}
            class="filter-white"
            style="max-width:10vw; max-height:10vh;padding:12%;"
            title="{icon.icon_instruction}
        "
            use:tooltip
          />
        </div>
        <!-- <p>{icon.icon_instruction}</p> -->
      {:else if icon.icon_type === "Wash" && icon.icon_type === selected}
        <div class="icon-container">
          <img
            src="https://raw.githubusercontent.com/Chayanitoey/laundry_icons/main/laundryIcons_svg/{icon.svg_name}"
            alt={icon.icon_name}
            style="max-width:10vw; max-height:10vh;padding:12%;"
            class="filter-white"
            title="{icon.icon_instruction}
          "
            use:tooltip
          />
        </div>
      {:else if icon.icon_type === "Dry" && icon.icon_type === selected}
        <div class="icon-container" transition:fade>
          <img
            src="https://raw.githubusercontent.com/Chayanitoey/laundry_icons/main/laundryIcons_svg/{icon.svg_name}"
            alt={icon.icon_name}
            style="max-width:10vw; max-height:10vh;padding:12%;"
            class="filter-white"
            title="{icon.icon_instruction}
          "
            use:tooltip
          />
        </div>
      {:else if icon.icon_type === "Dry clean" && icon.icon_type === selected}
        <div class="icon-container" transition:fade>
          <img
            src="https://raw.githubusercontent.com/Chayanitoey/laundry_icons/main/laundryIcons_svg/{icon.svg_name}"
            alt={icon.icon_name}
            style="max-width:10vw; max-height:10vh;padding:12%;"
            class="filter-white"
            title="{icon.icon_instruction}
          "
            use:tooltip
          />
        </div>
      {:else if icon.icon_type === "Bleach" && icon.icon_type === selected}
        <div class="icon-container" transition:fade>
          <img
            src="https://raw.githubusercontent.com/Chayanitoey/laundry_icons/main/laundryIcons_svg/{icon.svg_name}"
            alt={icon.icon_name}
            style="max-width:10vw; max-height:10vh;padding:12%;"
            class="filter-white"
            title="{icon.icon_instruction}
          "
            use:tooltip
          />
        </div>
      {:else if icon.icon_type === "Iron" && icon.icon_type === selected}
        <div class="icon-container" transition:fade>
          <img
            src="https://raw.githubusercontent.com/Chayanitoey/laundry_icons/main/laundryIcons_svg/{icon.svg_name}"
            alt={icon.icon_name}
            style="max-width:10vw; max-height:10vh;padding:12%;"
            class="filter-white"
            title="{icon.icon_instruction}
          "
            use:tooltip
          />
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  h2 {
    font-family: var(--pl-serif);
    font-weight: 400;
    font-size: 2rem;
    line-height: 38px;
    letter-spacing: 0.01em;
    color: var(--pl-green);
    margin-left: 10vw;
  }
  p {
    font-family: var(--pl-sans);
    justify-content: center;
    align-items: center;
    text-align: justify;
    color: var(--pl-white);
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 2%;
    letter-spacing: 0.01em;
    padding-bottom: 10px;
    padding-right: 10%;
    padding-left: 10%;
  }
  .grid-icons {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 100px), 1fr));
    margin-top: 2.15rem;
    margin-bottom: 3rem;
    width: 80vw;
    margin-left: 10vw;
  }
  .grid-wrapper {
    height: 120vh;
  }
  .icon-container {
    /* background-color: var(--pl-white); */
    opacity: 0.7;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    border: 2px solid transparent;
    border-radius: 5%;
    position: relative;
  }
  .icon-container:hover {
    cursor: crosshair;
    border-color: var(--pl-green) !important;
    transform: scale(1.05);
    opacity: 1;
  }

  .btn {
    align-items: center;
    appearance: none;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 0.375em;
    margin-right: 1rem;
    margin-left: 1rem;
    box-shadow: none;
    box-sizing: border-box;
    color: var(--pl-black);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--pl-sans);
    font-size: 1rem;
    height: 2em;
    justify-content: center;
    line-height: 1;
    padding: calc(0.5em - 1px) 1em;
    position: relative;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
  }

  .btn:active {
    /* border-color: #434242; */
    background-color: #4a4a4a;
    outline: 0;
  }

  .btn:focus {
    border-color: #485fc7;
    background-color: var(--pl-green);
    outline: 0;
  }

  .btn:hover {
    background-color: #737272;
    border-color: #b5b5b5;
  }

  .btn:focus:not(:active) {
    box-shadow: rgba(72, 95, 199, 0.25) 0 0 0 0.125em;
  }

  /* button {
    padding: 0.2rem;
    margin: 0.5rem;
    background-color: var(--pl-white);
    color: var(--pl-black);
    opacity: 0;
    border-radius: 10%;
    font-weight: 600;
  }
  button:hover {
    background-color: var(--pl-white) !important;
    transform: scale(1.05);
    opacity: 1;
  }
  button:focus {
    background-color: var(--pl-green) !important;
    opacity: 1;
  } */

  .filter-white {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(85deg)
      brightness(111%) contrast(103%);
  }
</style>
