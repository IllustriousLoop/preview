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
  )}><path d="${"M256 64c64 0 224 224 224 352 0 31.3-47.7 52.4-112 63.3-.3-100-5.8-143.3-112-143.3s-111.7 43.3-112 143.3c-64.3-10.9-112-32-112-63.3C32 288 192 64 256 64z"}"></path></svg>`;
});
export {
  Component as default
};
