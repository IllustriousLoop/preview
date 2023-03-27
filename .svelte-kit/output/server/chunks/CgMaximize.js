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
  )}><path d="${"M3 3h6v2H5v4H3V3Zm0 18h6v-2H5v-4H3v6Zm12 0h6v-6h-2v4h-4v2Zm6-18h-6v2h4v4h2V3Z"}"></path></svg>`;
});
export {
  Component as default
};
