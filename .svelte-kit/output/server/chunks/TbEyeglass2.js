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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M8 4H6L3 14v2.5M16 4h2l3 10v2.5M10 16h4"}"></path><circle cx="${"17.5"}" cy="${"16.5"}" r="${"3.5"}"></circle><circle cx="${"6.5"}" cy="${"16.5"}" r="${"3.5"}"></circle></svg>`;
});
export {
  Component as default
};
