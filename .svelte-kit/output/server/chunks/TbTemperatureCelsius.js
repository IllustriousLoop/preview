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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"6"}" cy="${"8"}" r="${"2"}"></circle><path d="${"M20 9a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3"}"></path></svg>`;
});
export {
  Component as default
};
