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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M10 6h5a3 3 0 0 1 3 3v5m-.882 3.125A2.99 2.99 0 0 1 15 18H9a3 3 0 0 1-3-3V9c0-.828.336-1.578.878-2.121"}"></path><path d="${"M9 18v3h6v-3M9 5V3h6v3M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
