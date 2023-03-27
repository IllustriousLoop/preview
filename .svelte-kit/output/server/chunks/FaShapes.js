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
  )}><path d="${"M128 256a128 128 0 1 0 128 128 128 128 0 0 0-128-128Zm379-54.86L400.07 18.29a37.26 37.26 0 0 0-64.14 0L229 201.14c-14.24 24.38 3.58 54.86 32.09 54.86h213.82c28.51 0 46.33-30.48 32.09-54.86ZM480 288H320a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h160a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32Z"}"></path></svg>`;
});
export {
  Component as default
};
