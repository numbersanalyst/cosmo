import * as THREE from 'three';
import createRing from './createRing';

const createPlanet = (scene, info) => {
    const sphereGeo = new THREE.SphereGeometry(info.size, 30, 30);
    const sphereMat = new THREE.MeshStandardMaterial({ map: info.texture });
    const mesh = new THREE.Mesh(sphereGeo, sphereMat);
    if (info.bumpMap) {
        sphereMat.bumpMap = info.texture;
        sphereMat.bumpScale = 0.1;
    }
    if (info.ring) {
        var ringMesh = createRing(info.ring.innerRadius, info.ring.outerRadius, 30, info.ring.texture)
    }
    if (info.position) {
        const obj = new THREE.Object3D;
        mesh.position.x = info.position;
        if (ringMesh) { mesh.add(ringMesh); }
        obj.add(mesh);
        scene.add(obj);
        return { obj, mesh }
    }
    else {
        return mesh;
    }
};

export default createPlanet;