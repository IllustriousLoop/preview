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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 12v9m-8-8a8 8 0 0 0 14.138 5.13m1.44-2.56A7.99 7.99 0 0 0 20 13m1 0h-2M5 13H3m9.866-4.127a3.001 3.001 0 1 0-3.737-3.747M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
