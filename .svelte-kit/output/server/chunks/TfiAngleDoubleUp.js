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
  )}><path d="${"m8.5 6.073 6.854 6.854-.707.707L8.5 7.487l-6.146 6.146-.707-.707L8.5 6.073zm0-3.429 6.146 6.146.707-.707L8.5 1.229 1.646 8.083l.708.707L8.5 2.644z"}"></path></svg>`;
});
export {
  Component as default
};
