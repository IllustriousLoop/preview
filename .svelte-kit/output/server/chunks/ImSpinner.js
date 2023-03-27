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
  )}><path d="${"M6 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 2zm4.243 1.757a2 2 0 1 1 3.999-.001 2 2 0 0 1-3.999.001zM13 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-1.757 4.243a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7 14a1 1 0 0 1 2 0 1 1 0 0 1-2 0zm-4.243-1.757a1 1 0 0 1 2 0 1 1 0 0 1-2 0zm-.5-8.486a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0zM.875 8a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0z"}"></path></svg>`;
});
export {
  Component as default
};
