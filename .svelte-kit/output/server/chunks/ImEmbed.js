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
  )}><path d="${"m9 11.5 1.5 1.5 5-5-5-5L9 4.5 12.5 8zm-2-7L5.5 3l-5 5 5 5L7 11.5 3.5 8z"}"></path></svg>`;
});
export {
  Component as default
};
