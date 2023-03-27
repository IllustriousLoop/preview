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
  )}><path d="${"M5.166 8.803.795 4.847l.67-.741 3.773 3.413 4.204-3.026 5.593 6.25V8.458h1v4.036h-4.036v-1h2.366L9.296 5.829l-4.13 2.974zM0 16v1h17v-1H0z"}"></path></svg>`;
});
export {
  Component as default
};
