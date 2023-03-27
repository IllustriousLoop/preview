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
  )}><path d="${"M5 5h10v4H9v6H5V5Z"}"></path><path d="${"M9 15v4h10V9h-4v6H9Z"}"></path><path d="${"M10 10h4v4h-4v-4Z"}"></path></svg>`;
});
export {
  Component as default
};
