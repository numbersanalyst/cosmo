import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let scene, camera, controls, renderer;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 50);
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const texture = new THREE.TextureLoader().load("../assets/textures/8k_earth_daymap.jpg");
const material = new THREE.MeshPhongMaterial( { map: texture, shininess: 0} );

const createSphere = (r = 1, c = 0xffffff) => {
    const sphereGeo = new THREE.SphereGeometry(r, 20, 20);
    const sphereMat = material;
    return new THREE.Mesh(sphereGeo, sphereMat);
}

const createPointLight = (i = 1, c = 0xffffff) => {
    return new THREE.PointLight(c, i);
}

const earth = createSphere(4);
const light = createPointLight();

light.position.set(-50,50,30);

scene.add(earth, camera);
camera.add(light);

controls = new OrbitControls(camera, renderer.domElement);

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