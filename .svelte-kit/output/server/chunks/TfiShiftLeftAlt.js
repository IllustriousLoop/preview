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
  )}><path d="${"M5.854 5.854 3.207 8.5l2.646 2.646-.707.707L1.793 8.5l3.354-3.354.707.708zM9 0v17h1V0H9z"}"></path></svg>`;
});
export {
  Component as default
};
