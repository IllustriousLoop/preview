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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M11 7h2a2 2 0 0 1 2 2v2m0 4v6l-5-3-5 3V9a2 2 0 0 1 2-2"}"></path><path d="${"M9.265 4A2 2 0 0 1 11 3h6a2 2 0 0 1 2 2v10M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
