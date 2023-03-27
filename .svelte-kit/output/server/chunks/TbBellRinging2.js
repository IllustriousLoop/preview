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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M19.364 4.636a2 2 0 0 1 0 2.828 7 7 0 0 1-1.414 7.072l-2.122 2.12a4 4 0 0 0-.707 3.536L3.808 8.88a4 4 0 0 0 3.535-.707L9.464 6.05a7 7 0 0 1 7.072-1.414 2 2 0 0 1 2.828 0z"}"></path><path d="${"m7.343 12.414-.707.707a3 3 0 0 0 4.243 4.243l.707-.707"}"></path></svg>`;
});
export {
  Component as default
};
