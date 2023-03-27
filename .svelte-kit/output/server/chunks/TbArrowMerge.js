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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m8 7 4-4 4 4"}"></path><path d="${"M12 3v5.394A6.737 6.737 0 0 1 9 14a6.737 6.737 0 0 0-3 5.606V21"}"></path><path d="${"M12 3v5.394A6.737 6.737 0 0 0 15 14a6.737 6.737 0 0 1 3 5.606V21"}"></path></svg>`;
});
export {
  Component as default
};
