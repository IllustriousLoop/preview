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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M22 9 12 5l-2.136.854M7 7 2 9l10 4 .697-.279m2.878-1.151L22 9v6"}"></path><path d="${"M6 10.6V16c0 1.657 2.686 3 6 3 2.334 0 4.357-.666 5.35-1.64M18 14v-3.4M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
