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
  )}><path d="${"M304 30c-32 64-22.35 180.063 0 208 42.406 53.007 80 80 80 128 0 32-16 80-48 112v16H176v-16c-32.002-31.995-48-80-48-112 0-48 37.594-74.993 80-128 22.35-27.937 32-144 0-208 48-16 48-16 96 0z"}"></path></svg>`;
});
export {
  Component as default
};
