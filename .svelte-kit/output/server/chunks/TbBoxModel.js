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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M8 8h8v8H8z"}"></path><rect x="${"4"}" y="${"4"}" rx="${"2"}"></rect><path d="${"m16 16 3.3 3.3M16 8l3.3-3.3M8 8 4.7 4.7M8 16l-3.3 3.3"}"></path></svg>`;
});
export {
  Component as default
};
