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
  )}><path d="${"M11 7H7v4h4V7Zm0 6H7v4h4v-4Zm2 0h4v4h-4v-4Zm4-6h-4v4h4V7Z"}"></path></svg>`;
});
export {
  Component as default
};
