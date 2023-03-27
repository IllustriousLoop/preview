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
  )}><path d="${"m14.567 8.03 6.343-6.26 1.405 1.423-6.323 6.24 3.57.015-.009 2-7-.028.028-7 2 .008-.014 3.601Zm-6.588 6.513-3.57.003-.002-2 7-.006.006 7-2 .002-.003-3.602-6.314 6.29-1.411-1.416 6.294-6.271Z"}"></path></svg>`;
});
export {
  Component as default
};
