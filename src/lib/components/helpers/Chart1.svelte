<script>
  // @ts-ignore
  import * as Pancake from "@sveltejs/pancake";
  import points from "$lib/data/StackedBarChart1.js";

  const reasons = [
    "Material_Broken",
    "Stains",
    "Miscoloured",
    "Lost_Shape",
    "Got_Tired_Of_it",
    "Others",
  ];
  const colorsReasons = [
    "#FFFFFF",
    "#E01705",
    "#09A08C",
    "#F9AF4A",
    "#86C4CE",
    "#7A7A7A",
  ];

  const stacks = Pancake.stacks(points, reasons, "id");

  const max = stacks.reduce(
    // @ts-ignore
    (max, stack) => Math.max(max, ...stack.values.map((v) => v.end)),
    0
  );
</script>

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
          <div
            class="box"
            id={reasons[i]}
            style="background-color: {colorsReasons[i]}"
          />
          <span class="label">{@html reasons[i].split("_").join("&nbsp;")}</span
          >
        </Pancake.Box>
      {/each}
    {/each}
  </Pancake.Chart>
</div>

<style>
  .chart {
    height: 100px;
    padding: 1em 0 0em 3em;
    margin: 0 0 36px 0;
    margin-left: calc(-3em);
  }
  /* 
  .grid-line {
    position: relative;
    display: block;
  }

  .grid-line.vertical {
    height: 100%;
    border-left: 0px dashed #ccc;
    
  } */

  .label {
    position: absolute;
    left: 0.3em;
    bottom: -20px;
    font-family: var(--pl-sans);
    font-weight: 400;
    font-size: 0.7em;
    color: #999;
    text-align: center;
  }

  /* .x-label {
    position: absolute;
    width: 4em;
    left: -2em;
    bottom: -40px;
    font-family: var(--pl-sans);
    font-size: 10px;
    color: #999;
    text-align: center;
  } */

  .box {
    position: absolute;
    left: 0;
    top: 2px;
    width: 100%;
    height: calc(100% - 4px);
    border-radius: 0px;
  }
</style>
