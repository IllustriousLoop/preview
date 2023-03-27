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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"12"}" cy="${"13"}" r="${"4"}"></circle><path d="${"M9 10 8 8H3l2.48 5.788A2 2 0 0 0 7.32 15H8.5m6.5-5 1-2h5l-2.48 5.788A2 2 0 0 1 16.68 15H15.5"}"></path></svg>`;
});
export {
  Component as default
};
