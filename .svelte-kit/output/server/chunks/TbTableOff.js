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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M8 4h10a2 2 0 0 1 2 2v10m-.588 3.417c-.362.36-.86.583-1.412.583H6a2 2 0 0 1-2-2V6c0-.552.224-1.053.586-1.414M4 10h6m4 0h6M10 4v2m0 4v10M3 3l18 18"}"></path></svg>`;
});
export {
  Component as default
};
