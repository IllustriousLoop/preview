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
  )}><path d="${"M13 6a1 1 0 1 0-2 0v3H7a1 1 0 0 0 0 2h4v7a1 1 0 1 0 2 0v-7h4a1 1 0 1 0 0-2h-4V6Z"}"></path></svg>`;
});
export {
  Component as default
};
