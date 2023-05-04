<script>
  // @ts-nocheck
  import "$lib/styles/global.css";
  import icon from "$lib/images/laundry_icon.png";
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
      Remembering the laundry symbols and sorting clothes by fabric or color can
      be a challenge. That's where the
      <a href="https://app.perfectlaundryday.com/"
        ><span style="font-family:var(--pl-serif) color:var(--pl-black);"
          >Perfect Laundry App</span
        ></a
      > comes in - it takes care of the sorting and gives you personalized advice
      on how to care for your garments. Although the app is still in the testing/beta
      phase, it promises to simplify your laundry routine and keep your clothes looking
      great. If you have any questions or feedback, don't hesitate to reach out!
    </p>
    <a href="https://app.perfectlaundryday.com/">
      <img class="ellipse" src={icon} alt="Perfect Laundry Day Icon" />
    </a>
  </div>
</div>

<style>
  a {
    color: var(--pl-black);
  }
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
    /* box-sizing: border-box; */
    display: flex;
    width: 344px;
    height: 344px;
    justify-content: center;
    align-items: center;
    text-align: justify;
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;

    /* border: 1px solid var(--pl-black);
    border-radius: 50%; */
  }

  .background-gradient {
    z-index: 1;
    background: linear-gradient(
      180deg,
      rgba(0, 255, 10, 0) 0%,
      #7aff7f 53.12%,
      rgba(0, 255, 10, 0) 100%
    );
    width: 100%;
    margin-left: 0;
    height: 150vh;
  }
</style>
