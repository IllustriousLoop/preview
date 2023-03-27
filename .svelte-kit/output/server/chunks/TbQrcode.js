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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><rect x="${"4"}" y="${"4"}" rx="${"1"}"></rect><path d="${"M7 17v.01"}"></path><rect x="${"14"}" y="${"4"}" rx="${"1"}"></rect><path d="${"M7 7v.01"}"></path><rect x="${"4"}" y="${"14"}" rx="${"1"}"></rect><path d="${"M17 7v.01M14 14h3m3 0v.01M14 14v3m0 3h3m0-3h3m0 0v3"}"></path></svg>`;
});
export {
  Component as default
};
