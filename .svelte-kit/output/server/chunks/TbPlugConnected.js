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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m7 12 5 5-1.5 1.5a3.536 3.536 0 1 1-5-5L7 12zm10 0-5-5 1.5-1.5a3.536 3.536 0 1 1 5 5L17 12zM3 21l2.5-2.5m13-13L21 3m-11 8-2 2m5 1-2 2"}"></path></svg>`;
});
export {
  Component as default
};
