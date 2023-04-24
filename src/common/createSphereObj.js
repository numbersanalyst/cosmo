import * as THREE from 'three';

const createSphere = (r, wSeg, hSeg, mapUrl, bMapUrl, backSide) => {
  const sphereGeo = new THREE.SphereGeometry(r, wSeg, hSeg);
  const sphereMat = new THREE.MeshStandardMaterial({ map: mapUrl });
  if (bMapUrl) {
    sphereMat.bumpMap = bMapUrl;
    sphereMat.bumpScale = 0.1;
  }
  const mesh = new THREE.Mesh(sphereGeo, sphereMat);
  const obj = new THREE.Object3D();
  obj.add(mesh);
  return { mesh, obj };
};

export default createSphere;