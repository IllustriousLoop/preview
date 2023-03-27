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
  )}><path d="${"M12 0C5.373 0 0 5.373 0 12a11.97 11.97 0 0 0 3.918 8.87 4.457 4.457 0 0 1-.2-1.324 4.453 4.453 0 1 1 5.891 4.216c.773.156 1.572.238 2.391.238 6.627 0 12-5.373 12-12S18.627 0 12 0Z"}"></path></svg>`;
});
export {
  Component as default
};
