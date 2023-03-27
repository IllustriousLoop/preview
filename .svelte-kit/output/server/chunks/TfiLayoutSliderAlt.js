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
  )}><path d="${"M2 14h13V3H2v11zM3 4h11v9H3V4zm13 .531h1v7.938h-1V4.531zm-16 0h1v7.938H0V4.531z"}"></path></svg>`;
});
export {
  Component as default
};
