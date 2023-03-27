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
  )}><path d="${"m128 37 32-6c16 112 32 150 96 150s80-38 96-150l32 6s-16 160 32 208c0 96 0 112 16 224-112 16-240 16-352 0 16-112 16-128 16-224 48-48 32-208 32-208z"}"></path></svg>`;
});
export {
  Component as default
};
