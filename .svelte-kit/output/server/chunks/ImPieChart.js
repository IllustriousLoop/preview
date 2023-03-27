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
  )}><path d="${"M7 9V2a7 7 0 1 0 6.262 3.869L7 9zm7.262-5.131A6.999 6.999 0 0 0 8 0v7l6.262-3.131z"}"></path></svg>`;
});
export {
  Component as default
};
