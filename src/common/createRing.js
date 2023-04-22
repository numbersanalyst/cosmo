import * as THREE from 'three';

const createRing = (rInner, rOuter, tSeg, mapUrl) => {
  const ringGeo = new THREE.RingGeometry(rInner, rOuter, tSeg);
  const ringMat = new THREE.MeshStandardMaterial({
    map: mapUrl,
    side: THREE.DoubleSide,
    transparent: true,
    depthWrite: false,
  });
  return new THREE.Mesh(ringGeo, ringMat);
};

export default createRing;