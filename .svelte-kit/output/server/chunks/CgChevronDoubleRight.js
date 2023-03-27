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
  )}><path d="${"M5.636 7.757 7.05 6.343 12.707 12 7.05 17.657l-1.414-1.414L9.88 12 5.636 7.757Z"}"></path><path d="${"m12.707 6.343-1.414 1.414L15.536 12l-4.243 4.243 1.414 1.414L18.364 12l-5.657-5.657Z"}"></path></svg>`;
});
export {
  Component as default
};
