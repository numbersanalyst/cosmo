import * as THREE from 'three';

const createAmbientLight = (c, i) => {
  return new THREE.AmbientLight(c, i);
};

export default createAmbientLight;