import * as THREE from "three";
import random from "canvas-sketch-util/random";
import palettes from "nice-color-palettes";

export default (scene) => {
  const Cube = new THREE.BoxGeometry(1, 1, 1);
  const Octahedron = new THREE.OctahedronGeometry(2, 0);

  const palette = random.pick(palettes);

  for (let i = 0; i < 15; i++) {
    const material = new THREE.MeshStandardMaterial({
      color: random.pick(palette),
    });

    const mesh = new THREE.Mesh(Cube, material);

    mesh.position.set(
      random.range(0.1, 1),
      random.range(0.1, 2),
      random.range(0.1, 1)
    );
    mesh.scale.multiplyScalar(random.range(0.01, 0.2));

    scene.add(mesh);
  }

  for (let i = 0; i < 15; i++) {
    const material = new THREE.MeshStandardMaterial({
      color: random.pick(palette),
    });

    const mesh = new THREE.Mesh(Octahedron, material);

    mesh.position.set(
      random.range(0.1, 1),
      random.range(0.1, 1),
      random.range(0.1, 1)
    );
    mesh.scale.multiplyScalar(0.01);

    scene.add(mesh);
  }
};
