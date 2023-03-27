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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"5"}" cy="${"18"}" r="${"2"}"></circle><circle cx="${"19"}" cy="${"6"}" r="${"2"}"></circle><path d="${"M19 8v5c0 .594-.104 1.164-.294 1.692m-1.692 2.298A4.978 4.978 0 0 1 14 18h-3l3-3m0 6-3-3m-6-2v-5c0-1.632.782-3.082 1.992-3.995M10 6h3l-3-3m1.501 4.499L13 6M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
