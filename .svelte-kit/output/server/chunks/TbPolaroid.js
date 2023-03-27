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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><rect x="${"4"}" y="${"4"}" rx="${"2"}"></rect><path d="${"M4 16h16M4 12l3-3c.928-.893 2.072-.893 3 0l4 4"}"></path><path d="${"m13 12 2-2c.928-.893 2.072-.893 3 0l2 2m-6-5h.01"}"></path></svg>`;
});
export {
  Component as default
};
