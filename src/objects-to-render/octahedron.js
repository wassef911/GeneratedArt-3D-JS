import * as THREE from "three";
import random from "canvas-sketch-util/random";

const Octahedron = new THREE.OctahedronGeometry(2, 0);

export default (palette, scene) => {
  for (let i = 0; i < 15; i++) {
    const material = new THREE.MeshStandardMaterial({
      color: random.pick(palette),
    });

    const mesh = new THREE.Mesh(Octahedron, material);

    mesh.position.set(random.gaussian(), random.value(), random.value());
    mesh.scale.multiplyScalar(0.02);

    scene.add(mesh);
  }
};
