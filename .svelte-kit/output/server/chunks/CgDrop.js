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
  )}><path stroke="${"currentColor"}" stroke-width="${"2"}" d="${"M6.343 19.52a8 8 0 0 1 0-11.313L12 2.55l5.657 5.657A8 8 0 0 1 6.343 19.521Z"}"></path></svg>`;
});
export {
  Component as default
};
