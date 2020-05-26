import random from "canvas-sketch-util/random";
import palettes from "nice-color-palettes";
import MakeCube from "./cube";
import MakeOctaherdon from "./octahedron";

export default (scene) => {
  const palette = random.pick(palettes);
  MakeCube(palette, scene);
  MakeOctaherdon(palette, scene);
};
