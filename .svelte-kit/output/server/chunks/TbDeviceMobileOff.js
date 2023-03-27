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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M7.174 3.178C7.426 3.064 7.705 3 8 3h8a2 2 0 0 1 2 2v9m0 4v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6m5-2h2m-1 13v.01M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
