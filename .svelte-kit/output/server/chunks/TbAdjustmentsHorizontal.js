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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"14"}" cy="${"6"}" r="${"2"}"></circle><path d="${"M4 6h8m4 0h4"}"></path><circle cx="${"8"}" cy="${"12"}" r="${"2"}"></circle><path d="${"M4 12h2m4 0h10"}"></path><circle cx="${"17"}" cy="${"18"}" r="${"2"}"></circle><path d="${"M4 18h11m4 0h1"}"></path></svg>`;
});
export {
  Component as default
};
