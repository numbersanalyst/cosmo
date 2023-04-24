import * as THREE from 'three';

const createPointLight = (c, i, d) => {
  return new THREE.PointLight(c, i, d);
};

export default createPointLight;