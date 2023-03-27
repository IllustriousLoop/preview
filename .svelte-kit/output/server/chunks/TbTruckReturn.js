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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"7"}" cy="${"17"}" r="${"2"}"></circle><circle cx="${"17"}" cy="${"17"}" r="${"2"}"></circle><path d="${"M5 17H3V6a1 1 0 0 1 1-1h9v6H8l2 2m0-4-2 2m1 6h6M13 6h5l3 5v6h-2"}"></path></svg>`;
});
export {
  Component as default
};
