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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"4"}" cy="${"17"}" r="${"1"}"></circle><circle cx="${"9"}" cy="${"5"}" r="${"1"}"></circle><path d="${"m4 22 4-2v-3h12m-9 3h9M8 14l3-2 1-4c3 1 3 4 3 6"}"></path></svg>`;
});
export {
  Component as default
};
