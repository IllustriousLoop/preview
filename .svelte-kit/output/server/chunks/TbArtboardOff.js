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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 8h3a1 1 0 0 1 1 1v3m-.284 3.698A.997.997 0 0 1 15 16H9a1 1 0 0 1-1-1V9c0-.273.11-.52.287-.7M3 8h1m-1 8h1M8 3v1m8-1v1m4 4h1m-1 8h1M8 20v1m8-1v1M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
