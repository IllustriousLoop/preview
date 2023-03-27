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
  )}><path d="${"M22.288 11v2H7.802l3.243 3.243-1.414 1.414L3.974 12 9.63 6.343l1.414 1.414L7.802 11h14.486ZM3 18V6H1v12h2Z"}"></path></svg>`;
});
export {
  Component as default
};
