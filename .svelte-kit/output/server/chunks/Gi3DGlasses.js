import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M176 80 39.36 247h77.74L176 144l32 48v-48l-32-64zm160 0-32 64v48l32-48 58.9 103h77.7L336 80zM25 265v174h194.2l36.8-55.2 36.8 55.2H487V265H25zm23 23h176v64l-32 64H48V288zm240 0h176v128H320l-32-64v-64z"}"></path></svg>`;
});
export {
  Component as default
};
