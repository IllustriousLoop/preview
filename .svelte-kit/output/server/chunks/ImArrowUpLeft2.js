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
  )}><path d="${"M13.707 12.293 5.414 4H9a1 1 0 0 0 0-2H3a1.002 1.002 0 0 0-1 1h-.001v6a1 1 0 0 0 2 0V5.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414z"}"></path></svg>`;
});
export {
  Component as default
};
