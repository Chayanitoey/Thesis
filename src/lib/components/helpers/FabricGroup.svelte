<script>
  import { LayerCake, Svg, Html } from "layercake";
  import { scaleOrdinal, scaleBand } from "d3-scale";
  import { Input } from "sveltestrap";

  import ForceLayout from "./ForceLayout.svelte";

  import data from "$lib/data/fabricdots.json";

  const xKey = "category";
  const rKey = "value";
  const zKey = "category";

  let groupBy = "false";

  const seriesNameSet = new Set();
  const seriesColors = ["#FFFFFF", "#E01705", "#86C4CE"];

  data.forEach((d) => {
    seriesNameSet.add(d[zKey]);
  });

  /* --------------------------------------------
   * Convert this to an array so we can use it in our scales
   */
  const seriesNames = [...seriesNameSet];

  let manyBodyStrength = 3;
  let xStrength = 0.1;
</script>

<div class="input-container">
  <label
    ><input type="radio" bind:group={groupBy} value="false" />
    Unsorted Laundry
  </label>

  <label
    ><input type="radio" bind:group={groupBy} value="true" />Sorted Laundry By
    Color</label
  >
</div>

<div class="chart-container">
  <LayerCake
    {data}
    x={xKey}
    r={rKey}
    z={zKey}
    xScale={scaleBand()}
    xDomain={seriesNames}
    rRange={[4, 30]}
    zScale={scaleOrdinal()}
    zDomain={seriesNames}
    zRange={seriesColors}
  >
    <Svg>
      <ForceLayout
        {manyBodyStrength}
        {xStrength}
        groupBy={JSON.parse(groupBy)}
        nodeStroke="#000"
      />
    </Svg>
  </LayerCake>
</div>

<style>
  /*
		The wrapper div needs to have an explicit width and height in CSS.
		It can also be a flexbox child or CSS grid element.
		The point being it needs dimensions since the <LayerCake> element will
		expand to fill it.
	*/
  .chart-container {
    width: 100%;
    height: 80%;
  }
  label {
    cursor: pointer;
    color: var(--pl-white);
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
  }
  input {
    margin-right: 7px;
  }
</style>
