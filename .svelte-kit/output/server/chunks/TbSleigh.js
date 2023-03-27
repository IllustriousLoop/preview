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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M3 19h15a4 4 0 0 0 4-4m-6 0H7a4 4 0 0 1-4-4V5l1.243 1.243A6 6 0 0 0 8.485 8H12v2a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 1 3 0V12a3 3 0 0 1-3 3zm-1 0v4m-8-4v4"}"></path></svg>`;
});
export {
  Component as default
};
