import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import saturnPath from '/textures/8k_saturn.jpg';
import saturnRingPath from '/textures/4k_saturn_ring.png';
import starsPath from '/textures/8k_stars_milky_way.jpg';

const textureLoader = new THREE.TextureLoader();
const textures = {
  saturn: textureLoader.load(saturnPath),
  saturnRing: textureLoader.load(saturnRingPath),
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

const createSphere = (r, wSeg, hSeg, mapUrl, backSide) => {
  const sphereGeo = new THREE.SphereGeometry(r, wSeg, hSeg);
  const sphereMat = new THREE.MeshStandardMaterial({ map: mapUrl });
  if (backSide) {
    sphereMat.side = THREE.BackSide;
    sphereMat.transparent = true;
    sphereMat.opacity = 0.8;
  }
  return new THREE.Mesh(sphereGeo, sphereMat);
};

const createRing = (mapUrl) => {
  const ringGeo = new THREE.RingGeometry(6, 10, 60);
  const ringMat = new THREE.MeshStandardMaterial({
    map: mapUrl,
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: false,
  });
  return new THREE.Mesh(ringGeo, ringMat);
};

const createPointLight = (c, i) => {
  return new THREE.PointLight(c, i);
};

const saturn = createSphere(5, 50, 50, textures.saturn);
const saturnRing = createRing(textures.saturnRing);
const background = createSphere(100, 50, 50, textures.stars, true);
const light1 = createPointLight(colorLight, 1);
const light2 = createPointLight(colorLight, 0.1);

saturnRing.rotation.x = 1.5;
background.rotation.x = 0.5;
light1.position.set(-50, 50, 30);
light2.position.set(0, 0, 30);

camera.add(light1, light2);
saturn.add(saturnRing);
scene.add(saturn, background, camera);

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
