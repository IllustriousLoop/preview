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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M14 10h1c1 0 1 1 2.016 3.527C18 16 18 17 19 17h1"}"></path><path d="${"M13 17c1.5 0 3-2 4-3.5s2.5-3.5 4-3.5M3 19c0 1.5.5 2 2 2s2-4 3-9 1.5-9 3-9 2 .5 2 2m-8 7h6"}"></path></svg>`;
});
export {
  Component as default
};
