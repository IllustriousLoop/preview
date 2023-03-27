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
  )}><path d="${"M5.657 9.172 4.243 7.757 0 12l4.243 4.243 1.414-1.415L3.829 13H10v-2H3.83l1.828-1.828ZM14 11v2h6.172l-1.829 1.828 1.414 1.415L24 12l-4.243-4.243-1.414 1.415L20.172 11H14Z"}"></path></svg>`;
});
export {
  Component as default
};
