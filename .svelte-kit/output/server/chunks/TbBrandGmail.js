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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M16 20h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3v16zM5 20h3V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zM16 4l-4 4-4-4"}"></path><path d="${"m4 6.5 8 7.5 8-7.5"}"></path></svg>`;
});
export {
  Component as default
};
