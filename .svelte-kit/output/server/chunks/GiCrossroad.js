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
  )}><path d="${"m164 16-32 16 32 32 64 16V32l-64-16zm184 0-64 16v48l64-16 32-32-32-16zM247 32v112h18V32h-18zM16 64l182.7 182.7L96 496h320L313.3 246.7 496 64h-64L256 192 80 64H16z"}"></path></svg>`;
});
export {
  Component as default
};
