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
  )}><path d="${"M4 4h4v4H4V4Zm0 6h4v4H4v-4Zm4 6H4v4h4v-4Zm2-12h4v4h-4V4Zm4 6h-4v4h4v-4Zm-4 6h4v4h-4v-4ZM20 4h-4v4h4V4Zm-4 6h4v4h-4v-4Zm4 6h-4v4h4v-4Z"}"></path></svg>`;
});
export {
  Component as default
};
