<script>
  // @ts-nocheck

  import Scroller from "./Scroller.svelte";
  import "$lib/styles/global.css";
  import FabricGroup from "$lib/components/helpers/FabricGroup.svelte";
  import SortLaundryArcDiagram from "$lib/components/helpers/SortLaundryArcDiagram.svelte";

  import { fly } from "svelte/transition";
  import { fade } from "svelte/transition";

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
</script>

<div class="intro-text">
  <h3>
    <span class="span-line" style="margin-left:-80px;" />
    CHAPTER III
    <span class="span-line" style="margin-left:15px;" />
  </h3>
  <h1>The Key Is In Sorting</h1>
</div>

<!-- <section> -->
<div class="sort_color">
  <h2>Sorting by Color</h2>

  <p>
    <!-- Sort by <span style="background-color:var(--pl-blue);">color</span> : -->
    Sorting the laundry has to happen, and it's a good place not to cut corners by
    performing a rush job. Sorting is the time when you can treat and prevent all
    kinds of problems, so make it a habit to practice your due diligence when sorting.
    According to
    <a href="https://www.nytimes.com/guides/smarterliving/how-to-do-laundry"
      >NYT</a
    >
    it's wise to civide your laundry load by colors :
    <span class="emphasis">white, colors, and pastel.</span>
    <br />
    <br />
    <br />
    <b>3 main color groups:</b>
  </p>
  <div
    style="max-width:100%;display: grid; grid-template-columns: 23vw 23vw 23vw;"
  >
    <div style="font-family: var(--pl-serif); font-size:medium;">
      White
      <div class="rect-sort-color" style="background-color: white;" />
    </div>
    <div
      style="display: inline-block; vertical-align: middle;font-family: var(--pl-serif); font-size:medium;"
    >
      Colors
      <div class="rect-sort-color" id="colors-group" />
    </div>
    <div
      style="display: inline-block; vertical-align: middle;font-family: var(--pl-serif); font-size:medium;"
    >
      Pastels
      <div class="rect-sort-color" id="pastels-group" />
    </div>
  </div>
  <!-- <FabricGroup /> -->
</div>

<div class="sort_fabric_type">
  <h2>Sorting by Fabric Type</h2>

  <p>
    <!-- Sort by -->
    <!-- <span style="background-color:var(--pl-blue);">fabric type</span>:  -->
    When possible, it is also wise to sort your laundry by fabric composition due
    to widely different characteristics of each fibre, your clothes will need different
    care methods/ wash settings to maintain quality of the fabric fiber.
    <br />
    <br />
    <br />
    <b>Sort by fabric:</b>
  </p>
</div>
<!-- </section> -->

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
      <SortLaundryArcDiagram bind:index />
      <!-- <div class="background-content">
        <h3>Sort by fabric type:</h3>
        <p>current section: <strong>{index + 1}/{count}</strong></p>
        <progress value={count ? (index + 1) / count : 0} />

        <p>offset in current section</p>
        <progress value={offset || 0} />

        <p>total progress</p>
        <progress value={progress || 0} />
      </div> -->
    </div>

    <div slot="foreground">
      <section>
        <!-- <div class="step">
          <div class="step">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            fugiat possimus repudiandae blanditiis temporibus. Assumenda, itaque
            in! Illo est, dolorem repellendus rerum quisquam suscipit facilis
            vel ut tempore magnam? Dolores!
          </div>
        </div> -->
      </section>
      <section>
        <div class="step">
          <span
            style="background-color:#FF294C; font-weight:900;padding:2px 2px"
          >
            Cotton
          </span>
          is highly washable but can be prone to shrinking. Machine or hand wash
          cotton using cold water, and avoid exposure to hot water or high-heat drying.
          Fine cottons should be air dried.
        </div>
      </section>
      <section>
        <div class="step">
          While <span
            style="background-color:#7BDBFF; font-weight:900; color: var(--pl-black);padding:2px 2px"
          >
            Linen
          </span> is highly washable, it can easily shrink and wrinkle if not washed
          properly. To avoid this, use cold water to machine or hand wash your linen.
          Once washed, it's best to air dry or press the linen while it's still damp
          to keep it wrinkle-free.
        </div>
      </section>
      <section>
        <div class="step">
          <span
            style="background-color:#FAC83C;color: var(--pl-black);font-weight:900;padding:2px 2px"
          >
            Wool
          </span>
          can felt and shrink if washed improperly due to agitation and fluctuating
          water temperatures. Hand wash in cool water and air dry flat. Machine wash
          in a mesh bag on delicate cycle with cold water and air dry to prevent
          damage.
        </div>
      </section>
      <section>
        <div class="step">
          <span
            style="background-color:#191CE4; font-weight:900;padding:2px 2px"
          >
            Silk
          </span>
          is highly prone to color loss and to water staining. Silk, despite its
          water-averse reputation, can be hand-washed using cool water and a specialty
          detergent, or sent out for dry cleaning. If you opt to hand-wash silk,
          make it a very short operation, as silk doesn't benefit from overexposure
          to water, and keep the water temperature consistent.
        </div>
      </section>
      <section>
        <div class="step">
          <span
            style="background-color:#FFFFFF; font-weight:900;color: var(--pl-black);padding:2px 2px"
          >
            Rayon and viscose
          </span> are not highly washable. Always dry clean rayon and viscose clothes.
        </div>
      </section>
      <section>
        <div class="step">
          <span
            style="background-color:#A6E7FF; color: var(--pl-black);font-weight:900;padding:2px 2px"
            >Nylon</span
          > is also highly washable, but prone to static. Air drying will prevent
          static, so skip the dryer.
        </div>
      </section>
      <section>
        <div class="step">
          <span
            style="background-color:#09A08C;color: var(--pl-black);font-weight:900;padding:2px 2px"
          >
            Polyester
          </span> is highly machine washable and can be machine dried on medium-
          or low-heat.
        </div>
      </section>
      <section>
        <div class="step">
          <span
            style="background-color:#FF9083; color: var(--pl-black);font-weight:900;padding:2px 2px"
            >Spandex</span
          > is machine washable, but it can hold onto odors, which means that it
          should be dried on a low-heat setting or air dried. Avoid the use of chlorine
          bleach with Spandex or with blends containing Spandex.
        </div>
      </section>
      <section>
        <div class="step">
          <span
            style="background-color:#D9D9D9; font-weight:900; color: var(--pl-black); padding:2px 2px"
          >
            Blends</span
          > should be washed according to the instructions for the more sensitive
          fabric.
        </div>
      </section>
    </div>
  </Scroller>
