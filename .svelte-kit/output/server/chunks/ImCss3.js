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
  )}><path d="${"m2.381.758-.537 2.686h10.934l-.342 1.735H1.496l-.53 2.686h10.933l-.61 3.063-4.406 1.46-3.819-1.46.261-1.329H.639L0 12.823l6.316 2.417 7.281-2.417L16 .757z"}"></path></svg>`;
});
export {
  Component as default
};
