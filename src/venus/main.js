import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import createSphere from '/common/createSphere.js';
import createPointLight from '/common/createPointLight';

import venusAtmoPath from '/textures/4k_venus_atmosphere.jpg';
import venusSurfPath from '/textures/8k_venus_surface.jpg';
import starsPath from '/textures/8k_stars_milky_way.jpg';

const textureLoader = new THREE.TextureLoader();
const textures = {
  venusAtmo: textureLoader.load(venusAtmoPath),
  venusSurf: textureLoader.load(venusSurfPath),
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

const rotateBtn = document.querySelector('.rotate-btn');
const initialText = rotateBtn.textContent;
const clickedText = "Wyłącz obracanie";
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

const venusAtmo = createSphere(5, 50, 50, textures.venusAtmo);
const venusSurf = createSphere(5, 50, 50, textures.venusSurf, textures.venusSurf);
const background = createSphere(100, 50, 50, textures.stars, false, true, 'basic');
const light1 = createPointLight(colorLight, 1);
const light2 = createPointLight(colorLight, 0.1);

venusSurf.visible = false;
background.rotation.x = 0.5;
light1.position.set(-50, 50, 30);
light2.position.set(0, 0, 30);

camera.add(light1, light2);
scene.add(venusAtmo, venusSurf, background, camera);

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
  document.querySelector('.date').textContent = new Date().toDateString();
};

document.addEventListener('keydown', (event) => {
  if (event.isComposing || event.keyCode === 27) {
    history.back();
  }
});

const select = document.querySelector('.texture');
select.addEventListener('change', () => {
  if (select.value == 'atmo') {
    venusAtmo.visible = true;
    venusSurf.visible = false;
  }
  else {
    venusSurf.visible = true;
    venusAtmo.visible = false;
  }
});
