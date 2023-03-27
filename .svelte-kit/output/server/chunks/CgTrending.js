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
  )}><path d="${"M1.414 16.432 0 15.018l7.071-7.071 6.364 6.364 4.243-4.243-1.743-1.742 6.692-1.793-1.793 6.692-1.742-1.742-5.657 5.656-6.364-6.364-5.657 5.657Z"}"></path></svg>`;
});
export {
  Component as default
};
