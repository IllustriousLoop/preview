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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M20.041 16.046A9 9 0 0 0 7.957 3.956M5.634 5.639a9 9 0 0 0 12.726 12.73"}"></path><path d="${"m12 7 4.755 3.455-.566 1.743-.98 3.014L15 16H9l-1.755-5.545 1.86-1.351 2.313-1.681zm0 0V3m3 13 2.5 3m-.745-8.545L20.5 9M9.061 16.045 6.5 19m.745-8.545L3.5 9M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
