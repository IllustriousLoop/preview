import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 22 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M0 3h14v3H0V3zm0 4h14v3H0V7zm0 4h14v3H0v-3zm15.5-1 3-3 3 3z"}"></path></svg>`;
});
export {
  Component as default
};
