<div class="box">
</div>


<style lang="scss">


.box {
  background: hsl(0, 0%, 100%);
  width: 230px;
  height: 263px;
  position: relative;
  border-radius: 40px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.01);

  &::after {
    position: absolute;
    content: "";
    // top: 15px;
    left: 0;
    right: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    transform: scale(0.9) translateZ(0);
    filter: blur(15px);
    background: radial-gradient(50% 50% at 50% 50%, #7AFF7F 0%, rgba(217, 217, 217, 0) 100%);
    background-size: 200% 200%;
    animation: animateGlow 5s linear infinite;
    animation-direction: alternate;
  }
}

@keyframes animateGlow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 50% 0%;
  }
}


</style>