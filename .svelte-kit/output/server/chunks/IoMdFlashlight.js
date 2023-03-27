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
  )}><path d="${"m128 298 64 64v118h128V362l64-64V176l-255.2.4L128 298zM234.8 32h42.4v64h-42.4V32zM80 110.4 109.9 80l44.9 45.6-29.9 30.4L80 110.4zm277.1 15.2 45-45.5 29.9 30.4-44.9 45.5-30-30.4z"}"></path></svg>`;
});
export {
  Component as default
};
