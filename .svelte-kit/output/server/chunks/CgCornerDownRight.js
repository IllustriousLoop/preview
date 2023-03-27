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
  )}><path d="${"M6.85 13.4a2 2 0 0 1-2-2v-8h-2v8a4 4 0 0 0 4 4h10.306l-3.785 3.785 1.415 1.414 6.364-6.364-6.364-6.364-1.415 1.415 4.115 4.114H6.85Z"}"></path></svg>`;
});
export {
  Component as default
};
