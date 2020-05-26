import * as THREE from "three";

export default (scene) => {
  scene.add(new THREE.AmbientLight("white", 0.3));
  const light = new THREE.DirectionalLight("white", 1);
  light.position.set(2, 1, 1);
  scene.add(light);
};
