import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { stroke: "currentColor" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" },
      { "stroke-width": "2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}"></path><circle cx="${"8.5"}" cy="${"7"}" r="${"4"}"></circle><path d="${"m17 11 2 2 4-4"}"></path></svg>`;
});
export {
  Component as default
};
