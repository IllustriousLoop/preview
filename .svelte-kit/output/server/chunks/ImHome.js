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
  )}><path d="${"m16 9.226-8-6.21-8 6.21V6.694l8-6.21 8 6.21zM14 9v6h-4v-4H6v4H2V9l6-4.5z"}"></path></svg>`;
});
export {
  Component as default
};
