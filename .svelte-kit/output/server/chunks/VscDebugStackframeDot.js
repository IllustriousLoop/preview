import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"}"></path></svg>`;
});
export {
  Component as default
};
