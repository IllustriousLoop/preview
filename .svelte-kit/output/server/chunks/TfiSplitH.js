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
  )}><path d="${"M2.207 8h3.772v1H2.207l1.646 1.646-.707.707L.293 8.5l2.854-2.854.707.707L2.207 8zm11.647-2.354-.707.707L14.793 8h-3.772v1h3.772l-1.646 1.646.707.707L16.707 8.5l-2.853-2.854zM8 17h1V0H8v17z"}"></path></svg>`;
});
export {
  Component as default
};
