import * as THREE from "three";

export default (context) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas,
  });

  // WebGL background color
  renderer.setClearColor("hsl(0,0%,85%)", 1);
  // Setup camera
  const camera = new THREE.OrthographicCamera(50, 1, 0.01, 100);
  // Setup scene
  const scene = new THREE.Scene();

  return { renderer, camera, scene };
};
