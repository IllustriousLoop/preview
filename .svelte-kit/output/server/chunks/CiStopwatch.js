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
  )}><path d="${"M11.5 8.343a.5.5 0 0 1 1 0v4.7a.5.5 0 0 1-1 0Z"}"></path><path d="${"M9.915 3.06a.5.5 0 0 0 0 1h1.59v1.11a7.893 7.893 0 1 0 6.42 2.66l1.14-1.13a.5.5 0 0 0-.71-.71l-1.14 1.14a7.754 7.754 0 0 0-4.71-1.96V4.06h1.58a.5.5 0 0 0 0-1Zm2.09 16.88a6.9 6.9 0 0 1-.02-13.79h.02a6.9 6.9 0 0 1 0 13.79Z"}"></path></svg>`;
});
export {
  Component as default
};
