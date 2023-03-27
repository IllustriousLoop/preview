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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M7.587 7.566a7 7 0 1 0 9.833 9.864m1.35-2.645a7 7 0 0 0-8.536-8.56"}"></path><path d="${"M12 12v1h1M5.261 5.265 4.25 6M17 4l2.75 2M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
