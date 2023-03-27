import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m14.33 8-1.876-4.377-3.438 9.783L5.001.296 2.631 8H0v1h3.369l1.63-5.296 3.95 12.903 3.597-10.23L13.67 9H17V8z"}"></path></svg>`;
});
export {
  Component as default
};
