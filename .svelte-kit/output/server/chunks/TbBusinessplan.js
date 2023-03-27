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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><ellipse cx="${"16"}" cy="${"6"}" rx="${"5"}" ry="${"3"}"></ellipse><path d="${"M11 6v4c0 1.657 2.239 3 5 3s5-1.343 5-3V6"}"></path><path d="${"M11 10v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4"}"></path><path d="${"M11 14v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4M7 9H4.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H3m2 0v1m0-8v1"}"></path></svg>`;
});
export {
  Component as default
};
