import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let scene, camera, controls, renderer;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 50);
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const createSphere = (r, wSeg, hSeg, mapUrl, bMapUrl = null) => {
    const sphereGeo = new THREE.SphereGeometry(r, wSeg, hSeg);
    const sphereMat = new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(mapUrl) });
    if (bMapUrl != null) { sphereMat.bumpMap = new THREE.TextureLoader().load(bMapUrl); }
    return new THREE.Mesh(sphereGeo, sphereMat);
};

const createPointLight = (c, i) => {
    return new THREE.PointLight(c, i);
};

const textures = [
    "../assets/textures/land_ocean_ice_cloud_4096_custom.png",
    "../assets/textures/land_ocean_ice_8192.png",
    "../assets/textures/gebco_08_rev_elev_8192_custom.png"
];

const earthTop = createSphere(5, 50, 50, textures[0]);
const earthUnder = createSphere(5, 50, 50, textures[1], textures[2]);
const light = createPointLight(0xffffff, 1);

earthUnder.visible = false;
light.position.set(-50, 50, 25);

scene.add(earthTop, earthUnder, camera);
camera.add(light);

controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 10;
controls.maxDistance = 250;

let change = false;

const loop = () => {
    if (controls.getDistance() > 30) {
        controls.rotateSpeed = 1;

        if (change == true) {
            earthTop.visible = true;
            earthUnder.visible = false;

            change = false;
        }
    }
    else if (controls.getDistance() > 20) {
        controls.rotateSpeed = 0.4;
        
        if (change == false) {
            earthTop.visible = false;
            earthUnder.visible = true;

            change = true;
        }
    }
    else {
        controls.rotateSpeed = 0.2; 
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