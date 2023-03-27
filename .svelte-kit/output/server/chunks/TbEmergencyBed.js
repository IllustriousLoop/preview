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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"16"}" cy="${"18"}" r="${"2"}"></circle><circle cx="${"8"}" cy="${"18"}" r="${"2"}"></circle><path d="${"m4 8 2.1 2.8A3 3 0 0 0 8.5 12H20M10 6h4m-2-2v4m0 4v2l-2.5 2.5m5 0L12 14"}"></path></svg>`;
});
export {
  Component as default
};
