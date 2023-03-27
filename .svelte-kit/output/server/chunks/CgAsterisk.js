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
  )}><path d="${"M11 6h2v4.079l3.341-2.34 1.147 1.639L13.743 12l3.745 2.622-1.147 1.639L13 13.92V18h-2v-4.079l-3.341 2.34-1.148-1.639L10.257 12 6.51 9.378l1.15-1.639L11 10.08V6Z"}"></path></svg>`;
});
export {
  Component as default
};
