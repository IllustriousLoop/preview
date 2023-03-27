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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M17.464 6.518a6.001 6.001 0 1 0-3.023 7.965"}"></path><path d="${"M17.482 17.464a6.001 6.001 0 1 0-7.965-3.023"}"></path><path d="${"M6.54 17.482a6.001 6.001 0 1 0 3.024-7.965"}"></path><path d="${"M6.518 6.54a6.001 6.001 0 1 0 7.965 3.024"}"></path></svg>`;
});
export {
  Component as default
};
