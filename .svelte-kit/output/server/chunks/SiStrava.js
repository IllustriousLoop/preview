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
  )}><path d="${"m15.387 17.944-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599 2.836 5.598h4.172L10.463 0l-7 13.828h4.169"}"></path></svg>`;
});
export {
  Component as default
};
