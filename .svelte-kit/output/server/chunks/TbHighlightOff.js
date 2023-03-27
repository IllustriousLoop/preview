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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M8.998 9.002 3 15v4h4l6-6m1.997-1.997L17.5 8.5a2.828 2.828 0 1 0-4-4l-2.497 2.497M12.5 5.5l4 4m-12 4 4 4M19 15h2v2m-2 2h-6l3.004-3.004M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
