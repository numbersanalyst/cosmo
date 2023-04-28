import * as THREE from 'three';

const createRing = (rInner, rOuter, tSeg, mapUrl) => {
  const ringGeo = new THREE.RingGeometry(rInner, rOuter, tSeg).rotateX(300);
  if (mapUrl) {
    var ringMat = new THREE.MeshStandardMaterial({
      map: mapUrl,
      side: THREE.DoubleSide,
      transparent: true,
    });
  } else {
    var ringMat = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
    });
  }
  return new THREE.Mesh(ringGeo, ringMat);
};

export default createRing;