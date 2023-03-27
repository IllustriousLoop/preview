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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M5 10V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4"}"></path><path d="${"M16 15v-2a3 3 0 1 1 3 3v3H5v-3a3 3 0 1 1 3-3v2m0-3h8m-9 7v2m10-2v2"}"></path></svg>`;
});
export {
  Component as default
};
