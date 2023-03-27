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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M19 8H5a6 6 0 0 0 6 6h2a6 6 0 0 0 5.996-5.775L19 8zm-2 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-2-6 1 2m-7-2-3 6m9-2H7m8-13V4m-3 1V4M9 5V4"}"></path></svg>`;
});
export {
  Component as default
};
