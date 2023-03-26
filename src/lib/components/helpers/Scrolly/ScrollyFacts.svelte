<script>
  import Scroller from "./Scroller.svelte";
  import "$lib/styles/global.css";
  import { fly } from "svelte/transition";
  import { fade } from "svelte/transition";
  import * as d3 from "d3";
  import { onMount } from "svelte";

  /**
   * @type {number}
   */
  let count;
  /**
   * @type {number}
   */
  let index;
  /**
   * @type {any}
   */
  let offset;
  /**
   * @type {any}
   */
  let progress;
  let top = 0; // 0 - 1
  let threshold = 0.5; // 0 - 1
  let bottom = 1; // 0 - 1
  let arr = "7 - 8 wears before we throw it out...";
</script>

<div class="scrollyGraphic">
  <Scroller
    {top}
    {threshold}
    {bottom}
    bind:count
    bind:index
    bind:offset
    bind:progress
  >
    <div slot="background">
      <div class="background-content">
        {#if index < 2}
          <div class="intro-text" in:fly={{ y: 150, duration: 1000 }}>
            <h1>
              Due to bad laundry practices, garment life cycle is only about
              <br />
              {arr}
            </h1>
          </div>
          <div class="main">
            <div class="circle0" />
          </div>
        {:else if index == 2}
          <div class="intro-text" in:fly={{ y: 150, duration: 1000 }}>
            <h1>We can do better.</h1>
          </div>
          <div class="main">
            <div class="circle" />
            <div class="circle1" />
            <div class="circle2" />
            <div class="circle3" />
            <div class="circle4" />
            <div class="circle5" />
            <div class="circle6" />
            <div class="circle7" />
          </div>
        {/if}

        <!-- <p>current section: <strong>{index + 1}/{count}</strong></p>
				<progress value={count ? (index + 1) / count : 0} />

				<p>offset in current section</p>
				<progress value={offset || 0} />

				<p>total progress</p>
				<progress value={progress || 0} /> -->
      </div>
    </div>

    <div slot="foreground">
      <section>
        <!-- <div class="step">
					1
				</div> -->
      </section>
      <section>
        <!-- <div class="step">
					2
				</div> -->
      </section>
      <section>
        <!-- <div class="step">
					3
				</div> -->
      </section>
    </div>
  </Scroller>
</div>

<style>
  .intro-text {
    display: flex;
    align-items: left;
    width: 50vw;
    height: auto;
    /* margin-top:40vh; */
  }

  h1 {
    font-family: var(--pl-serif);
    text-align: left;
    color: var(--pl-black);
    font-weight: 400;
    font-style: normal;
    font-size: 5vw;
    line-height: 1em;
    letter-spacing: -0.03em;
  }

  [slot="background"] {
    display: flex;
    justify-content: left;
    align-items: left;
    height: 100vh;
    /* font-size: 16px; */
    margin-top: 20vh;
  }

  .background-content {
    /* border-top: 2px solid var(--blue3);
		border-bottom: 2px solid var(--blue3); */
    font-size: 1.4em;
    overflow: hidden;
    padding: 1em 4em;
  }

  [slot="foreground"] {
    pointer-events: none;
    max-width: 640px;
    margin: 0 auto;
    font-size: 16px;
  }

  [slot="foreground"] section {
    pointer-events: all;
    height: 80vh;
    padding: 1em;
    margin: 0 0 2em 0;
    font-family: var(--sans);
    margin: 0 auto 20vh;
  }

  [slot="foreground"] section:last-of-type {
    height: 100vh;
  }

  .scrollyGraphic {
    z-index: 1;
    background: linear-gradient(
      180deg,
      rgba(0, 255, 10, 0) 0%,
      #7aff7f 53.12%,
      rgba(0, 255, 10, 0) 100%
    );
    width: 100vw;
  }

  /* for circle animations */
  .main {
    width: 330px;
    height: 330px;
    border: 1px solid black;
    position: absolute;
    top: 0;
    bottom: 40%;
    left: 40%;
    right: 0;
    margin: auto;
    border-radius: 50%;
  }
  .circle0 {
    width: 30px;
    height: 30px;
    background: var(--pl-black);
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    margin: auto;
    animation: circle0 6s linear;
    animation-iteration-count: 1;
  }

  .circle {
    width: 30px;
    height: 30px;
    background: var(--pl-black);
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    margin: auto;
    animation: circle 6s linear infinite;
  }
  .circle1 {
    width: 30px;
    height: 30px;
    background: var(--pl-black);
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    margin: auto;
    animation: circle1 6s linear infinite;
  }
  .circle2 {
    width: 30px;
    height: 30px;
    background: var(--pl-black);
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    margin: auto;
    animation: circle2 6s linear infinite;
  }
  .circle3 {
    width: 30px;
    height: 30px;
    background: var(--pl-black);
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    margin: auto;
    animation: circle3 6s linear infinite;
  }
  .circle4 {
    width: 30px;
    height: 30px;
    background: var(--pl-black);
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    margin: auto;
    animation: circle4 6s linear infinite;
  }

  .circle5 {
    width: 30px;
    height: 30px;
    background: var(--pl-black);
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    margin: auto;
    animation: circle5 6s linear infinite;
  }

  .circle6 {
    width: 30px;
    height: 30px;
    background: var(--pl-black);
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    margin: auto;
    animation: circle6 6s linear infinite;
  }
  .circle7 {
    width: 30px;
    height: 30px;
    background: var(--pl-black);
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    margin: auto;
    animation: circle7 6s linear infinite;
  }

  @keyframes circle0 {
    0% {
      transform: rotate(0deg) translate(-165px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translate(-165px) rotate(-360deg);
    }
  }
  @keyframes circle {
    0% {
      transform: rotate(0deg) translate(-165px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translate(-165px) rotate(-360deg);
    }
  }

  @keyframes circle1 {
    0% {
      transform: rotate(-45deg) translate(-165px) rotate(-45deg);
    }
    100% {
      transform: rotate(315deg) translate(-165px) rotate(-315deg);
    }
  }

  @keyframes circle2 {
    0% {
      transform: rotate(-90deg) translate(-165px) rotate(-90deg);
    }
    100% {
      transform: rotate(270deg) translate(-165px) rotate(-270deg);
    }
  }

  @keyframes circle3 {
    0% {
      transform: rotate(-135deg) translate(-165px) rotate(-135deg);
    }
    100% {
      transform: rotate(225deg) translate(-165px) rotate(-225deg);
    }
  }

  @keyframes circle4 {
    0% {
      transform: rotate(-180deg) translate(-165px) rotate(-180deg);
    }
    100% {
      transform: rotate(180deg) translate(-165px) rotate(-180deg);
    }
  }
  @keyframes circle5 {
    0% {
      transform: rotate(-225deg) translate(-165px) rotate(-225deg);
    }
    100% {
      transform: rotate(135deg) translate(-165px) rotate(-135deg);
    }
  }

  @keyframes circle6 {
    0% {
      transform: rotate(-270deg) translate(-165px) rotate(-270deg);
    }
    100% {
      transform: rotate(90deg) translate(-165px) rotate(-90deg);
    }
  }

  @keyframes circle7 {
    0% {
      transform: rotate(-315deg) translate(-165px) rotate(-315deg);
    }
    100% {
      transform: rotate(45deg) translate(-165px) rotate(-45deg);
    }
  }
</style>
