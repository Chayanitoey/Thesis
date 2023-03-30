<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { extent } from "d3-array";
  import { scalePoint } from "d3-scale";

  import data from "$lib/data/sortLaundryByFabric.json";
  // import data from "$lib/data/testdata.json";

  const margin = { top: 20, right: 30, bottom: 20, left: 10 };
  const width = 1000 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  // let data;

  onMount(async () => {
    // data = await d3.json("$lib/data/testdata.json");

    const allNodes = data.nodes.map((d) => d.name);

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

    nodes.on("mouseover", function (event, d) {
      nodes.style("fill", "#B8B8B8");
      d3.select(this).style("fill", "#69b3b2");
      links
        .style("stroke", (a) =>
          a.source === d.name || a.target === d.name ? "#69b3b2" : "#b8b8b8"
        )
        .style("stroke-width", (a) =>
          a.source === d.name || a.target === d.name ? 4 : 1
        );
    });

    nodes.on("mouseout", function (_event, d) {
      nodes.style("fill", "#69b3a2");
      links.style("stroke", "black").style("stroke-width", "1");
    });
  });
</script>

<div id="my_dataviz" />

<style>
  #my_dataviz {
    margin-top: 10%;
    margin-left: 10%;
  }
  :global(text) {
    font-family: var(--pl-serif);
  }
</style>
