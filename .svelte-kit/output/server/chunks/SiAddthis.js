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
  )}><path d="${"M18 13.496h-4.501v4.484h-3v-4.484H6v-2.99h4.5V6.021h3.001v4.485H18v2.99zM21 .041H3a3.004 3.004 0 0 0-3 2.99v17.94a3.004 3.004 0 0 0 3 2.988h18a3.005 3.005 0 0 0 3-2.988V3.031a3.005 3.005 0 0 0-3-2.99z"}"></path></svg>`;
});
export {
  Component as default
};
