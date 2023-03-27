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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M2 12h1m3-4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2"}"></path><path d="${"M6.298 6.288A.997.997 0 0 0 6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9m0 3h3m3 3v2a1 1 0 0 0 1 1h1c.275 0 .523-.11.704-.29M18 14V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4m3-3h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1m2-4h-1M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
