<script>
  // @ts-nocheck

  import {
    area,
    curveLinear,
    Delaunay,
    range,
    scaleLinear,
    scaleUtc,
  } from "d3";
  import data from "$lib/data/lineData.js";
  import { fly, fade } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { cubicOut, quintOut } from "svelte/easing";

  /**
   * @type {any}
   */
  export let index;

  const marginTop = 80; // the top margin, in pixels
  const marginRight = 10; // the right margin, in pixels
  const marginBottom = 30; // the bottom margin, in pixels
  const marginLeft = 50; // the left margin, in pixels
  const inset = 0; // inset the default range, in pixels
  const width = 800; // the outer width of the chart, in pixels
  const height = 600; // the outer height of the chart, in pixels
  const xLabel = ""; // a label for the y-axis
  const yLabel = "↑in thousands of U.S. tons"; // a label for the y-axis
  const xFormat = ""; // a format specifier string for the y-axis
  const yFormat = ""; // a format specifier string for the y-axis
  const horizontalGrid = true; // show horizontal grid lines
  const verticalGrid = false; // show vertical grid lines
  const colors = ["#8BFF7A", "#007991", "#FF6F61", "#5465FF"]; // fill color for dots && number of colors in fill array MUST match number of subsets in data
  const showDots = false; // whether dots should be displayed
  const dotsFilled = false; // whether dots should be filled or outlined
  const r = 3; // (fixed) radius of dots, in pixels
  const strokeWidth = 1; // stroke width of line, in pixels
  const fillOpacity = 0.8; // fill opacity of area
  const tooltipBackground = "black"; // background color of tooltip
  const tooltipTextColor = "white"; // text color of tooltip
  const strokeLinecap = "round"; // stroke line cap of the line
  const strokeLinejoin = "round"; // stroke line join of the line
  const xScalefactor = width / 100; //y-axis number of values
  const yScalefactor = height / 90; //y-axis number of values
  const curve = curveLinear; // method of interpolation between points
  const xType = scaleUtc; // type of x-scale
  const insetTop = inset; // inset from top
  const insetRight = inset; // inset from right
  const insetBottom = inset; // inset fro bottom
  const insetLeft = inset; // inset from left
  const xRange = [marginLeft + insetLeft, width - marginRight - insetRight]; // [left, right]
  const yType = scaleLinear; // type of y-scale
  const yRange = [height - marginBottom - insetBottom, marginTop + insetTop]; // [bottom, top]

  let x,
    y,
    dotInfo,
    areas,
    filteredI,
    xVals = [],
    yVals = [],
    points = [],
    subsets = [],
    colorVals = [];

  // For a single set of first data
  if (!("data" in data[0])) {
    x = Object.keys(data[0])[0];
    y = Object.keys(data[0])[1];
    xVals = data.map((el) => el[x]);
    yVals = data.map((el) => el[y]);
    colorVals = data.map((el) => 0);
    points = data.map((el) => ({
      x: el[x],
      y: el[y],
      color: 0,
    }));
  }
  // For data with subsets (NOTE: expects 'id' and 'data' keys)
  else {
    x = Object.keys(data[0]?.data[0])[0];
    y = Object.keys(data[0]?.data[0])[1];
    data.forEach((subset, i) => {
      subset.data.forEach((coordinate) => {
        xVals.push(coordinate[x]);
        yVals.push(coordinate[y]);
        colorVals.push(i);
        points.push({
          x: coordinate[x],
          y: coordinate[y],
          color: i,
        });
      });
      subsets.push(subset.id);
    });
  }

  const I = range(xVals.length);
  const gaps = (d, i) => !isNaN(xVals[i]) && !isNaN(yVals[i]);
  const cleanData = points.map(gaps);
  const xDomain = [xVals[0], xVals[xVals.length - 1]];
  const yDomain = [0, Math.max(...yVals)];
  const xScale = xType(xDomain, xRange);
  const yScale = yType(yDomain, yRange);
  const niceY = scaleLinear()
    .domain([0, Math.max(...yVals)])
    .nice();
  const chartArea = area()
    .defined((i) => cleanData[i])
    .curve(curve)
    .x((i) => xScale(xVals[i]))
    .y0(yScale(0))
    .y1((i) => yScale(yVals[i]));

  $: {
    areas = [];
    colors.forEach((color, j) => {
      filteredI = [];
      filteredI = I.filter((el, i) => colorVals[i] === j);
      areas.push(chartArea(filteredI));
    });
  }

  const pointsScaled = points.map((el) => [
    xScale(el.x),
    yScale(el.y),
    el.color,
  ]);
  const delaunayGrid = Delaunay.from(pointsScaled);
  const voronoiGrid = delaunayGrid.voronoi([0, 0, width, height]);

  const xTicks = xScale.ticks(xScalefactor);
  const xTicksFormatted = xTicks.map((el) => el.getFullYear());

  const yTicks = niceY.ticks(yScalefactor);
