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
  )}><path d="${"m8 1.288 6.842 5.56L12.267 15H8V1.288zM16 6.5 8 0 0 6.5 3 16h10l3-9.5z"}"></path></svg>`;
});
export {
  Component as default
};
