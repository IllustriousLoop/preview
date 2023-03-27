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
  )}><path d="${"M341.334 128v234.666C341.334 409.604 302.938 448 256 448c-46.937 0-85.333-38.396-85.333-85.334V117.334C170.667 87.469 194.135 64 224 64c29.864 0 53.333 23.469 53.333 53.334v245.333c0 11.729-9.605 21.333-21.334 21.333s-21.333-9.604-21.333-21.333V160h-32v202.667C202.667 392.531 226.135 416 256 416c29.865 0 53.334-23.469 53.334-53.333V117.334C309.334 70.401 270.938 32 224 32s-85.334 38.401-85.334 85.334v245.332C138.667 427.729 190.938 480 256 480c65.062 0 117.334-52.271 117.334-117.334V128h-32z"}"></path></svg>`;
});
export {
  Component as default
};
