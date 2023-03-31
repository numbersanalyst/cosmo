import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const earthTexture = "../assets/textures/4k_earth_land_ocean_ice_cloud.png";
const earthLandTexture = "../assets/textures/8k_earth_land_ocean_ice.png";
const earthTopography = "../assets/textures/8k_earth_topography.png";

let scene, camera, controls, renderer;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 50);

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 10;
controls.maxDistance = 250;

const createSphere = (r, wSeg, hSeg, mapUrl, bMapUrl) => {
    const sphereGeo = new THREE.SphereGeometry(r, wSeg, hSeg);
    const sphereMat = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(mapUrl) });
    if (bMapUrl) { sphereMat.bumpMap = new THREE.TextureLoader().load(bMapUrl); }
    return new THREE.Mesh(sphereGeo, sphereMat);
};

const createPointLight = (c, i) => {
    return new THREE.PointLight(c, i);
};

const earthTop = createSphere(5, 50, 50, earthTexture);
const earthUnder = createSphere(5, 50, 50, earthLandTexture, earthTopography);
const light = createPointLight(0xffffff, 1);

earthUnder.visible = false;
light.position.set(-50, 50, 25);

camera.add(light);
scene.add(earthTop, earthUnder, camera);

let change = false;

const loop = () => {
    if (controls.getDistance() > 30) {
        if (change == true) {
            controls.rotateSpeed = 1;
            earthTop.visible = true;
            earthUnder.visible = false;

            change = false;
        }
    }
    else if (controls.getDistance() > 20) {
        if (change == false) {
            controls.rotateSpeed = 0.4;
            earthTop.visible = false;
            earthUnder.visible = true;

            change = true;
        }
    }
    else {
        if (change == true) {
            controls.rotateSpeed = 0.2;

            change = false;
        }
    }
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
window.addEventListener("resize", handleResize);