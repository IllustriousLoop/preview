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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M20.412 16.416c.363-.362.588-.863.588-1.416v-4a2 2 0 0 0-2-2h-6M9 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2m10-8V5a2 2 0 0 0-2-2H9c-.551 0-1.05.223-1.412.584M7 7v2"}"></path><path d="${"M17 17v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
