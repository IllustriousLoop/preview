import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { stroke: "currentColor" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" },
      { "stroke-width": "2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m3 3 18 18M8.469 8.46a5 5 0 0 0 7.058 7.084m1.386-2.608a5 5 0 0 0-5.826-5.853M12 7V3m-1 0h2m2.536 5.464 2.828-2.828m-.707-.707 1.414 1.414M17 12h4m0-1v2m-2.636 5.364-.707.707M12 17v4m1 0h-2m-2.536-5.464-2.828 2.828m.707.707L4.93 17.657M7 12H3m0 1v-2m2.636-5.364-.707.707"}"></path></svg>`;
});
export {
  Component as default
};
