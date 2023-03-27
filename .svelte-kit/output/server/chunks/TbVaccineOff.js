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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m17 3 4 4m-2-2-4.5 4.5m-3-3 6 6m-1-1-.5.5m-2 2-4 4H6v-4l4-4m2-2 .5-.5m-5 5L9 14m-6 7 3-3M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
