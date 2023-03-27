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
  )}><path d="${"M8.998.972v2h3l-1 .001.014 16.24-1.844-1.834-1.41 1.418 4.254 4.23 4.23-4.254-1.417-1.41-1.813 1.823-.014-16.214h2v-2h-6Z"}"></path></svg>`;
});
export {
  Component as default
};
