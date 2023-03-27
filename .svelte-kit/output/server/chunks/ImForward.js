import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M4.096 0C2.319 3.219 2.02 8.13 9 7.966V4l6 6-6 6v-3.881C.641 12.337-.29 4.741 4.096 0z"}"></path></svg>`;
});
export {
  Component as default
};
