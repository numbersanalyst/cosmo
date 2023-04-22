import * as THREE from 'three';

const createPointLight = (c, i) => {
  return new THREE.PointLight(c, i);
};

export default createPointLight;