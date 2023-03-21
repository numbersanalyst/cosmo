import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(24, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / window.innerHeight);
document.body.appendChild(renderer.domElement);

const colorBlue = new THREE.Color(0x0000ff);

const cubeGeometry = new THREE.BoxGeometry({
    width: 20,
    height: 10,
    depth: 50
});
const cubeMaterial = new THREE.MeshPhongMaterial({
    color: colorBlue,
    shininess: 80
});
const cube = new THREE.Mesh(cubeGeometry,cubeMaterial)

scene.add(cube);

renderer.render(scene, camera);