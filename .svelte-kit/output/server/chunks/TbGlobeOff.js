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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M8.36 8.339a4 4 0 0 0 5.281 5.31m1.995-1.98a4 4 0 0 0-5.262-5.325M6.75 16a8.015 8.015 0 0 0 9.799.553m2.016-1.998A8.015 8.015 0 0 0 16 3m-4 15v4m-4 0h8M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
