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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M9 3h6m-2 6h1m-4-6v3m-.268 3.736L6 20a.7.7 0 0 0 .5 1h11a.7.7 0 0 0 .5-1l-1.143-3.142m-2.288-6.294L14 9V3M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
