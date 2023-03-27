import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { stroke: "currentColor" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" },
      { "stroke-width": "2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m17 1 4 4-4 4"}"></path><path d="${"M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4"}"></path><path d="${"M21 13v2a4 4 0 0 1-4 4H3"}"></path></svg>`;
});
export {
  Component as default
};
