import * as THREE from 'three';

const createSphere = (r, wSeg, hSeg, mapUrl, bMapUrl, backSide) => {
  const sphereGeo = new THREE.SphereGeometry(r, wSeg, hSeg);
  const sphereMat = new THREE.MeshStandardMaterial({ map: mapUrl });
  if (bMapUrl) {
    sphereMat.bumpMap = bMapUrl;
    sphereMat.bumpScale = 0.1;
  }
  if (backSide) {
    sphereMat.side = THREE.BackSide;
    sphereMat.transparent = true;
    sphereMat.opacity = 0.8;
  }
  return new THREE.Mesh(sphereGeo, sphereMat);
};

export default createSphere;