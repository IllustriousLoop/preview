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
  )}><path d="${"M12 11h-1.586l-2.5-2.5 2.5-2.5H12v2.5L15.5 5 12 1.5V4h-2a.997.997 0 0 0-.707.293L6.5 7.086 3.707 4.293A1 1 0 0 0 3 4H0v2h2.586l2.5 2.5-2.5 2.5H0v2h3c.265 0 .52-.105.707-.293L6.5 9.914l2.793 2.793A1 1 0 0 0 10 13h2v2.5l3.5-3.5L12 8.5V11z"}"></path></svg>`;
});
export {
  Component as default
};
