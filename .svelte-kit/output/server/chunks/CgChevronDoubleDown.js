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
  )}><path d="${"M7.757 5.636 6.343 7.05 12 12.707l5.657-5.657-1.414-1.414L12 9.88 7.757 5.636Z"}"></path><path d="${"m6.343 12.707 1.414-1.414L12 15.536l4.243-4.243 1.414 1.414L12 18.364l-5.657-5.657Z"}"></path></svg>`;
});
export {
  Component as default
};
