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
  )}><path d="${"m17.657 11.293-1.414 1.414L12 8.464l-4.243 4.243-1.414-1.414L12 5.636l5.657 5.657Z"}"></path><path d="${"m17.657 16.95-1.414 1.414L12 14.12l-4.243 4.243-1.414-1.414L12 11.293l5.657 5.657Z"}"></path></svg>`;
});
export {
  Component as default
};
