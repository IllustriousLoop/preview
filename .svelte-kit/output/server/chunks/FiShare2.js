import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { stroke: "currentColor" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" },
      { "stroke-width": "2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><circle cx="${"18"}" cy="${"5"}" r="${"3"}"></circle><circle cx="${"6"}" cy="${"12"}" r="${"3"}"></circle><circle cx="${"18"}" cy="${"19"}" r="${"3"}"></circle><path d="${"m8.59 13.51 6.83 3.98m-.01-10.98-6.82 3.98"}"></path></svg>`;
});
export {
  Component as default
};
