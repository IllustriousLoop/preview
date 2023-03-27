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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M4.432 4.442a3 3 0 1 0 4.114 4.146"}"></path><circle cx="${"6"}" cy="${"17"}" r="${"3"}"></circle><path d="${"M8.6 15.4 12 12m2-2 5-5M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
