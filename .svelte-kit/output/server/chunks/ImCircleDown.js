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
  )}><path d="${"M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"}"></path><path d="${"M4.957 5.543 3.543 6.957 8 11.414l4.457-4.457-1.414-1.414L8 8.586z"}"></path></svg>`;
});
export {
  Component as default
};
