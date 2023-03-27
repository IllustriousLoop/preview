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
  )}><path d="${"M19 11h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm0 12h2v2h-2zm-8 0h2v2h-2zm4 0h2v2h-2zm-8 0h2v2H7zm-4 0h2v2H3zm0-8h2v2H3zm0 4h2v2H3zm0-8h2v2H3zm4 4h2v2H7zm8 0h2v2h-2zm-4-4h2v2h-2zm0 8h2v2h-2zm0-4h2v2h-2zm10-8H3v2h18z"}"></path></svg>`;
});
export {
  Component as default
};
