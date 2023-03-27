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
  )}><path d="${"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 19.826a7.827 7.827 0 1 0 0-15.652 7.827 7.827 0 0 0 0 15.652zm0-3.985a3.84 3.84 0 1 1 0-7.68 3.84 3.84 0 0 1 0 7.68z"}"></path></svg>`;
});
export {
  Component as default
};
