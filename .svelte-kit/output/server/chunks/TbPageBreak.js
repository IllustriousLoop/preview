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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M14 3v4a1 1 0 0 0 1 1h4m0 10v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1m-2-4h3m4.5 0h3m4.5 0h3"}"></path><path d="${"M5 10V5a2 2 0 0 1 2-2h7l5 5v2"}"></path></svg>`;
});
export {
  Component as default
};
