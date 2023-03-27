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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M5 4h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5m0 4h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5m5-13h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4m5-5h5"}"></path></svg>`;
});
export {
  Component as default
};
