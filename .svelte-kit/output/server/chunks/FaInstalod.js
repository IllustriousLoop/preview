import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { "data-name": "Layer 1" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M153.384 480h233.729l115.441-204.235-298.325 57.446Zm351.342-239.922L387.113 32H155.669L360.23 267.9ZM124.386 48.809 7.274 256l115.962 205.154 102.391-295.593Z"}"></path></svg>`;
});
export {
  Component as default
};
