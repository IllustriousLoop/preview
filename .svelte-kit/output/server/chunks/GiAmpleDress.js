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
  )}><path d="${"m288 16 32 16s-25.2 44.02-16 64c5 10.8 32 16 32 16-16 32-32 80-32 96 80 48 80 144 160 176 0 64-80 112-208 112S48 448 48 384c80-32 80-128 160-176 0-16-16-64-32-96 0 0 27-5.2 32-16 9.2-19.98-16-64-16-64l32-16c0 32 16 48 32 48s32-16 32-48z"}"></path></svg>`;
});
export {
  Component as default
};
