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
  )}><path d="${"m16.95 14.395 1.414-1.415L12 6.617 5.636 12.98l1.414 1.415L12 9.445l4.95 4.95ZM6 17.384h12v-2H6v2Z"}"></path></svg>`;
});
export {
  Component as default
};
