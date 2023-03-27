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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409A1.994 1.994 0 0 1 18 20H6"}"></path><circle cx="${"6"}" cy="${"18"}" r="${"2"}"></circle><path d="${"M8 18V8M4.573 4.598A2.003 2.003 0 0 0 4 6v12M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
