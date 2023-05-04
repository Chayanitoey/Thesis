<script>
  // @ts-ignore
  import * as Pancake from "@sveltejs/pancake";
  import points from "$lib/data/reasonsWhyPeopleDiscardGarment.js";
  import points_2 from "$lib/data/DischargeOfGarments.js";
  import points_3 from "$lib/data/amountOfCO2.js";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  /**
   * @type {number}
   */
  export let index;

  const reasons = [
    "Material_Broken",
    "Stains",
    "Miscoloured",
    "Lost_Shape",
    "Got_Tired_Of_it",
    "Others",
  ];
  const destinations = [
    "Leave_To_Recycling",
    "Throw_In_The_Garbage",
    "Give_away",
    "Save",
    "Sell",
    "Others",
  ];
  const final_destinations = [
    "Landfill",
    "Incinerated",
    "Recycled",
    "Exported_overseas",
  ];

  const colorsReasons = [
    "#8BFF7A",
    "#FFFFFF",
    "#5465FF",
    "#788BFF",
    "#007991",
    "#FF6F61",
  ];
  const colorsDestinations = [
    "#FFFFFF",
    "#E01705",
    "#09A08C",
    "#F9AF4A",
    "#86C4CE",
    "#7A7A7A",
  ];
  // const colorsFinalDestinations = ["#FFFFFF", "#E01705", "#09A08C", "#F9AF4A"];

  //This one is for 'the reasons why people dispose garment' chart
  const stacks = Pancake.stacks(points, reasons, "id");
  const max = stacks.reduce(
    // @ts-ignore
    (max, stack) => Math.max(max, ...stack.values.map((v) => v.end)),
    0
  );

  //This one is for 'where the discharged garment go' chart
  const stacks_1 = Pancake.stacks(points_2, destinations, "id");
  const max_1 = stacks_1.reduce(
    // @ts-ignore
    (max_1, stack_1) => Math.max(max_1, ...stack_1.values.map((v) => v.end)),
    0
  );
  //This one is for 'The Final destination of the textile' chart
  const stacks_2 = Pancake.stacks(points_3, final_destinations, "id");
  const max_2 = stacks_2.reduce(
    // @ts-ignore
    (max_2, stacks_2) => Math.max(max_2, ...stacks_2.values.map((v) => v.end)),
    0
  );

  const pos = tweened(0, { easing: cubicOut, duration: 800 });
</script>

<h2>Common reasons why garments are discarded</h2>
<div class="chart">
  <Pancake.Chart x1={0} x2={max} y1={0} y2={1}>
    <!-- <Pancake.Grid horizontal count={1} let:value let:first>
    <div class="grid-line horizontal">
    </div>
  </Pancake.Grid> -->
    <!-- 
  <Pancake.Grid vertical count={5} let:value>
    <div class="grid-line vertical" />
    <span class="x-label">{value}</span>
  </Pancake.Grid> -->

    {#each stacks as stack, i}
      {#each stack.values as d}
        <Pancake.Box x1={d.start} x2={d.end} y1={d.i - 1} y2={d.i}>
          <div class="stack-box">
            <div
              class="box"
              id={reasons[i]}
              style="background-color: {colorsReasons[
                i
              ]}; border-color: {colorsDestinations[i]};"
            />
            <span class="label"
              >{@html reasons[i].split("_").join("&nbsp;")}</span
            >
            <span class="numlabel"
              >{@html (((d.end - d.start) * 100) / 364).toFixed(1)}%</span
            >
          </div>
        </Pancake.Box>
      {/each}
    {/each}
  </Pancake.Chart>
</div>

<style>
  #rectangle {
    position: absolute;
    padding: 3 em;
    border-radius: 1em;
    width: 42vw;
    height: 20vh;
    border: 1px solid var(--pl-white);
  }
  .chart {
    height: 100px;
    padding: 1em 0 0em 3em;
    margin: 0 0 50px 0;
    margin-left: calc(-3em);
  }
  h2 {
    font-family: var(--pl-serif);
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 38px;
    letter-spacing: 0.01em;
    color: var(--pl-white);
  }

  .label {
    position: absolute;
    left: 0.3em;
    bottom: -25px;
    font-family: var(--pl-sans);
    font-weight: 400;
    font-size: 0.7em;
    /* color: #999; */
    color: var(--pl-white);
    text-align: center;
  }
  .numlabel {
    position: absolute;
    left: 0.3em;
    top: 11em;
    font-family: var(--pl-sans);
    font-weight: 400;
    font-size: 0.7em;
    color: var(--pl-white);
    text-align: center;
  }

  .box {
    position: absolute;
    left: 0;
    top: 2px;
    width: 100%;
    height: calc(100% - 4px);
    border-radius: 0px;
  }
  .stack-box {
    opacity: 0.6;
  }
  .stack-box:hover {
    opacity: 1;
  }
</style>
