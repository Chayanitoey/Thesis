<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { extent, least } from "d3-array";
  import { scalePoint } from "d3-scale";

  import data from "$lib/data/sortLaundryByFabric.json";

  let labels = [
    { fabric: "Cotton", color: "#FF294C" },
    { fabric: "Linen", color: "#7BDBFF" },
    { fabric: "Wool", color: "#FAC83C" },
    { fabric: "Silk", color: "#191CE4" },
    { fabric: "Rayon", color: "#FFFFFF" },
    { fabric: "Nylon", color: "#A6E7FF" },
    { fabric: "Polyester", color: "#09A08C" },
    { fabric: "Spandex", color: "#FF9083" },
    { fabric: "Blends", color: "#D9D9D9" },
  ];
  // import data from "$lib/data/testdata.json";

  const margin = { top: 20, right: 30, bottom: 50, left: 30 };
  const width = 1000 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  // let data;

  onMount(async () => {
    // data = await d3.json("$lib/data/testdata.json");

    const allNodes = data.nodes.map((d) => d.name);
    const fabricType = data.links.map((d) => d.fabric);
    const fabricArray = fabricType.filter(
      (item, index) => fabricType.indexOf(item) === index
    );

    const x = d3.scalePoint().range([0, width]).domain(allNodes);

    const svg = d3
      .select("#my_dataviz")
      .append("svg")
      .attr("width", width + margin.left + margin.right + 100)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const nodes = svg
      .selectAll("mynodes")
      .data(data.nodes)
      .join("circle")
      .attr("cx", (d) => x(d.name))
      .attr("cy", height - 30)
      .attr("r", 8)
      .style("fill", "#09A08C");

    const labels = svg
      .selectAll("mylabels")
      .data(data.nodes)
      .join("text")
      .attr("x", (d) => x(d.name))
      .attr("y", height - 10)
      .text((d) => d.name)
      .style("fill", "white")
      .style("text-anchor", "middle");

    const wash = svg
      .append("rect")
      .attr("x", -20)
      .attr("y", height)
      .attr("width", 430)
      .attr("height", 40)
      .attr("stroke", "white");

    // .attr("fill", "blue");

    const dry = svg
      .append("rect")
      .attr("x", 420)
      .attr("y", height)
      .attr("width", 450)
      .attr("height", 40)
      .attr("stroke", "white");
    // .attr("fill", "red");

    const idToNode = {};
    data.nodes.forEach(function (n) {
      idToNode[n.name] = n;
    });

    const links = svg
      .selectAll("mylinks")
      .data(data.links)
      .join("path")
      .attr("d", (d) => {
        const start = x(idToNode[d.source].name);
        const end = x(idToNode[d.target].name);
        return [
          "M",
          start,
          height - 30,
          "A",
          (start - end) / 2,
          ",",
          (start - end) / 2,
          0,
          0,
          ",",
          start < end ? 1 : 0,
          end,
          ",",
          height - 30,
        ].join(" ");
      })
      .style("fill", "none")
      .attr("stroke", "white");

    // nodes.on("mouseover", function (event, d) {
    //   nodes.style("fill", "#B8B8B8");
    //   d3.select(this).style("fill", "#69b3b2");
    //   links
    //     .style("stroke", (a) =>
    //       a.source === d.name || a.target === d.name ? "#69b3b2" : "#b8b8b8"
    //     )
    //     .style("stroke-width", (a) =>
    //       a.source === d.name || a.target === d.name ? 4 : 1
    //     );
    // });

    // nodes.on("mouseout", function (_event, d) {
    //   nodes.style("fill", "#69b3a2");
    //   links.style("stroke", "black").style("stroke-width", "1");
    // });
  });
</script>

<div id="legend_arc">
  <h3>Fabric Type</h3>
  {#each labels as label}
    <div style="display:flex;">
      <div class="swatch" style="background-color:{label.color};" />
      <p>
        {label.fabric}
      </p>
    </div>
  {/each}
</div>

<div id="my_dataviz" />

<style>
  #my_dataviz {
    margin-top: -5vh;
    margin-left: 20vw;
  }
  :global(text) {
    font-family: var(--pl-serif);
  }
  #legend_arc {
    width: 60vw;
    margin-top: -15vh;
    position: absolute;
    text-align: left;
    margin-left: -20vw;
  }
  .swatch {
    width: 2.5vw;
    height: 2.5vw;
  }
  p {
    color: var(--pl-white);
    font-family: var(--pl-sans);
    font-size: 1vw;
    padding-left: 1em;
  }
  h3 {
    font-family: var(--pl-sans);
    font-weight: 700;
    font-size: 1.3vw;
    line-height: 29px;
    text-align: left;
    letter-spacing: 0.01em;
    color: var(--pl-white);
  }
</style>
