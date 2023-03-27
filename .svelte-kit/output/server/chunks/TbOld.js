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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m11 21-1-4-2-3V8"}"></path><path d="${"m5 14-1-3 4-3 3 2 3 .5"}"></path><circle cx="${"8"}" cy="${"4"}" r="${"1"}"></circle><path d="${"m7 17-2 4m11 0v-8.5a1.5 1.5 0 0 1 3 0v.5"}"></path></svg>`;
});
export {
  Component as default
};
