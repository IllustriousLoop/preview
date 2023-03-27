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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M9.29 9.275A9.03 9.03 0 0 0 9 10a6 6 0 0 0-5 3 8 8 0 0 1 7 7 6 6 0 0 0 3-5c.241-.085.478-.18.708-.283m2.428-1.61A8.998 8.998 0 0 0 20 7a3 3 0 0 0-3-3 8.998 8.998 0 0 0-6.107 2.864"}"></path><path d="${"M7 14a6 6 0 0 0-3 6 6 6 0 0 0 6-3"}"></path><circle cx="${"15"}" cy="${"9"}" r="${"1"}"></circle><path d="${"m3 3 18 18"}"></path></svg>`;
});
export {
  Component as default
};
