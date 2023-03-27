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
  )}><path d="${"M0 8.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm9 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"}"></path></svg>`;
});
export {
  Component as default
};
