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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M5.514 14.639C5.514 18.152 8.418 21 12 21s6.486-2.848 6.486-6.361a12.574 12.574 0 0 0-3.243-9.012A4.025 4.025 0 0 0 12 4a4.025 4.025 0 0 0-3.243 1.627 12.574 12.574 0 0 0-3.243 9.012"}"></path></svg>`;
});
export {
  Component as default
};
