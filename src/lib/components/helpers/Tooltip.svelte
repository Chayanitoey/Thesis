<script>
  /**
   * @type {any}
   */
  export let title;
  /**
   * @type {number}
   */
  export let x;
  /**
   * @type {number}
   */
  export let y;
</script>

<div
  style="
		top: {y + 5}px;
		left: {x + 5}px;"
>
  {title}
</div>

<style>
  div {
    /* border: 1px transparent #ddd; */
    /* box-shadow: 1px 1px 1px #ddd; */
    background: var(--pl-black);
    border-radius: 10%;
    padding: 1em;
    position: absolute;
    font-family: var(--pl-sans);
    color: var(--pl-green);
    max-width: 30vw;
    font-size: 1rem;
    font-weight: 600;
  }
</style>
