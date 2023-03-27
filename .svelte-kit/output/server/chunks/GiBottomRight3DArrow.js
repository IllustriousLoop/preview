import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m126.47 18.25 273.81 229.344 39.314-39.313 23.47 205.095-205.095-23.438 37.467-37.468L20.594 58.655v99.28l195.25 235.126 5.437 6.532-6.03 6.03-45.97 45.97 323.033 38.344-38.375-323-48.313 48.312-6 6-6.563-5.438L155.032 18.25h-28.563z"}"></path></svg>`;
});
export {
  Component as default
};
