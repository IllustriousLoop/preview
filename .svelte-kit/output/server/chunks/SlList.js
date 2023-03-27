import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 1024 1024" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M96 448H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32zm896 32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32h672c17.664 0 32-14.336 32-32s-14.336-32-32-32zM96 704H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32zm896 32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32h672c17.664 0 32-14.336 32-32s-14.336-32-32-32zM96 192H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32zm224 96h672c17.664 0 32-14.336 32-32s-14.336-32-32-32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32z"}"></path></svg>`;
});
export {
  Component as default
};
