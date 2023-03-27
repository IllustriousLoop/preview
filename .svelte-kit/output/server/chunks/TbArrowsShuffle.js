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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m18 4 3 3-3 3m0 10 3-3-3-3"}"></path><path d="${"M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h5m0-10h-5a4.978 4.978 0 0 0-2.998.998M9 16.001A4.984 4.984 0 0 1 6 17H3"}"></path></svg>`;
});
export {
  Component as default
};
