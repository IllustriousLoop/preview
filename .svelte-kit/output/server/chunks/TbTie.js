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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m12 22 4-4-2.5-11 .993-2.649A1 1 0 0 0 13.557 3h-3.114a1 1 0 0 0-.936 1.351L10.5 7 8 18l4 4z"}"></path><path d="${"M10.5 7h3l5 5.5"}"></path></svg>`;
});
export {
  Component as default
};
