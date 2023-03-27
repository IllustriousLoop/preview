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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><rect x="${"4"}" y="${"7"}" rx="${"1"}"></rect><path d="${"M7 16v4m.5-4 9-9m-3 9L20 9.5m-16 4L10.5 7m6.5 9v4M5 20h4m6 0h4M17 7V5M7 7V5"}"></path></svg>`;
});
export {
  Component as default
};
