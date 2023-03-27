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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M11 7h6a2 2 0 0 1 2 2v1l1 1v3l-1 1m-.171 3.811A2 2 0 0 1 17 20H7a2 2 0 0 1-2-2v-3l-1-1v-3l1-1V9a2 2 0 0 1 2-2m3 9h4"}"></path><circle cx="${"8.5"}" cy="${"11.5"}" r="${"1"}"></circle><path d="${"M15.854 11.853A.498.498 0 0 0 15.5 11a.498.498 0 0 0-.356.149M8.336 4.343 8 3m7 4 1-4M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
