import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import createSphere from '../common/createSphere.js';
import createRing from '../common/createRing.js';
import createSphereObj from '../common/createSphereObj.js';
import createPointLight from '../common/createPointLight';
import createAmbientLight from '../common/createAmbientLight';

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
import starsPath from '/textures/8k_stars.jpg';

const textureLoader = new THREE.TextureLoader();
const stars = textureLoader.load(starsPath);
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
    selfRotation: 0.03,
    sunRotation: 0.03,
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
      innerRadius: 12,
      outerRadius: 22,
    },
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
  4000
);
camera.position.set(0, 0, 600);

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxDistance = 1200;

const ambientLight = createAmbientLight(colorDark, 0.8);
scene.add(ambientLight);

const pointLight = createPointLight(colorLight, 1, 400);
scene.add(pointLight);

const sun = createSphere(planets.sun.size, 30, 30, planets.sun.texture, planets.sun.texture, false, 'basic');
const mercury = createSphereObj(planets.mercury.size, 30, 30, planets.mercury.texture, planets.mercury.texture);
const venus = createSphereObj(planets.venus.size, 30, 30, planets.venus.texture);
const earth = createSphereObj(planets.earth.size, 30, 30, planets.earth.texture);
const moon = createSphereObj(planets.moon.size, 30, 30, planets.moon.texture, planets.moon.texture);
const mars = createSphereObj(planets.mars.size, 30, 30, planets.mars.texture, planets.mars.texture);
const jupiter = createSphereObj(planets.jupiter.size, 30, 30, planets.jupiter.texture, planets.jupiter.texture);
const saturn = createSphereObj(planets.saturn.size, 30, 30, planets.saturn.texture);
const saturnRing = createRing(planets.saturn.ring.innerRadius, planets.saturn.ring.outerRadius, 20, planets.saturn.ring.texture);
const uranus = createSphereObj(planets.uranus.size, 30, 30, planets.uranus.texture);
const neptune = createSphereObj(planets.neptune.size, 30, 30, planets.neptune.texture);
const background = createSphere(900, 30, 30, stars, false, true, 'basic');

for (let planetName in planets) {
  const planet = planets[planetName];
  console.log(planetName);
  if (planet.position != null) {
    const ringGeo = new THREE.RingGeometry(planet.position, planet.position + 0.2, planet.position);
    const ringMat = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
    });
    ringGeo.rotateX(300);
    scene.add(new THREE.Mesh(ringGeo, ringMat));
  }
}

earth.mesh.add(moon.obj);
saturn.mesh.add(saturnRing);

mercury.mesh.position.x = planets.mercury.position;
venus.mesh.position.x = planets.venus.position;
earth.mesh.position.x = planets.earth.position;
moon.mesh.position.z = 10;
mars.mesh.position.x = planets.mars.position;
jupiter.mesh.position.x = planets.jupiter.position;
saturn.mesh.position.x = planets.saturn.position;
uranus.mesh.position.x = planets.uranus.position;
neptune.mesh.position.x = planets.neptune.position;
saturnRing.rotateX(300);

scene.add(
  sun,
  mercury.obj,
  venus.obj,
  earth.obj,
  saturn.obj,
  mars.obj,
  jupiter.obj,
  saturn.obj,
  uranus.obj,
  neptune.obj,
  background
);

let speed = 1;

const loop = () => {
  mercury.obj.rotateY(planets.mercury.sunRotation * speed);
  venus.obj.rotateY(planets.venus.sunRotation * speed);
  earth.obj.rotateY(planets.earth.sunRotation * speed);
  moon.obj.rotateY(planets.moon.sunRotation * speed);
  mars.obj.rotateY(planets.mars.sunRotation * speed);
  jupiter.obj.rotateY(planets.jupiter.sunRotation * speed);
  saturn.obj.rotateY(planets.saturn.sunRotation * speed);
  uranus.obj.rotateY(planets.uranus.sunRotation * speed);
  neptune.obj.rotateY(planets.neptune.sunRotation * speed);

  sun.rotateY(planets.sun.selfRotation * speed);
  mercury.mesh.rotateY(planets.mercury.selfRotation * speed);
  venus.mesh.rotateY(planets.venus.selfRotation * speed);
  earth.mesh.rotateY(planets.earth.selfRotation * speed);
  moon.mesh.rotateY(planets.moon.selfRotation * speed);
  mars.mesh.rotateY(planets.mars.selfRotation * speed);
  jupiter.mesh.rotateY(planets.jupiter.selfRotation * speed);
  saturn.mesh.rotateY(planets.saturn.selfRotation * speed);
  uranus.mesh.rotateY(planets.uranus.selfRotation * speed);
  neptune.mesh.rotateY(planets.neptune.selfRotation * speed);

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
  rotateBtn.addEventListener('click', () => {
    controls.autoRotate = true;
    rotateBtn.textContent = clickedText;
    OnClickNoRotate();
  }, { once: true }
  );
};
const OnClickNoRotate = () => {
  rotateBtn.addEventListener('click', () => {
    controls.autoRotate = false;
    rotateBtn.textContent = initialText;
    OnClickRotate();
  }, { once: true }
  );
};

OnClickRotate();

const speedInput = document.querySelector('.speed-input');
const getAnimationSpeed = () => {
  speedInput.addEventListener('change', () => {
    speed = speedInput.value;
  },
  );
}; getAnimationSpeed();

document.body.onload = () => {
  document.querySelector('.date').textContent = new Date().toDateString();
};

document.addEventListener('keydown', (event) => {
  if (event.isComposing || event.keyCode === 27) {
    history.back();
  }
});
