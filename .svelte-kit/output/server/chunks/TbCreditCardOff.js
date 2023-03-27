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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m3 3 18 18M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1-.128.87m-2.002 2.002A3 3 0 0 1 18 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 2.124-2.87M3 11h8m4 0h6M7 15h.01M11 15h2"}"></path></svg>`;
});
export {
  Component as default
};
