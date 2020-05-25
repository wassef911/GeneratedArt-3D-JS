import * as THREE from "three";

export default (
  renderer,
  camera,
  { pixelRatio, viewportWidth, viewportHeight }
) => {
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(viewportWidth, viewportHeight, false);
  const aspect = viewportWidth / viewportHeight;

  // Ortho zoom
  const zoom = 1.0;

  // Bounds
  camera.left = -zoom * aspect;
  camera.right = zoom * aspect;
  camera.top = zoom;
  camera.bottom = -zoom;

  // Near/Far
  camera.near = -100;
  camera.far = 100;

  // Set position & look at world center
  camera.position.set(zoom, zoom, zoom);
  camera.lookAt(new THREE.Vector3());

  // Update the camera
  camera.updateProjectionMatrix();
};
