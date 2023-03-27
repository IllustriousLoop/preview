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
  )}><path d="${"M6 10V4h2v6a4 4 0 0 0 8 0V4h2v6a6 6 0 0 1-12 0Zm1 8a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Z"}"></path></svg>`;
});
export {
  Component as default
};
