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
  )}><path d="${"M21.7 5.307 12.945.253a1.892 1.892 0 0 0-1.891 0L2.299 5.306a1.892 1.892 0 0 0-.945 1.638v10.11c0 .675.36 1.3.945 1.637l8.756 5.056a1.892 1.892 0 0 0 1.89 0l8.756-5.055c.585-.338.945-.962.945-1.638V6.945c0-.675-.36-1.3-.945-1.638zm-7.45 7.753-3.805 3.804-1.351-1.351 3.804-3.805-3.804-3.806 1.35-1.35 3.805 3.805 1.351 1.35-1.35 1.353z"}"></path></svg>`;
});
export {
  Component as default
};
