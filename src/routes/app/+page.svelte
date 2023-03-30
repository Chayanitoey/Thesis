<script lang="ts">
  import * as Threlte from "@threlte/core";
  import * as Three from "three";
  import * as Utils from "three/src/math/MathUtils";
</script>

<div class="scene">
  <Threlte.Canvas>
    <!-- Camera -->
    <Threlte.PerspectiveCamera position={{ x: 20, y: 20, z: 20 }} fov={50}>
      <!-- Controls -->
      <Threlte.OrbitControls autoRotate />
    </Threlte.PerspectiveCamera>

    <!-- Lights the scene equally -->
    <Threlte.AmbientLight color="white" intensity={0.2} />

    <!-- Light that casts a shadow -->
    <Threlte.DirectionalLight
      color="white"
      intensity={2}
      position={{ x: 10, y: 10 }}
      shadow={{
        camera: { top: 8 },
      }}
    />

    <!-- Sphere -->
    <Threlte.Mesh
      geometry={new Three.SphereGeometry(4, 64, 64)}
      material={new Three.MeshStandardMaterial({ color: "white" })}
      position={{ y: 4 }}
      receiveShadow
      castShadow
    />

    <!-- Floor -->
    <Threlte.Mesh
      geometry={new Three.PlaneGeometry(20, 20)}
      material={new Three.MeshStandardMaterial({
        color: "white",
        side: Three.DoubleSide,
      })}
      rotation={{ x: Utils.DEG2RAD * 90 }}
      receiveShadow
    />
  </Threlte.Canvas>
</div>

<style>
  .scene {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background: radial-gradient(hsl(220 14% 20%), hsl(220 20% 10%));
    background-attachment: fixed;
  }
</style>
