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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M20.038 16.052A9 9 0 0 0 7.971 3.95M5.638 5.636a9 9 0 1 0 12.73 12.726"}"></path><path d="${"M11.283 11.303a1 1 0 0 0 1.419 1.41M14 10l2-2m-9 4c0-1.386.564-2.64 1.475-3.546m2.619-1.372C11.388 7.028 11.691 7 12 7M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
