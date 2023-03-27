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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m11 18-2-1-6 3V7l6-3 6 3 6-3v10M9 4v13m6-10v5"}"></path><circle cx="${"16.5"}" cy="${"17.5"}" r="${"2.5"}"></circle><path d="${"M18.5 19.5 21 22"}"></path></svg>`;
});
export {
  Component as default
};
