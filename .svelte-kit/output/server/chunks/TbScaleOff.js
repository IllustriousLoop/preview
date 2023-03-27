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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M7 20h10M9.452 5.425 12 5l6 1m-6-3v5m0 4v8m-3-8L6 6l-3 6a3 3 0 0 0 6 0m9.873 2.871A3.001 3.001 0 0 0 21 12l-3-6-2.677 5.355M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
