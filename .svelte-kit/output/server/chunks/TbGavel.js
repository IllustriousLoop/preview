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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m13 10 7.383 7.418c.823.82.823 2.148 0 2.967a2.11 2.11 0 0 1-2.976 0L10 13M6 9l4 4m3-3L9 6M3 21h7"}"></path><path d="${"m6.793 15.793-3.586-3.586a1 1 0 0 1 0-1.414L5.5 8.5 6 9l3-3-.5-.5 2.293-2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414L13.5 10.5 13 10l-3 3 .5.5-2.293 2.293a1 1 0 0 1-1.414 0z"}"></path></svg>`;
});
export {
  Component as default
};
