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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"8"}" cy="${"16"}" r="${"5"}"></circle><circle cx="${"19"}" cy="${"19"}" r="${"2"}"></circle><path d="${"M19 17a3 3 0 0 0-3-3h-3.4M3 3h1a2 2 0 0 1 2 2v6m0-3h11m-2 0v6"}"></path></svg>`;
});
export {
  Component as default
};
