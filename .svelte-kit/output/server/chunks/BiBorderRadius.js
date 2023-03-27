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
  )}><path d="${"M19 19h2v2h-2zM7 19h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2zm-8 0h2v2H3zm0-4h2v2H3zm0-8h2v2H3zm0 4h2v2H3zm0-8h2v2H3zm4 0h2v2H7zm12 12h2v2h-2zM16 3h-5v2h5c1.654 0 3 1.346 3 3v5h2V8c0-2.757-2.243-5-5-5z"}"></path></svg>`;
});
export {
  Component as default
};
