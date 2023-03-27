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
  )}><path d="${"M6 6h4V4H4v6h2V6Zm4 12H6v-4H4v6h6v-2Zm4-12h4v4h2V4h-6v2Zm0 12h4v-4h2v6h-6v-2Zm-2-9.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"}"></path></svg>`;
});
export {
  Component as default
};
