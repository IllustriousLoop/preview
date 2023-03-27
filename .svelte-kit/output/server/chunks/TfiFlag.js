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
  )}><path d="${"M13 10.008V.77L1.121 5.389 13 10.008zm-1-1.461L3.879 5.389 12 2.23v6.317zM15 0v17h-1V0h1z"}"></path></svg>`;
});
export {
  Component as default
};
