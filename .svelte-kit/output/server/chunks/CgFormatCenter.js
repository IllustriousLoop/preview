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
  )}><path d="${"M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4Zm0 8a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4Zm2-3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm1 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Z"}"></path></svg>`;
});
export {
  Component as default
};
