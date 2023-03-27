import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M5 5v4h14V5h-2v2H7V5H5Zm0 14v-4h14v4h-2v-2H7v2H5Zm2-8h10v2H7v-2Z"}"></path></svg>`;
});
export {
  Component as default
};
