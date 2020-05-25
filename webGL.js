// Ensure ThreeJS is in global scope for the 'examples/'
import random from "canvas-sketch-util/random";
import palettes from "nice-color-palettes";
global.THREE = require("three");
const canvasSketch = require("canvas-sketch");

const settings = {
  // Make the loop animated
  animate: true,
  // Get a WebGL canvas rather than 2D
  context: "webgl",
};

const sketch = ({ context }) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas,
  });

  // WebGL background color
  renderer.setClearColor("hsl(0,0%,85%)", 1);
  // Setup a camera
  const camera = new THREE.OrthographicCamera(50, 1, 0.01, 100);
  // Setup your scene
  const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const palette = random.pick(palettes);
  for (let i = 0; i < 15; i++) {
    const material = new THREE.MeshStandardMaterial({
      color: random.pick(palette),
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(random.value(), random.value(), random.value());
    mesh.scale.multiplyScalar(random.range(0.01, 0.2));
    scene.add(mesh);
  }
  //ambient light   scene.add(new THREE.AmbientLight("white"));

  const light = new THREE.DirectionalLight("white", 1);
  light.position.set(1, 4, 2);
  scene.add(light);

  // draw each frame
  return {
    // Handle resize events here
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
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
      camera.updateProjectionMatrix();
    },
    // Update & render your scene here
    render({ time }) {
      renderer.render(scene, camera);
    },
    // Dispose of events & renderer for cleaner hot-reloading
    unload() {
      renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);
