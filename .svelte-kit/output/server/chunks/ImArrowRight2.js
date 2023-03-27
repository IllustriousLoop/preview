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
  )}><path d="${"m9.707 13.707 5-5a.999.999 0 0 0 0-1.414l-5-5a.999.999 0 1 0-1.414 1.414L11.586 7H2a1 1 0 0 0 0 2h9.586l-3.293 3.293a.997.997 0 0 0 0 1.414.999.999 0 0 0 1.414 0z"}"></path></svg>`;
});
export {
  Component as default
};
