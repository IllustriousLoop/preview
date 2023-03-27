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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M11 10V5h-1m8 14v-5h-1"}"></path><rect x="${"15"}" y="${"5"}" rx="${".5"}"></rect><rect x="${"10"}" y="${"14"}" rx="${".5"}"></rect><path d="${"M6 10h.01M6 19h.01"}"></path></svg>`;
});
export {
  Component as default
};
