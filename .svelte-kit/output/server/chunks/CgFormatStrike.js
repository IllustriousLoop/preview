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
  )}><path d="${"M13 7h4V5H7v2h4v3h2V7Zm-2 12v-5h2v5h-2Zm-6-6h14v-2H5v2Z"}"></path></svg>`;
});
export {
  Component as default
};
