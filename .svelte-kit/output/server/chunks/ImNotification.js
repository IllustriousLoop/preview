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
  )}><path d="${"M8 1.5c-1.736 0-3.369.676-4.596 1.904S1.5 6.264 1.5 8c0 1.736.676 3.369 1.904 4.596S6.264 14.5 8 14.5c1.736 0 3.369-.676 4.596-1.904S14.5 9.736 14.5 8c0-1.736-.676-3.369-1.904-4.596S9.736 1.5 8 1.5zM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 11h2v2H7zm0-8h2v6H7z"}"></path></svg>`;
});
export {
  Component as default
};
