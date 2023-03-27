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
  )}><path d="${"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 6h-1v1.5a1.5 1.5 0 0 1-3 0V10H4V9h8v1zm-1-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}"></path></svg>`;
});
export {
  Component as default
};
