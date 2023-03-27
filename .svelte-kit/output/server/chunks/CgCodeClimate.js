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
  )}><path d="${"m9.495 8.11-6.364 6.365 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414L9.495 8.11Zm5.01 0-1.973 1.974 1.418 1.41.555-.555 4.95 4.95 1.414-1.414-6.364-6.364Z"}"></path></svg>`;
});
export {
  Component as default
};
