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
  )}><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 12V6a2 2 0 0 1 4 0v6m0-2a2 2 0 1 1 2 2h-6m0 0h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1-2 2v-6m0 0v6a2 2 0 0 1-4 0v-6m0 2a2 2 0 1 1-2-2h6m0 0H6a2 2 0 0 1 0-4h6m-2 0a2 2 0 1 1 2-2v6"}"></path></svg>`;
});
export {
  Component as default
};
