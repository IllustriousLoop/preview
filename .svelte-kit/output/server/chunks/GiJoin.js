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
  )}><path d="${"M32 23v18h215v110h-37.6l6.5 13 40.1 80.1 46.6-93.1H265V41h215V23zm224 244.9L209.4 361H247v110H32v18h448v-18H265V361h37.6z"}"></path></svg>`;
});
export {
  Component as default
};
