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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M3.6 9H9m4 0h7.4M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684-2.328A9 9 0 0 0 7.95 3.96M3.6 15H15m4 0h1.4"}"></path><path d="${"M8.335 8.388A18.998 18.998 0 0 0 8 12c0 4.97 1.79 9 4 9 1.622 0 3.018-2.172 3.646-5.294M16 12c0-4.97-1.79-9-4-9-1.035 0-1.979.885-2.689 2.337M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
