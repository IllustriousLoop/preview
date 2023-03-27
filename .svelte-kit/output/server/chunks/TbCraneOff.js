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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M6 21h6m-3 0V9m0-4V3L7.999 4.001M6.005 5.995 3 9h6m4 0h8M9 3l10 6m-2 0v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1-2-2M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
