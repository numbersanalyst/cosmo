import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let scene, camera, controls, renderer;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 50);
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const createSphere = (r, wSeg, hSeg, mapUrl) => {
    const sphereGeo = new THREE.SphereGeometry(r, wSeg, hSeg);
    const sphereMat = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(mapUrl), bumpMap: new THREE.TextureLoader().load(mapUrl), bumpScale: 0.05 });
    return new THREE.Mesh(sphereGeo, sphereMat);
}

const createPointLight = (c, i) => {
    return new THREE.PointLight(c, i);
}

const earth = createSphere(5, 50, 50, "../assets/textures/8k_earth_daymap.jpg");
const light = createPointLight(0xffffff, 1);

light.position.set(-50, 50, 25);

scene.add(earth, camera);
camera.add(light);

controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 10;
controls.maxDistance = 250;

const loop = () => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
}
loop();

const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
}
window.addEventListener("resize", handleResize);