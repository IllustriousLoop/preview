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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m10 12 2-2a2.828 2.828 0 0 1 4 0 2.828 2.828 0 0 1 0 4l-3 3"}"></path><path d="${"m14 12-2 2a2.828 2.828 0 1 1-4-4l3-3"}"></path><circle cx="${"12"}" cy="${"12"}" r="${"9"}"></circle></svg>`;
});
export {
  Component as default
};
