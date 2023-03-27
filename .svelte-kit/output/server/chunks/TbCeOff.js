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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M11 4a7.99 7.99 0 0 0-2.581.426M5.867 5.864A8 8 0 0 0 11 20m9-16a8.001 8.001 0 0 0-7.29 4.7M12 12a8 8 0 0 0 8 8m-4-8h4M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
