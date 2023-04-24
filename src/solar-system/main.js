import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import createSphere from '/common/createSphere.js';
import createRing from '/common/createRing.js';
import createSphereObj from '/common/createSphereObj.js';
import createPointLight from '/common/createPointLight';
import createAmbientLight from '/common/createAmbientLight';

import sunPath from '/textures/2k_sun.jpg';
import mercuryPath from '/textures/2k_mercury.jpg';
import venusPath from '/textures/2k_venus_atmosphere.jpg';
import earthPath from '/textures/2k_earth_land_ocean_ice_cloud.jpg';
import moonPath from '/textures/2k_moon.jpg';
import marsPath from '/textures/2k_mars.jpg';
import jupiterPath from '/textures/2k_jupiter.jpg';
import saturnPath from '/textures/2k_saturn.jpg';
import saturnRingPath from '/textures/2k_saturn_ring.png';
import uranusPath from '/textures/2k_uranus.jpg';
import neptunePath from '/textures/2k_neptune.jpg';
import starsPath from '/textures/8k_stars_milky_way.jpg';

const textureLoader = new THREE.TextureLoader();
const textures = {
  sun: textureLoader.load(sunPath),
  mercury: textureLoader.load(mercuryPath),
  venus: textureLoader.load(venusPath),
  earth: textureLoader.load(earthPath),
  moon: textureLoader.load(moonPath),
  mars: textureLoader.load(marsPath),
  jupiter: textureLoader.load(jupiterPath),
  saturn: textureLoader.load(saturnPath),
  saturnRing: textureLoader.load(saturnRingPath),
  uranus: textureLoader.load(uranusPath),
  neptune: textureLoader.load(neptunePath),
  stars: textureLoader.load(starsPath),
};

const colorLight = new THREE.Color('hsl(255, 100%, 100%)');
const colorDark = new THREE.Color('hsl(0,	0%,	20%)');

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
controls.minDistance = 10;
controls.maxDistance = 200;

const sun = createSphere(5, 50, 50, textures.sun, textures.sun);
const mercury = createSphere(5, 50, 50, textures.mercury, textures.mercury);
const venus = createSphere(5, 50, 50, textures.venus);
const earth = createSphere(5, 50, 50, textures.earth);
const moon = createSphere(5, 50, 50, textures.moon, textures.moon);
const mars = createSphere(5, 50, 50, textures.mars, textures.mars);
const jupiter = createSphere(5, 50, 50, textures.jupiter, textures.jupiter);
const saturn = createSphere(5, 50, 50, textures.saturn);
const saturnRing = createRing(6, 10, 60, textures.saturnRing);
const uranus = createSphere(5, 50, 50, textures.uranus);
const neptune = createSphere(5, 50, 50, textures.neptune);

const ambientLight = createAmbientLight(colorDark, 1);
scene.add(ambientLight);

const light = createPointLight(colorLight, 1);
light.position.set(0, 0, 100);
// camera.add(light);

scene.add(sun);

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


const rotateBtn = document.querySelector('.rotate-btn');
const initialText = rotateBtn.textContent;
const clickedText = 'Wyłącz obracanie';
const OnClickRotate = () => {
  rotateBtn.addEventListener(
    'click',
    () => {
      controls.autoRotate = true;
      rotateBtn.textContent = clickedText;
      OnClickNoRotate();
    },
    { once: true }
  );
};
const OnClickNoRotate = () => {
  rotateBtn.addEventListener(
    'click',
    () => {
      controls.autoRotate = false;
      rotateBtn.textContent = initialText;
      OnClickRotate();
    },
    { once: true }
  );
};
OnClickRotate();

document.body.onload = () => {
  document.querySelector('.date').textContent = new Date().toDateString();
};

document.addEventListener('keydown', (event) => {
  if (event.isComposing || event.keyCode === 27) {
    history.back();
  }
});
