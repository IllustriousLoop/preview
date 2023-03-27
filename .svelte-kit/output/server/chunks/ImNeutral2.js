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
  )}><path d="${"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm2 12H6v-1h4v1zm1-8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}"></path></svg>`;
});
export {
  Component as default
};
