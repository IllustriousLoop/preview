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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"6"}" cy="${"19"}" r="${"2"}"></circle><circle cx="${"17"}" cy="${"19"}" r="${"2"}"></circle><path d="${"M17 17H6V3H4"}"></path><path d="${"m6 5 6.005.429m7.138 6.573L19 13H6m9-7h6m-3-3v6"}"></path></svg>`;
});
export {
  Component as default
};
