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
  )}><path d="${"M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm3.564 12A3.564 3.564 0 1 0 12 15.564V17.6a5.6 5.6 0 1 1 5.6-5.6h-2.036zM19 12a7 7 0 1 0-7 7v2.333a9.333 9.333 0 1 1 0-18.666A9.333 9.333 0 0 1 21.333 12H19z"}"></path></svg>`;
});
export {
  Component as default
};
