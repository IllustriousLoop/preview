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
  )}><path d="${"M5.354 5.854 2.707 8.5l2.646 2.646-.707.707L1.293 8.5l3.354-3.354.707.708zm7-.708-.707.707L14.293 8.5l-2.646 2.646.707.707L15.707 8.5l-3.353-3.354zM8 17h1V0H8v17z"}"></path></svg>`;
});
export {
  Component as default
};
