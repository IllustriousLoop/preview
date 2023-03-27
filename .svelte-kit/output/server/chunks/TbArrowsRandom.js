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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M20 21.004h-4v-4m0 4 5-5m-14.5-6.5-3.5-2L5 4M3 7.504l6.83-1.87M4 16.004l4-1 1 4m-1-4-3.5 6m16.5-16-.5 4-4-.5m4 .5-4.5-5.5"}"></path></svg>`;
});
export {
  Component as default
};
