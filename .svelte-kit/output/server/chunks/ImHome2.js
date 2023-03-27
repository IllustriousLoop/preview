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
  )}><path d="${"m8 .5-8 8L1.5 10 3 8.5V15h4v-3h2v3h4V8.5l1.5 1.5L16 8.5l-8-8zM8 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}"></path></svg>`;
});
export {
  Component as default
};
