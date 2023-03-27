import * as THREE from "three";

let scene, camera, renderer;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
  20,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.set(0, 0, 250);
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const createPointLight = (color = 0xffffff, i = 1) => {
  return new THREE.PointLight(color, i);
};

const l1 = createPointLight();
l1.position.set(0, 0, 40);
scene.add(l1);

const createTorus = (c = 0xffffff, r = 5, t = 0.7, tSeg = 180, rSeg = 20, p = 3, q = 7) => {
  const torusGeo = new THREE.TorusKnotGeometry(r, t, tSeg, rSeg, p, q);
  const torusMat = new THREE.MeshPhongMaterial({ color: c, shininess: 5 });
  return new THREE.Mesh(torusGeo, torusMat);
};

const torusList = [];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 8; j++) {
    const newTorus = createTorus();
    newTorus.position.set(20 * j - 70, 18 * i-27, 0);
    torusList.push(newTorus);
  }
}

torusList.forEach(torus => {
  scene.add(torus);
});

const loop = () => {
  torusList.forEach((torus, i) => {
    torus.rotation.x += 0.001 * i;
    torus.rotation.y += 0.001 * i;
    torus.rotation.z += 0.001 * i;
  });
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}
loop();

const handleResize = () => {
  const { innerWidth, innerHeight } = window;
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", handleResize);

document.body.onload = () => {
  document.querySelector("p").style.opacity = 0;
};

document.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 27) {
    history.back();
  }
});