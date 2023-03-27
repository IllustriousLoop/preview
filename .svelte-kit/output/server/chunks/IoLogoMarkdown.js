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
  )}><path d="${"M447.659 96H64.341C46.504 96 32 110.484 32 128.308v255.349C32 401.493 46.504 416 64.341 416h383.318C465.496 416 480 401.493 480 383.656V128.308C480 110.484 465.496 96 447.659 96zM284.023 352h-56.048v-96l-42.04 53.878L143.913 256v96H87.869V160h56.044l42.022 67.98 42.04-67.98h56.048v192zm83.657 0-69.635-96h42v-96h56.043v96h42.027l-70.453 96h.018z"}"></path></svg>`;
});
export {
  Component as default
};
