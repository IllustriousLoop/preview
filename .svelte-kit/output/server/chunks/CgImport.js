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
  )}><path d="${"M5 9.982v10h14v-10h-4v-2h6v14H3v-14h6v2H5Z"}"></path><path d="${"M13 2h-2v12.053l-2.535-2.536-1.415 1.415 4.95 4.95 4.95-4.95-1.414-1.415L13 14.053V2Z"}"></path></svg>`;
});
export {
  Component as default
};
