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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m13.5 14.6 3 5.19A9 9 0 0 0 21 12h-6a3 3 0 0 1-1.5 2.6m0-5.2 3-5.19a9 9 0 0 0-9 0l3 5.19a3 3 0 0 1 3 0m-3 5.2-3 5.19A9 9 0 0 1 3 12h6a3 3 0 0 0 1.5 2.6"}"></path></svg>`;
});
export {
  Component as default
};
