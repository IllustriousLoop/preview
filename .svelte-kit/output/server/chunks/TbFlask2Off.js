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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M6.1 15H15m2.742 2.741A6 6 0 0 1 15.318 21H8.683A6.002 6.002 0 0 1 10 10.34v-.326M10 6V3h4v7m.613.598a6.004 6.004 0 0 1 2.801 2.817M9 3h6M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
