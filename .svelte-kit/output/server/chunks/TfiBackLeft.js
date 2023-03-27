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
  )}><path d="${"M15 7.5c0 3.033-2.467 5.5-5.5 5.5H6.588l2.646 2.646-.707.707L4.674 12.5l3.854-3.854.707.707L6.588 12H9.5c2.481 0 4.5-2.019 4.5-4.5S11.981 3 9.5 3H2.417V2H9.5C12.533 2 15 4.467 15 7.5z"}"></path></svg>`;
});
export {
  Component as default
};
