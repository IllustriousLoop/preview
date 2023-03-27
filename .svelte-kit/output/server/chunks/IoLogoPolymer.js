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
  )}><path d="${"M392.3 96h-77.9L160.8 348.6 109.9 256l87.7-160h-77.9L32 256l87.7 160h77.9l153.7-252.6 50.8 92.6-87.7 160h77.9L480 256 392.3 96z"}"></path></svg>`;
});
export {
  Component as default
};