</div>

<style>
  .rect-sort-color {
    width: 100px;
    height: 100px;
    border-radius: 2;
    margin-top: 2%;
    margin-bottom: 2%;
  }
  #colors-group {
    background: linear-gradient(
      90deg,
      #191ce4 16.1%,
      #fac83c 38.69%,
      #29f2aa 66.5%,
      #e01705 88.58%
    );
    transform: rotate(-90deg);
  }
  #pastels-group {
    background: linear-gradient(
      90deg,
      #cfa8ff 0%,
      #a6e7ff 23.67%,
      #ffcaf0 54.55%,
      #caffd9 77.19%,
      #fcffd5 98.8%
    );
    transform: rotate(-90deg);
  }
  .span-line {
    position: absolute;
    width: 60px;
    margin-top: 13px;
    border: 1px solid #ffffff;
  }
  .intro-text {
    /* display: flex; */
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 56vw;
    top: 0;
  }
  h1 {
    font-family: var(--pl-serif);
    text-align: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    top: 0;
    width: 100%;
    color: var(--pl-white);
    font-weight: 400;
    font-style: normal;
    font-size: 50px;
    letter-spacing: -0.01em;
  }

  .sort_color {
    height: 80vh;
    max-width: 56vw;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  .sort_fabric_type {
    height: 12vh;
    max-width: 56vw;
    margin: auto;
    margin-top: -20vh;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-family: var(--pl-serif);
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 38px;
    letter-spacing: 0.01em;
    color: var(--pl-green);
  }
  h3 {
    font-family: var(--pl-sans);
    font-weight: 700;
    font-size: 1rem;
    line-height: 29px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: var(--pl-white);
  }
  p {
    font-family: var(--pl-sans);
    /* justify-content: left;
    align-items: left;
    text-align: justify; */
    color: var(--pl-white);
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.01em;
    padding-bottom: 10px;
    padding-right: 10%;
    /* padding-left: 10%; */

    /* max-width: 40vw; */
  }

  [slot="background"] {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 16px;
  }

  .background-content {
    background-color: hsla(210, 100%, 50%, 0.1);
    border-top: 2px solid var(--pl-blue);
    border-bottom: 2px solid var(--pl-blue);
    font-size: 1.4em;
    overflow: hidden;
    padding: 1em 4em;
  }
  [slot="foreground"] {
    pointer-events: none;
    max-width: 56vw;
    margin: 0 auto;
    font-size: 16px;
  }

  .step {
    font-size: 16px;
    box-sizing: border-box;
    padding: 2em 2em;
    /* background-color: var(--pl-black); */
    color: var(--pl-white);
    backdrop-filter: blur(10px);
    border-radius: 1em;
    border: 1px solid #333;
    pointer-events: auto;
    max-width: 40vw;
    margin: auto;
  }

  [slot="foreground"] section {
    pointer-events: all;
    height: 80vh;
    padding: 1em;
    margin: 0 0 2em 0;
    font-family: var(--pl-sans);
    margin: 0 auto 20vh;
  }

  [slot="foreground"] section:last-of-type {
    height: 100vh;
  }
  .emphasis {
    background-color: var(--pl-white);
    color: var(--pl-black);
    font-weight: 700;
    padding: 0 2px;
  }
</style>
