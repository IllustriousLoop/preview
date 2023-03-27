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
  )}><path d="${"M14 12h2l-2.5 3-2.5-3h2V4h-2l2.5-3L16 4h-2zM10 1v4L9 3H6v11h2v1H2v-1h2V3H1L0 5V1z"}"></path></svg>`;
});
export {
  Component as default
};
