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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M8 8H5a6 6 0 0 0 6 6h2c.316 0 .626-.024.928-.071m2.792-1.22a5.99 5.99 0 0 0 2.276-4.484L19 8h-7m6.814 10.844a2 2 0 1 1-2.64-2.666M9 14l-3 6m9-2H7m8-13V4m-3 1V4M9 5V4M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
