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
  )}><path d="${"M15.98 2.442H8.02L0 10.46h2.275l6.882-6.88 6.881 6.881H24l-8.02-8.018m-.492 9.348L9.157 5.459 4.01 10.605v4.987a1.33 1.33 0 0 0 1.329 1.329h6.077l4.637 4.637v-4.637h2.598a1.33 1.33 0 0 0 1.33-1.33V11.79h-4.494Z"}"></path></svg>`;
});
export {
  Component as default
};
