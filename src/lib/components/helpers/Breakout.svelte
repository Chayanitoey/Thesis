<div class="breakout">
  <h3>This story is not available on small screens yet!</h3>
  <p>
    Sorry, this story doesn't work on small screens and touch devices yet. You
    should view this story on a desktop computer, laptop, or any device at least
    the size of a horizontal iPad. Meanwhile, you can still visit the beta for
    the perfect laundry day app instead!
  </p>
  <button class="btn">
    <a href="https://app.perfectlaundryday.com/">
      Visit Perfect Laundry App Beta
    </a>
  </button>
</div>

<style>
  h3 {
    font-family: var(--pl-serif);
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
    align-items: left;
    text-align: left;
    letter-spacing: 0.01em;
    color: var(--pl-green);
  }
  p {
    font-family: var(--pl-sans);
    justify-content: left;
    align-items: left;
    color: var(--pl-white);
    font-weight: 400;
    font-style: normal;
    font-size: 0.8em;
    line-height: 1rem;
    letter-spacing: 0.07em;
    padding-bottom: 10px;
    width: 60vw;
    /* padding-right: 10%;
    padding-left: 10%;  */
  }
  .breakout {
    margin-top: 30vh;
    max-width: 80vw;
    margin-left: 10vw;
  }
  a {
    color: var(--pl-black);
    text-decoration-line: underline;
    font-weight: 400;
  }
  a:hover {
    color: var(--pl-black);
    text-decoration-line: underline;
  }

  .btn {
    align-items: center;
    appearance: none;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 0.375em;
    margin-right: 1rem;
    box-shadow: none;
    box-sizing: border-box;
    color: var(--pl-black);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--pl-sans);
    font-size: 1rem;
    height: 2em;
    justify-content: center;
    line-height: 1;
    padding: calc(0.5em - 1px) 1em;
    position: relative;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
  }

  .btn:active {
    /* border-color: #434242; */
    background-color: var(--pl-green);
    outline: 0;
  }

  .btn:focus {
    border-color: #485fc7;
    background-color: var(--pl-green);
    outline: 0;
  }

  .btn:hover {
    background-color: var(--pl-green);
    border-color: #b5b5b5;
  }

  .btn:focus:not(:active) {
    box-shadow: rgba(72, 95, 199, 0.25) 0 0 0 0.125em;
  }
</style>
