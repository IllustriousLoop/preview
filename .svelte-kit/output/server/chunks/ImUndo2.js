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
  )}><path d="${"M11.904 16C13.681 12.781 13.98 7.87 7 8.034V12L1 6l6-6v3.881c8.359-.218 9.29 7.378 4.904 12.119z"}"></path></svg>`;
});
export {
  Component as default
};
