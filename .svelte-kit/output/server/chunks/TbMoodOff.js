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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M5.634 5.638a9 9 0 0 0 12.732 12.724m1.679-2.322A9 9 0 0 0 7.965 3.954M9 10h.01M15 10h.01"}"></path><path d="${"M9.5 15a3.5 3.5 0 0 0 5 0M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
