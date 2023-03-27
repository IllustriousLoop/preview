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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M11 7h2a6 6 0 0 1 6 6v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6a6 6 0 0 1 6-6zm-1 0V6a2 2 0 1 1 4 0v1m-4 8h4"}"></path></svg>`;
});
export {
  Component as default
};
