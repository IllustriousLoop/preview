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
  )}><path d="${"M448 32h-80L256 253.128 144 32H64l112.368 208H128v48h73.564L216 319v17h-88v48h88v96h80v-96h88v-48h-88v-17l14.891-31H384v-48h-48.289L448 32z"}"></path></svg>`;
});
export {
  Component as default
};
