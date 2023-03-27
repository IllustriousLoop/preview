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
  )}><path fill-opacity="${".5"}" d="${"M8 2.5H4v3h4v-3Zm12 0h-4v3h4v-3Z"}"></path><path d="${"M8 7.5H4v6a8 8 0 1 0 16 0v-6h-4v6a4 4 0 0 1-8 0v-6Z"}"></path></svg>`;
});
export {
  Component as default
};
