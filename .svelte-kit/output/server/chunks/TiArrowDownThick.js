import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M18.414 10.656a2 2 0 0 0-2.828 0L14 12.242V5a2 2 0 0 0-4 0v7.242l-1.586-1.586a2 2 0 1 0-2.828 2.828L12 19.898l6.414-6.414a2 2 0 0 0 0-2.828z"}"></path></svg>`;
});
export {
  Component as default
};
