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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M13 17a4 4 0 1 0 8 0"}"></path><circle cx="${"6"}" cy="${"16"}" r="${"3"}"></circle><circle cx="${"11"}" cy="${"7"}" r="${"4"}"></circle><path d="${"M7 7c0 3 2 5 2 9m6-9c0 4-2 6-2 10"}"></path></svg>`;
});
export {
  Component as default
};
