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
  )}><path d="${"m7.987 8.5 6.146 6.146-.707.707L6.573 8.5l6.854-6.854.707.707L7.987 8.5zM9.29 2.353l-.707-.707L1.729 8.5l6.854 6.854.707-.707L3.144 8.5 9.29 2.353z"}"></path></svg>`;
});
export {
  Component as default
};
