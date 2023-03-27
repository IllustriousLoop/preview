import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { stroke: "currentColor" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" },
      { "stroke-width": "2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m12 2 10 6.5v7L12 22 2 15.5v-7L12 2zm0 20v-6.5"}"></path><path d="${"m22 8.5-10 7-10-7"}"></path><path d="${"m2 15.5 10-7 10 7M12 2v6.5"}"></path></svg>`;
});
export {
  Component as default
};
