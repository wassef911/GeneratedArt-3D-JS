import eases from "eases";
import canvasSketch from "canvas-sketch";

import Init from "./initScene";
import createObjects from "./objects-to-render/objects";
import createLight from "./light";
import handleResize from "./handleResize";

const settings = {
  dimensions: [2200, 1000],
  fps: 24,
  duration: 5,
  animate: true, // Make the loop animated
  context: "webgl", // Get a WebGL canvas rather than 2D
};

const sketch = ({ context }) => {
  const { renderer, camera, scene } = Init(context);
  createObjects(scene);
  createLight(scene);
  return {
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      handleResize(renderer, camera, {
        pixelRatio,
        viewportWidth,
        viewportHeight,
      });
    },
    render({ playhead }) {
      const time = Math.sin(playhead * Math.PI * 2) * 0.2;
      scene.rotation.y = eases.quadInOut(time);

      renderer.render(scene, camera);
    },
    unload() {
      renderer.dispose();
    },
  };
};

canvasSketch(sketch, settings);
