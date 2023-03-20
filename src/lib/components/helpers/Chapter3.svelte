<script>
  // @ts-nocheck
  import "$lib/styles/global.css";
</script>

<div class="background-gradient">
  <div class="intro-text">
    <h3>
      <span class="span-line" style="margin-left:-80px;" />
      CHAPTER III
      <span class="span-line" style="margin-left:15px;" />
    </h3>
    <h1>Time To Do Laundry</h1>
    <p>
      One of the most common ways that mishandling laundry can result in
      economic loss is through the premature deterioration of clothing. When
      garments are not washed or dried properly, the fabric can become worn,
      faded, or stretched, leading to a shorter lifespan for the garment. This
      means that individuals must replace their clothing more frequently,
      resulting in additional expenses for new clothing purchases.
    </p>
    <div class="ellipse" />
  </div>
</div>

<style>
  .span-line {
    position: absolute;
    width: 60px;
    margin-top: 13px;
    border: 1px solid var(--pl-black);
  }
  .intro-text {
    /* display: flex; */
    margin: auto;
    padding-top: 45vh;
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
    color: var(--pl-black);
    font-weight: 400;
    font-style: normal;
    font-size: 50px;
    letter-spacing: -0.01em;
  }
  h3 {
    font-family: var(--pl-sans);
    font-weight: 700;
    font-size: 1rem;
    line-height: 29px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: var(--pl-black);
  }
  p {
    font-family: var(--pl-sans);
    justify-content: center;
    align-items: center;
    text-align: justify;
    color: var(--pl-black);
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.01em;
    padding-bottom: 10px;
    padding-right: 10%;
    padding-left: 10%;

    /* max-width: 40vw; */
  }
  .ellipse {
    box-sizing: border-box;
    width: 344px;
    height: 344px;
    /* left: 788px;*/
    top: 465px;
    border: 1px solid var(--pl-black);
    border-radius: 50%;
    margin: auto;
  }

  .background-gradient {
    z-index: 1;
    background: linear-gradient(
      180deg,
      rgba(0, 255, 10, 0) 0%,
      #7aff7f 40%,
      #7aff7f 52%,
      #7aff7f 53.12%,
      #7aff7f 60.12%,
      #7aff7f 65.12%,
      rgba(0, 255, 10, 0) 100%
    );
    width: 100vw;
    height: 170vh;
  }
</style>
