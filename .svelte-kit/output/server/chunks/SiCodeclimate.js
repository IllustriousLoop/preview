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
  )}><path d="${"m16.125 5.272-4.511 4.475 2.684 2.659 1.827-1.813 5.19 5.145L24 13.079zM8.13 8.265 0 16.066l2.772 2.662 5.357-5.145 5.357 5.145 2.772-2.662z"}"></path></svg>`;
});
export {
  Component as default
};
