// Based on hello roman tutorial
// https://github.com/helloroman

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(24, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const colorBlue = new THREE.Color('hsl(250, 100%, 50%)');
const colorLight = new THREE.Color('hsl(255, 100%, 100%)');

const cubeGeometry = new THREE.BoxGeometry(1, 1.5, 0.9);
const cubeMaterial = new THREE.MeshPhongMaterial({
    color: colorBlue,
    shininess: 100
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
const light = new THREE.PointLight(colorLight, 2);
const light2 = new THREE.PointLight(colorLight, .5);

light.position.set(-40, -20, 20);
light2.position.set(40, 20, 20);

camera.position.z = 10;

cube.rotation.x = 20;
cube.rotation.z = -20;

scene.add(light);
scene.add(light2);
scene.add(cube);

const animate = () =>  {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
}

animate();

document.querySelector('.select-camera').onchange = () => {
    camera.position.z = document.querySelector('.select-camera').value;
}

document.querySelector('.btn-color').onclick = () => {
    cube.material.color = new THREE.Color(0xffffff * Math.random());
}

document.querySelector('.btn-print').onclick = () => {
    window.print();
}