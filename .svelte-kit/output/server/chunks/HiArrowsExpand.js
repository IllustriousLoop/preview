import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 19 20" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0-4 4m-8 4v4m0 0h4m-4 0 4-4m8 4-4-4m4 4v-4m0 4h-4"}"></path></svg>`;
});
export {
  Component as default
};
