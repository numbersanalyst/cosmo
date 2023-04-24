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
const planets = {
  sun: {
    texture: textureLoader.load(sunPath),
    size: 16,
    position: null,
    selfRotation: 0.004,
    sunRotation: null,
  },
  mercury: {
    texture: textureLoader.load(mercuryPath),
    size: 3.2,
    position: 28,
    selfRotation: 0.004,
    sunRotation: 0.04,
  },
  venus: {
    texture: textureLoader.load(venusPath),
    size: 5.8,
    position: 44,
    selfRotation: 0.002,
    sunRotation: 0.015,
  },
  earth: {
    texture: textureLoader.load(earthPath),
    size: 6,
    position: 62,
    selfRotation: 0.02,
    sunRotation: 0.01,
  },
  moon: {
    texture: textureLoader.load(moonPath),
    size: 1.5,
    position: null,
    selfRotation: null,
    sunRotation: null,
  },
  mars: {
    texture: textureLoader.load(marsPath),
    size: 4,
    position: 78,
    selfRotation: 0.018,
    sunRotation: 0.008,
  },
  jupiter: {
    texture: textureLoader.load(jupiterPath),
    size: 12,
    position: 100,
    selfRotation: 0.04,
    sunRotation: 0.002,
  },
  saturn: {
    texture: textureLoader.load(saturnPath),
    size: 10,
    position: 138,
    selfRotation: 0.038,
    sunRotation: 0.0009,
    ring: {
      texture: textureLoader.load(saturnRingPath),
    }
  },
  uranus: {
    texture: textureLoader.load(uranusPath),
    size: 7,
    position: 176,
    selfRotation: 0.03,
    sunRotation: 0.0004,
  },
  neptune: {
    texture: textureLoader.load(neptunePath),
    size: 7,
    position: 200,
    selfRotation: 0.032,
    sunRotation: 0.0001,
  },
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

const sun = createSphere(planets.sun.size, 50, 50, planets.sun.texture, planets.sun.texture);
const mercury = createSphere(planets.mercury.size, 50, 50, planets.mercury.texture, planets.mercury.texture);
const venus = createSphere(planets.venus.size, 50, 50, planets.venus.texture);
const earth = createSphere(5, 50, 50, planets.earth.texture);
const moon = createSphere(5, 50, 50, planets.moon.texture, planets.moon.texture);
const mars = createSphere(5, 50, 50, planets.mars.texture, planets.mars.texture);
const jupiter = createSphere(5, 50, 50, planets.jupiter.texture, planets.jupiter.texture);
const saturn = createSphere(5, 50, 50, planets.saturn.texture);
const saturnRing = createRing(6, 10, 60, planets.saturn.ring.texture);
const uranus = createSphere(5, 50, 50, planets.uranus.texture);
const neptune = createSphere(5, 50, 50, planets.neptune.texture);

const ambientLight = createAmbientLight(colorDark, 1);
scene.add(ambientLight);

const pointLight = createPointLight(colorLight, 1, 300);
scene.add(pointLight);

scene.add(sun);
scene.add(mercury);
scene.add(venus);
mercury.position.set(0, 0, planets.mercury.position);
venus.position.set(0, 0, planets.venus.position);

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
