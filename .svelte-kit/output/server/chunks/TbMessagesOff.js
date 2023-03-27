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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m3 3 18 18M11 11a1 1 0 0 1-1-1m0-3.968V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10l-3-3h-3m-1 4v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2"}"></path></svg>`;
});
export {
  Component as default
};
