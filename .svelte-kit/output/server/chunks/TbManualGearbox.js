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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><circle cx="${"5"}" cy="${"6"}" r="${"2"}"></circle><circle cx="${"12"}" cy="${"6"}" r="${"2"}"></circle><circle cx="${"19"}" cy="${"6"}" r="${"2"}"></circle><circle cx="${"5"}" cy="${"18"}" r="${"2"}"></circle><circle cx="${"12"}" cy="${"18"}" r="${"2"}"></circle><path d="${"M5 8v8m7-8v8m7-8v2a2 2 0 0 1-2 2H5"}"></path></svg>`;
});
export {
  Component as default
};
