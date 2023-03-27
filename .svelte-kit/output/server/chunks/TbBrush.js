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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M3 21v-4a4 4 0 1 1 4 4H3"}"></path><path d="${"M21 3A16 16 0 0 0 8.2 13.2M21 3a16 16 0 0 1-10.2 12.8"}"></path><path d="${"M10.6 9a9 9 0 0 1 4.4 4.4"}"></path></svg>`;
});
export {
  Component as default
};
