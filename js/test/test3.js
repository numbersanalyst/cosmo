import * as THREE from "three";

let scene, camera, renderer;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.0001,
  10000
);
camera.position.set(0, 0, 40);
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const createTorus = (c=0xffffff, r=4.5,t=1,tSeg=180,rSeg=20,p=3,q=7) => {
  const torusGeo = new THREE.TorusKnotGeometry(r, t, tSeg, rSeg, p, q);
  const torusMat = new THREE.MeshBasicMaterial({ color: c});
  return new THREE.Mesh(torusGeo, torusMat);
};

const createPointLight = (color=0xffffff, i=0.4) => {
  return new THREE.PointLight(color, i);
};

const fTorus = createTorus();
scene.add(fTorus);

const l1 = createPointLight();
l1.position.set(20,20,60);
scene.add(l1);

const handleResize = () => {
  const { innerWidth, innerHeight } = window;
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", handleResize);

const loop = () => {
  fTorus.rotation.y += 0.001;
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}
loop();

document.body.onload = () => {
  document.querySelector("p").style.opacity = 0;
};

document.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 27) {
      history.back();
  }
});