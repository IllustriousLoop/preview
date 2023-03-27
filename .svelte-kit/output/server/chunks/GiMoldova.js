import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M60.55 44.17 181.3 16.43 341 94.41l3 89.99 36.8 10.5 5.2 69.7 33.8 9s34.5 81 31.5 81-123.8-27-123.8-27l-64.4 168-43.5-3.7 19.5-179.3-55.5-110.2z"}"></path></svg>`;
});
export {
  Component as default
};
