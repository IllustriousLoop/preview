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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M10.07 15.34c1.115.88 2.74.88 3.855 0 1.115-.88 1.398-2.388.671-3.575L12 8l-2.602 3.765c-.726 1.187-.443 2.694.672 3.575z"}"></path><circle cx="${"12"}" cy="${"12"}" r="${"9"}"></circle></svg>`;
});
export {
  Component as default
};
