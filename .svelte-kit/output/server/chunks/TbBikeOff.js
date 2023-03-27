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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"5"}" cy="${"18"}" r="${"3"}"></circle><path d="${"M16.437 16.44a3 3 0 0 0 4.123 4.123M22 18a3 3 0 0 0-3-3m-7 4v-4l-3-3 1.665-1.332m2.215-1.772L14 8l2 3h3"}"></path><circle cx="${"17"}" cy="${"5"}" r="${"1"}"></circle><path d="${"m3 3 18 18"}"></path></svg>`;
});
export {
  Component as default
};
