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
  )}><path d="${"M0 9a7.982 7.982 0 0 0 2.709 6l1.323-1.5a6 6 0 1 1 8.212-8.743L10.001 7h6V1l-2.343 2.343A8 8 0 0 0 .001 9z"}"></path></svg>`;
});
export {
  Component as default
};
