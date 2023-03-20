<div class="footnote">
  <span />
  <h3>Methodology, Sources, and Footnotes</h3>
  <p>
    This project was created by <a href="http://chayanitoey.com"
      >Chay Chayanit Thawaranont</a
    > in support of a graduate school thesis for the Masters of Science in Data Visualization
    at Parsons School of Design, The New School.
  </p>
  <p>
    The data used in this project was mainly collected from various existing
    academic research papers and official laundry care guides. These sources
    include the labeling rule from the Federal Trade Commission's <a
      href="https://www.ftc.gov/business-guidance/resources/clothes-captioning-complying-care-labeling-rule"
      >"Complying with the Care Labeling Rule"
    </a>
    guide, the Consumer Behaviour on Washing Report from Mistra Future Fashion, and
    the EPA Environmental Protection Agency's
    <a
      href="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/textiles-material-specific-data"
    >
      data on textiles in municipal solid waste (MSW)
    </a>. Additionally, many other research papers were used and their direct
    links to the data can be found in the sources section below.
  </p>
  <p>
    This visual essay was built with <a href="https://svelte.dev">Svelte</a>,
    <a href="https://kit.svelte.dev">SvelteKit</a>
    and <a href="https://d3js.org">D3</a> , deployed on
    <a href="https://www.cloudflare.com">Cloudflare</a>. I also used the help of
    the Scroller.svelte library for scroll events, svelte-hamburgers,
    pancake.svelte for Stacked Bar Chart, LayerCake.svelte for dot plot chart,
    and Scroller UI for the database UI components.
  </p>
  <p>
    Sources:
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </p>

  <p>
    Feel free to check out <a href="https://github.com/Chayanitoey/Thesis"
      >my code</a
    >
    or reach out via
    <a href="https://twitter.com/toeycyn?lang=en">twitter</a>/<a
      href="mailto:toeythawaranont@gmail.com">email</a
    > !
  </p>
</div>

<style>
  .footnote {
    margin: auto;
    width: 56vw;
    /* height: 100vh; */
    /* /* padding-left: 4rem; */
    /* padding-right: 5rem; */
    padding-bottom: 20rem;
  }
  span {
    margin: auto;
    position: absolute;
    width: 56vw;
    height: 0px;
    border: 2px solid var(--pl-white);
  }
  h3 {
    font-family: var(--pl-sans);
    padding-top: 6vh;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 29px;
    align-items: left;
    text-align: left;
    letter-spacing: 0.01em;
    color: var(--pl-white);
  }
  p {
    font-family: var(--pl-sans);
    justify-content: left;
    align-items: left;
    color: var(--pl-white);
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.07em;
    padding-bottom: 10px;
    /* padding-right: 10%;
    padding-left: 10%;  */
  }
  a {
    color: var(--pl-green);
    text-decoration-line: underline;
    font-weight: 600;
  }
  a:hover {
    color: var(--pl-white);
    text-decoration-line: underline;
  }
</style>
