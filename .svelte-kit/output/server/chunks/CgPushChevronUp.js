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
  )}><path d="${"m5 16.929 1.414 1.414 5.657-5.657 5.657 5.657 1.414-1.414-7.07-7.071L5 16.929ZM19 8H5V6h14v2Z"}"></path></svg>`;
});
export {
  Component as default
};
