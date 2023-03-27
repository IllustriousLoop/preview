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
  )}><path d="${"M9 9H3V7h4V3h2v6Zm0 6H3v2h4v4h2v-6Zm12 0h-6v6h2v-4h4v-2Zm-6-6h6V7h-4V3h-2v6Z"}"></path></svg>`;
});
export {
  Component as default
};
