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
  )}><path d="${"m13.012 19.162 1.813-1.822 1.418 1.41-4.231 4.255-4.255-4.231 1.41-1.418 1.846 1.834L10.998.997l2-.002.014 18.167Z"}"></path></svg>`;
});
export {
  Component as default
};
