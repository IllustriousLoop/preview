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
  )}><path d="${"M0 1v14h17V1H0zm16 13H1V2h15v12zM4.646 10.354 2.293 8l2.354-2.354.707.707L3.707 8l1.646 1.646-.707.708zm7-.708L13.293 8l-1.646-1.646.707-.707L14.707 8l-2.354 2.354-.707-.708z"}"></path></svg>`;
});
export {
  Component as default
};
