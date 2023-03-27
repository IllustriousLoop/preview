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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M10 15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"}"></path><rect x="${"13"}" y="${"4"}" rx="${"1"}"></rect><path d="${"M7 19h3m7-11v.01"}"></path><circle cx="${"17"}" cy="${"16"}" r="${"1"}"></circle><path d="${"M9 15v4"}"></path></svg>`;
});
export {
  Component as default
};
