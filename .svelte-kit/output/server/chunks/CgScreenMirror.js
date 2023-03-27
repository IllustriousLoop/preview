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
  )}><path d="${"M5 8h14v6h-3v2h5V6H3v10h5v-2H5V8Z"}"></path><path d="${"M16.33 19 12 13l-4.33 6h8.66Z"}"></path></svg>`;
});
export {
  Component as default
};
