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
  )}><path d="${"M13 2h-2C7.691 2 5 4.691 5 8v8c0 3.309 2.691 6 6 6h2c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-2 2v6H7V8c0-2.206 1.794-4 4-4zm6 12c0 2.206-1.794 4-4 4h-2c-2.206 0-4-1.794-4-4v-4h10v4zm-4-6V4c2.206 0 4 1.794 4 4v2h-4z"}"></path></svg>`;
});
export {
  Component as default
};
