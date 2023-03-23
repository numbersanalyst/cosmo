import * as THREE from "three";

let scene, camera, renderer;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth,
  window.innerHeight,
  0.0001,
  10000
);
camera.position.set(0, 0, 20);
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const handleResize = () => {
  const { innerWidth, innerHeight } = window;
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
};

window.addEventListener("resize", handleResize);

const loop = () => {
  renderer(scene, camera);
  requestAnimationFrame(loop);
}
