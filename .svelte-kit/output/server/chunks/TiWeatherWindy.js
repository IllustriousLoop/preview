import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M19 5a1 1 0 1 0 0 2 1 1 0 0 1 0 2H8a1 1 0 1 0 0 2h6a1 1 0 0 1 0 2H7.6c-1.654 0-3 1.346-3 3s1.346 3 3 3a1 1 0 1 0 0-2 1 1 0 0 1 0-2H14c1.654 0 3-1.346 3-3 0-.353-.072-.686-.185-1H19c1.654 0 3-1.346 3-3s-1.346-3-3-3z"}"></path></svg>`;
});
export {
  Component as default
};
