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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M15 6h.01"}"></path><rect x="${"3"}" y="${"3"}" rx="${"3"}"></rect><path d="${"m3 13 4-4a3 5 0 0 1 3 0l4 4"}"></path><path d="${"m13 12 2-2a3 5 0 0 1 3 0l3 3M8 21h.01M12 21h.01M16 21h.01"}"></path></svg>`;
});
export {
  Component as default
};
