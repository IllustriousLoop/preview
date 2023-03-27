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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"5"}" cy="${"16"}" r="${"3"}"></circle><circle cx="${"19"}" cy="${"16"}" r="${"3"}"></circle><path d="${"M7.5 14h5l4-4H6m1.5 4 4-4"}"></path><path d="${"M13 6h2l1.5 3 2 4"}"></path></svg>`;
});
export {
  Component as default
};
