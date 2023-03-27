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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m3 3 18 18m-3.331-3.331A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6c.797.036 1.589 0 2.366-.126m3.092-.912A12 12 0 0 0 12 3a12 12 0 0 0 8.5 3 12 12 0 0 1-1.117 9.379"}"></path></svg>`;
});
export {
  Component as default
};
