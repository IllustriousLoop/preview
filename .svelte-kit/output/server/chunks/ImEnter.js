import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M6 8H1V6h5V4l3 3-3 3zm10-8v13l-6 3v-3H4V9h1v3h5V3l4-2H5v4H4V0z"}"></path></svg>`;
});
export {
  Component as default
};
