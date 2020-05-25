import * as THREE from "three";

export default (scene) => {
  //ambient light
  scene.add(new THREE.AmbientLight("white", 0.65));
  const light = new THREE.DirectionalLight("white", 1);
  light.position.set(1, 4, 2);
  scene.add(light);
};
