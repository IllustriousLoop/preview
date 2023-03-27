import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M256 16a90 90 0 0 0-15 178.593v48.75a60 60 0 0 0 0 115.782v49.688A45 45 0 0 0 256 496a45 45 0 0 0 15-87.188v-50.157a60 60 0 0 0 0-115.78V194.59a90 90 0 0 0-15-178.594zm-2.813 30A60 60 0 0 1 256 46a60 60 0 0 1 0 120 60.017 60.017 0 0 1-2.813-120z"}"></path></svg>`;
});
export {
  Component as default
};
