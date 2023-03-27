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
  )}><path d="${"M2.617 22.316h18.766V24H2.617zm15.88-12.632-5.655 5.655V3.249l1.744 1.743L15.79 3.79 12 0 8.21 3.79l1.204 1.203 1.744-1.804v12.15L5.504 9.686H7.97V8H2.617v5.354H4.3v-2.527l7.7 7.699 7.698-7.699v2.527h1.685V8H16.03v1.684z"}"></path></svg>`;
});
export {
  Component as default
};
