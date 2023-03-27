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
  )}><path d="${"M18.364 7.757 16.95 6.343 11.293 12l5.657 5.657 1.414-1.414L14.12 12l4.243-4.243Z"}"></path><path d="${"m11.293 6.343 1.414 1.414L8.464 12l4.243 4.243-1.414 1.414L5.636 12l5.657-5.657Z"}"></path></svg>`;
});
export {
  Component as default
};
