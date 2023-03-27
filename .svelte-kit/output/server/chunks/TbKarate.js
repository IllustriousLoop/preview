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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"18"}" cy="${"4"}" r="${"1"}"></circle><path d="${"m3 9 4.5 1 3 2.5M13 21v-8l3-5.5"}"></path><path d="${"m8 4.5 4 2 4 1 4 3.5-2 3.5"}"></path></svg>`;
});
export {
  Component as default
};
