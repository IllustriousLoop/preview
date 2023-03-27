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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M3 21h4L20 8a1.5 1.5 0 0 0-4-4L3 17v4M14.5 5.5l4 4"}"></path><path d="${"M12 8 7 3 3 7l5 5M7 8 5.5 9.5M16 12l5 5-4 4-5-5m4 1-1.5 1.5"}"></path></svg>`;
});
export {
  Component as default
};
