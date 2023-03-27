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
  )}><path d="${"m13.383 14.341-3.726-.958.959-3.726 3.726.959-.96 3.726zM4.913 0 0 19.088 19.088 24 24 4.912 4.912 0z"}"></path></svg>`;
});
export {
  Component as default
};
