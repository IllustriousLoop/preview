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
  )}><path d="${"m16.95 5.968-1.414 1.414L13 4.846v12.196h-2V4.847L8.465 7.382 7.05 5.968 12 1.018l4.95 4.95Z"}"></path><path d="${"M5 20.982v-10h4v-2H3v14h18v-14h-6v2h4v10H5Z"}"></path></svg>`;
});
export {
  Component as default
};
