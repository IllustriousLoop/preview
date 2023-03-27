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
  )}><path d="${"M6 1v1H0v4h1v4h5v6.018h11V1H6zM2 6h4v1H2V6zm0 3V8h4v1H2zm14 6.018H7V5H1V3h6V2h9v13.018z"}"></path></svg>`;
});
export {
  Component as default
};
