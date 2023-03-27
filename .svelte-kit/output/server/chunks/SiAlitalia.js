import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M5.429 20.551H0l14.257-14.87c1.622-1.765 2.878-2.232 4.686-2.232H24L21.602 20.55h-4.17L19.49 5.907M15.7 20.551l1.384-9.842-9.457 9.842Z"}"></path></svg>`;
});
export {
  Component as default
};
