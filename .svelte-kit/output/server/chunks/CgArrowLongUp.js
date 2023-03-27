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
  )}><path d="${"m12.032 1.017-4.274 4.21L9.16 6.653l1.859-1.83-.056 18.155 2 .006.056-18.113 1.798 1.825 1.425-1.403-4.21-4.275Z"}"></path></svg>`;
});
export {
  Component as default
};
