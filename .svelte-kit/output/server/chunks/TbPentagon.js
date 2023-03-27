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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m13.2 3.394 7.033 5.237a2 2 0 0 1 .7 2.247l-2.973 8.764A2 2 0 0 1 16.066 21h-8.12a2 2 0 0 1-1.9-1.373L3.15 10.862a2 2 0 0 1 .696-2.225L10.804 3.4a2 2 0 0 1 2.397-.006z"}"></path></svg>`;
});
export {
  Component as default
};
