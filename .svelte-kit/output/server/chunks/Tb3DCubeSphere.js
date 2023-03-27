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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m6 17.6-2-1.1V14m0-4V7.5l2-1.1m4-2.3L12 3l2 1.1m4 2.3 2 1.1V10m0 4v2.5l-2 1.12m-4 2.28L12 21l-2-1.1m2-7.9 2-1.1m4-2.3 2-1.1M12 12v2.5m0 4V21m0-9-2-1.12M6 8.6 4 7.5"}"></path></svg>`;
});
export {
  Component as default
};
