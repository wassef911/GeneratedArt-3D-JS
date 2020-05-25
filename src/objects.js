import * as THREE from "three";
import random from "canvas-sketch-util/random";
import palettes from "nice-color-palettes";

export default (scene) => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const palette = random.pick(palettes);

  for (let i = 0; i < 15; i++) {
    const material = new THREE.MeshStandardMaterial({
      color: random.pick(palette),
    });

    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(
      random.range(0.1, 0.5),
      random.range(0.1, 0.5),
      random.range(0.1, 0.5)
    );
    mesh.scale.multiplyScalar(random.range(0.01, 0.2));

    scene.add(mesh);
  }
};
