import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M4 14v2l-3-2.5L4 11v2h8v-2l3 2.5-3 2.5v-2zm9-13v4l-1-2H9v7h2v1H5v-1h2V3H4L3 5V1z"}"></path></svg>`;
});
export {
  Component as default
};
