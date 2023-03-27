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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M22 12a10 10 0 1 0-20 0"}"></path><path d="${"M22 12c0-1.66-1.46-3-3.25-3-1.8 0-3.25 1.34-3.25 3 0-1.66-1.57-3-3.5-3s-3.5 1.34-3.5 3c0-1.66-1.46-3-3.25-3C3.45 9 2 10.34 2 12m0 0 10 10-3.5-10m7 0L12 22l10-10"}"></path></svg>`;
});
export {
  Component as default
};