</script>

<div class="chart-container">
  <svg
    {width}
    {height}
    viewBox="0 0 {width} {height}"
    cursor="crosshair"
    on:mouseout={() => (dotInfo = null)}
    on:blur={() => (dotInfo = null)}
    {index}
  >
    <!-- Dots (if enabled) -->
    {#if showDots && !dotInfo}
      {#each I as i}
        <g class="dot" pointer-events="none">
          <circle
            cx={xScale(xVals[i])}
            cy={yScale(yVals[i])}
            {r}
            stroke={colors[colorVals[i]]}
            fill={dotsFilled ? colors[colorVals[i]] : "none"}
          />
        </g>
      {/each}
    {/if}
    <!-- Chart Areas -->
    {#if index == 0}
      {#each areas as subsetArea, i}
        {#if i == 0}
          <g
            class="chartlines"
            pointer-events="none"
            in:fly={{ y: 50, duration: 500, easing: cubicOut }}
            out:fly={{ y: -{ y }, duration: 675 }}
          >
            {#if dotInfo}
              <path
                class="line"
                fill={colors[i]}
                fill-opacity={points[dotInfo[1]].color === i ? "0.5" : "0.1"}
                stroke={colors[i]}
                d={subsetArea}
              />
              <circle
                cx={xScale(points[dotInfo[1]].x)}
                cy={yScale(points[dotInfo[1]].y)}
                r="3"
                stroke={colors[points[dotInfo[1]].color]}
                fill="none"
              />
            {:else}
              <path
                class="line"
                fill={colors[i]}
                stroke={colors[i]}
                d={subsetArea}
                fill-opacity={fillOpacity}
                stroke-width={strokeWidth}
                stroke-linecap={strokeLinecap}
                stroke-linejoin={strokeLinejoin}
              />
            {/if}
          </g>
        {/if}
      {/each}
    {:else if index == 1}
      {#each areas as subsetArea, i}
        {#if i > 0}
          <g
            class="chartlines"
            pointer-events="none"
            in:fly={{ y: 10, duration: 500, easing: cubicOut }}
            out:fly={{ y: -{ y }, duration: 675 }}
          >
            {#if dotInfo}
              <path
                class="line"
                fill={colors[i]}
                fill-opacity={points[dotInfo[1]].color === i ? "0.5" : "0.1"}
                stroke={colors[i]}
                d={subsetArea}
              />
              <circle
                cx={xScale(points[dotInfo[1]].x)}
                cy={yScale(points[dotInfo[1]].y)}
                r="3"
                stroke={colors[points[dotInfo[1]].color]}
                fill="none"
              />
            {:else}
              <path
                class="line"
                fill={colors[i]}
                stroke={colors[i]}
                d={subsetArea}
                fill-opacity={fillOpacity}
                stroke-width={strokeWidth}
                stroke-linecap={strokeLinecap}
                stroke-linejoin={strokeLinejoin}
              />
            {/if}
          </g>
        {/if}
      {/each}
    {:else}
      {#each areas as subsetArea, i}
        {#if i == 1}
          <g
            class="chartlines"
            pointer-events="none"
            in:fly={{ y: 10, duration: 500, easing: cubicOut }}
            out:fly={{ y: -{ y }, duration: 675 }}
          >
            {#if dotInfo}
              <path
                class="line"
                fill={colors[i]}
                fill-opacity={points[dotInfo[1]].color === i ? "0.5" : "0.1"}
                stroke={colors[i]}
                d={subsetArea}
              />
              <circle
                cx={xScale(points[dotInfo[1]].x)}
                cy={yScale(points[dotInfo[1]].y)}
                r="3"
                stroke={colors[points[dotInfo[1]].color]}
                fill="none"
              />
            {:else}
              <path
                class="line"
                fill={colors[i]}
                stroke={colors[i]}
                d={subsetArea}
                fill-opacity={fillOpacity}
                stroke-width={strokeWidth}
                stroke-linecap={strokeLinecap}
                stroke-linejoin={strokeLinejoin}
              />
            {/if}
          </g>
        {/if}
      {/each}
    {/if}

    <!-- Y-axis and horizontal grid lines -->
    <g
      class="y-axis"
      transform="translate({marginLeft}, 0)"
      pointer-events="none"
    >
      <path
        class="domain"
        stroke="white"
        d="M{insetLeft}, {marginTop} V{height - marginBottom + 6}"
      />
      {#each yTicks as tick, i}
        <g class="tick" transform="translate(0, {yScale(tick)})">
          <line class="tick-start" x1={insetLeft - 6} x2={insetLeft} />
          {#if horizontalGrid}
            <line
              class="tick-grid"
              x1={insetLeft}
              x2={width - marginLeft - marginRight}
            />
          {/if}
          <text text-align="right" x="-{marginLeft}" y="5"
            >{tick * 100 + yFormat}</text
          >
        </g>
      {/each}
      <text style="fill: var(--pl-white);" x="-{marginLeft}" y={marginTop - 60}
        >{yLabel}</text
      >
    </g>
    <!-- X-axis and vertical grid lines -->
    <g
      class="x-axis"
      transform="translate(0,{height - marginBottom - insetBottom})"
      pointer-events="none"
    >
      <path
        class="domain"
        stroke="white"
        d="M{marginLeft},0.5 H{width - marginRight}"
      />
      {#each xTicks as tick, i}
        <g class="tick" transform="translate({xScale(tick)}, 0)">
          <line class="tick-start" stroke="black" y2="6" />
          {#if verticalGrid}
            <line class="tick-grid" y2={-height} />
          {/if}
          <text font-size="8px" x={-marginLeft / 4} y="20"
            >{xTicksFormatted[i] + xFormat}</text
          >
        </g>
      {/each}
      <text x={width - marginLeft - marginRight - 40} y={marginBottom}
        >{xLabel}</text
      >
    </g>

    {#each pointsScaled as point, i}
      <path
        stroke="none"
        fill-opacity="0"
        class="voronoi-cell"
        d={voronoiGrid.renderCell(i)}
        on:mouseover={(e) => (dotInfo = [point, i, e])}
        on:focus={(e) => (dotInfo = [point, i, e])}
      />
    {/each}
  </svg>
  <span
    style="font-family: var(--pl-sans);font-size:0.7rem; color:var(--pl-grey); padding-top:1rem;"
  >
    Source: <a
      href="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/textiles-material-specific-data"
      >American Apparel and Footwear Association, International Trade
      Commission, the U.S. Department of Commerce's Office of Textiles and
      Apparel, and the Council for Textile Recycling.</a
    ></span
  >
</div>

<!-- Tooltip -->
{#if dotInfo}
  <div
    class="tooltip"
    style="position:absolute; left:{dotInfo[2].clientX + 12}px; top:{dotInfo[2]
      .clientY +
      12}px; pointer-events:none; background-color:{tooltipBackground}; color:{tooltipTextColor}"
  >
    {subsets ? subsets[points[dotInfo[1]].color] : ""}:
    {points[dotInfo[1]].x.getFullYear()}: {points[dotInfo[1]].y.toFixed(
      2
    )}{yFormat}
  </div>
{/if}

<style>
  .chart-container {
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-left: 8 0px;
  }
  svg {
    max-width: 100%;
    height: auto;
    height: "intrinsic";
    margin: auto;
  }
  path {
    fill: "green";
  }
  .y-axis {
    font-size: "10px";
    font-family: sans-serif;
    text-anchor: "end";
  }
  .x-axis {
    font-size: "10px";
    font-family: sans-serif;
    text-anchor: "end";
  }
  .tick {
    opacity: 1;
  }
  .tick-start {
    stroke: white;
    stroke-opacity: 1;
  }
  .tick-grid {
    stroke: white;
    stroke-opacity: 0.2;
    font-size: "11px";
    color: white;
  }
  .tick text {
    fill: white;
    font-size: 1rem;
    font-family: var(--pl-sans);
    text-anchor: start;
  }

  .tooltip {
    border-radius: 5px;
    padding: 5px;
    /* box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px; */
  }
  a {
    color: var(--pl-white);
  }
  a:hover {
    color: var(--pl-green);
  }
</style>
