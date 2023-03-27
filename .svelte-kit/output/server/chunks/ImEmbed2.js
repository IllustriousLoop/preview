import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 20 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m13 11.5 1.5 1.5 5-5-5-5L13 4.5 16.5 8zm-6-7L5.5 3l-5 5 5 5L7 11.5 3.5 8zm3.958-2.148 1.085.296-3 11-1.085-.296 3-11z"}"></path></svg>`;
});
export {
  Component as default
};
