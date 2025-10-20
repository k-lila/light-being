import * as THREE from "three";
import customCamera from "./src/camera.js";
import generateBody from "./src/body/generatebody.js";
import FPS from "./src/utils/fps.js";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function main() {
  const rad = (Math.PI * 2) / 360;
  const canvas = document.querySelector("#sol");
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  const camera = customCamera(1500, 0, 500);
  // camera.position.z = 1000;
  camera.lookAt(0, 0, 0);
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 1, 6000);

  const body = generateBody(100, 100, 2);
  body.forEach((ring, i) => {
    ring.forEach((piece, j) => {
      scene.add(piece);
    });
  });

  renderer.render(scene, camera);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1, 0);
  controls.update();

  let counter = 0;
  function animate() {
    const waveSpeed = 0.02;
    const waveOffSet = 0.05;
    const waveAmplitude = 0.8;
    body.forEach((ring, i) => {
      const wavePhase =
        Math.sin(counter * waveSpeed - i * waveOffSet) * waveAmplitude;
      ring.forEach((piece, j) => {
        piece.material.uniforms.uTime.value += 1;
        piece.position.z += wavePhase;
        if (wavePhase > 0) {
          piece.position.z += wavePhase;
        }
      });
    });
    camera.position.z += 0.5;
    renderer.render(scene, camera);
    FPS();
    requestAnimationFrame(animate);
    counter++;
  }
  animate();
}

main();
