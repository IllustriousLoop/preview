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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"6.5"}" cy="${"13.5"}" r="${"1.5"}"></circle><circle cx="${"17.5"}" cy="${"13.5"}" r="${"1.5"}"></circle><path d="${"M17.5 9a4.5 4.5 0 1 0 3.5 1.671L22 9h-4.5zm-11 0A4.5 4.5 0 1 1 3 10.671L2 9h4.5z"}"></path><path d="${"m10.5 15.5 1.5 2 1.5-2M9 6.75c2-.667 4-.667 6 0"}"></path></svg>`;
});
export {
  Component as default
};
