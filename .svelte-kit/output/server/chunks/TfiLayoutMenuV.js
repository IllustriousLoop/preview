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
  )}><path d="${"M3 1v3h11V1H3zm10 2H4V2h9v1zM3 8h11V5H3v3zm1-2h9v1H4V6zm-1 5.997h11v-3H3v3zm1-2h9v1H4v-1zm-1 6h11v-3H3v3zm1-2h9v1H4v-1z"}"></path></svg>`;
});
export {
  Component as default
};
