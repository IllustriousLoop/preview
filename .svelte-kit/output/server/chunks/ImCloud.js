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
  )}><path d="${"M16 10.274a2.726 2.726 0 0 0-2.078-2.648A3.72 3.72 0 0 0 10.205 4a3.712 3.712 0 0 0-2.92 1.418 2.09 2.09 0 0 0-3.719 1.573 3.028 3.028 0 0 0-3.567 2.98A3.028 3.028 0 0 0 3.026 13H13.28a2.725 2.725 0 0 0 2.719-2.726z"}"></path></svg>`;
});
export {
  Component as default
};
