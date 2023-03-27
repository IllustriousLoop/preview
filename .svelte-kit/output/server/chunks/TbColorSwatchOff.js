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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M13 13v4a4 4 0 0 0 6.832 2.825M21 17V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4"}"></path><path d="${"m13 7.35-2-2a2 2 0 0 0-2.11-.461M6.76 6.763 5.344 8.178a2 2 0 0 0 0 2.828l9 9"}"></path><path d="${"M7.3 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12m0-4v.01M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
