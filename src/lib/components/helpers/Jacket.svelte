<script lang="ts">
  import * as Threlte from "@threlte/core";
  import * as Three from "three";
  import {
    AmbientLight,
    OrbitControls,
    PerspectiveCamera,
  } from "@threlte/core";
  import { GLTF } from "@threlte/extras";
  import { Canvas } from "@threlte/core";
</script>

<div class="scene">
  <Threlte.Canvas>
    <PerspectiveCamera position={{ x: 2, y: 17, z: 3 }} fov={25}>
      <OrbitControls autoRotate enableDamping />
    </PerspectiveCamera>

    <AmbientLight />

    <GLTF url="/models/jacket.gltf" position={{ y: 1 }} scale={3} />
  </Threlte.Canvas>
</div>

<style>
  .scene {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    /* background: radial-gradient(hsl(220 14% 20%), hsl(220 20% 10%)); */
    /* background-attachment: fixed; */
  }
</style>
