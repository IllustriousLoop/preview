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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M8 21h8m-4-6v6M7 3h10l1 7a4.511 4.511 0 0 1-1.053 2.94m-2.386 1.625A7.48 7.48 0 0 1 12 15c-3.314 0-6-1.988-6-5l.5-3.495M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
