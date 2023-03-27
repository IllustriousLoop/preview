import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M6 13h10v2H6zm0-6h10v2H6zm0-6h10v2H6zM3 0v4H2V1H1V0zM2 8.219V9h2v1H1V7.719l2-.938V6H1V5h3v2.281zM4 11v5H1v-1h2v-1H1v-1h2v-1H1v-1z"}"></path></svg>`;
});
export {
  Component as default
};
