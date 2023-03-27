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
  )}><path d="${"M5 17v-2h8v2H5Zm0-8V7h8v2H5Z"}"></path><path d="${"M5 13v-2h10V7.965l4.071 4-4.071 4V13H5Z"}"></path></svg>`;
});
export {
  Component as default
};
