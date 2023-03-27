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
  )}><path d="${"M7 11v2h10v-2H7Zm.757 7 1.415-1.414L11 18.414V14h2v4.414l1.828-1.828L16.243 18 12 22.243 7.757 18Zm8.486-12-1.414 1.414L13 5.586V10h-2V5.586L9.172 7.414 7.757 6 12 1.757 16.243 6Z"}"></path></svg>`;
});
export {
  Component as default
};
