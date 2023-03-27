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
  )}><path d="${"M8.322 3.677 0 12l8.322 8.323L16.645 12zm7.371.01-1.849 1.85 6.49 6.456-6.49 6.49 1.85 1.817L24 11.993Z"}"></path></svg>`;
});
export {
  Component as default
};
