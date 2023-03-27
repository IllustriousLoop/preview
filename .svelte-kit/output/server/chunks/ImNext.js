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
  )}><path d="${"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"}"></path><path d="${"M9 8 5 5v6zm2-3H9v6h2V5z"}"></path></svg>`;
});
export {
  Component as default
};
