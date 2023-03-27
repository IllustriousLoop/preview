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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M10 21v-6.5a3.5 3.5 0 0 0-7 0V21h18m0-4v-2a4 4 0 0 0-4-4h-2m-4 0H6.5M12 8V3h4l2 2-2 2h-4m-6 8h1M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
