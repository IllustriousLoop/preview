import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M3 2.436v12.136l7.281-6.098L3 2.436zm1 2.128 4.719 3.913L4 12.429V4.564zm11.281 3.91-6.46 5.41-.643-.768 5.54-4.639-5.537-4.592.639-.77 6.461 5.359z"}"></path></svg>`;
});
export {
  Component as default
};
