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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m3 3 18 18m-1.5-8.428L18 14m-2 2-4 4-7.5-7.428m0 0a5 5 0 0 1-1.288-5.068A4.976 4.976 0 0 1 5 5m3-1c1.56.003 3.05.727 4 2.006a5 5 0 1 1 7.5 6.572"}"></path></svg>`;
});
export {
  Component as default
};
