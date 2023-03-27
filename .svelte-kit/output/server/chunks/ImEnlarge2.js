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
  )}><path d="${"M16 0v6.5L13.5 4l-3 3L9 5.5l3-3L9.5 0zM7 10.5l-3 3L6.5 16H0V9.5L2.5 12l3-3z"}"></path></svg>`;
});
export {
  Component as default
};
