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
  )}><path d="${"M8.976 12 4.733 7.757 3.32 9.172 6.147 12 3.32 14.828l1.414 1.415L8.976 12ZM12 19a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1Zm3.024-7 4.243 4.243 1.414-1.415L17.853 12l2.828-2.828-1.414-1.415L15.024 12Z"}"></path></svg>`;
});
export {
  Component as default
};
