import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import jupiterPath from '/textures/8k_jupiter.jpg';
import starsPath from '/textures/8k_stars_milky_way.jpg';

const textureLoader = new THREE.TextureLoader();
const textures = {
  jupiter: textureLoader.load(jupiterPath),
  stars: textureLoader.load(starsPath),
};
const colorLight = new THREE.Color('hsl(255, 100%, 100%)');

let scene, camera, controls, renderer;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
  20,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.set(0, 0, 50);

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 10;
controls.maxDistance = 200;

const createSphere = (r, wSeg, hSeg, mapUrl, bMap, backSide) => {
  const sphereGeo = new THREE.SphereGeometry(r, wSeg, hSeg);
  const sphereMat = new THREE.MeshStandardMaterial({ map: mapUrl });
  if (bMap) {
    sphereMat.bumpMap = mapUrl;
    sphereMat.bumpScale = 0.1;
  }
  if (backSide) {
    sphereMat.side = THREE.BackSide;
    sphereMat.transparent = true;
    sphereMat.opacity = 0.8;
  }
  return new THREE.Mesh(sphereGeo, sphereMat);
};

const createPointLight = (c, i) => {
  return new THREE.PointLight(c, i);
};

const jupiter = createSphere(5, 50, 50, textures.jupiter, true);
const background = createSphere(100, 50, 50, textures.stars, false, true);
const light1 = createPointLight(colorLight, 1);
const light2 = createPointLight(colorLight, 0.1);

background.rotation.x = 0.5;
light1.position.set(-50, 50, 30);
light2.position.set(0, 0, 30);

camera.add(light1, light2);
scene.add(jupiter, background, camera);

const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};
loop();

const handleResize = () => {
  const { innerWidth, innerHeight } = window;
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener('resize', handleResize);

document.body.onload = () => {
  document.querySelector('div').style.opacity = 0;
};

setTimeout(() => {
  document.querySelector('div').style.display = 'none';
}, 10000);

document.addEventListener('keydown', (event) => {
  if (event.isComposing || event.keyCode === 27) {
    history.back();
  }
});
