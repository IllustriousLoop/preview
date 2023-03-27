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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M10 20V4H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h3zm4 0V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-3z"}"></path><circle cx="${"17.5"}" cy="${"15.5"}" r="${"1"}" fill="${"currentColor"}"></circle><circle cx="${"6.5"}" cy="${"8.5"}" r="${"1"}" fill="${"currentColor"}"></circle></svg>`;
});
export {
  Component as default
};
