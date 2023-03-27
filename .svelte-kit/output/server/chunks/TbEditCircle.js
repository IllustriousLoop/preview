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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m12 15 8.385-8.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zm4-10 3 3"}"></path><path d="${"M9 7.07A7.002 7.002 0 0 0 10 21a7.002 7.002 0 0 0 6.929-5.999"}"></path></svg>`;
});
export {
  Component as default
};
