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
  )}><path d="${"M16.768 5.714a2 2 0 0 1 3.064 2.572L10.833 19.01a2 2 0 1 1-3.064-2.57l8.999-10.726ZM3 12.74a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"}"></path></svg>`;
});
export {
  Component as default
};
