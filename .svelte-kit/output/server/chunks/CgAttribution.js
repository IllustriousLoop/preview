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
  )}><path d="${"M6 8a2 2 0 0 0 1.732-1H14a2 2 0 1 1 0 4h-4a4 4 0 0 0 0 8h6.268A2 2 0 0 0 20 18a2 2 0 0 0-3.732-1H10a2 2 0 1 1 0-4h4a4 4 0 0 0 0-8H7.732A2 2 0 1 0 6 8Z"}"></path></svg>`;
});
export {
  Component as default
};
