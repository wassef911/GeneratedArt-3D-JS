import * as THREE from "three";
import random from "canvas-sketch-util/random";

const Cube = new THREE.BoxGeometry(1, 1, 1);

export default (palette, scene) => {
  for (let i = 0; i < 15; i++) {
    const material = new THREE.MeshStandardMaterial({
      color: random.pick(palette),
    });

    const mesh = new THREE.Mesh(Cube, material);

    mesh.position.set(
      random.range(0.1, 1),
      random.value(),
      random.range(0.1, 1)
    );
    mesh.scale.multiplyScalar(random.range(0.01, 0.2));

    scene.add(mesh);
  }
};
