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
  )}><path d="${"m16.929 5 1.414 1.414-5.657 5.657 5.657 5.657-1.414 1.414-7.071-7.07L16.929 5ZM8 19V5H6v14h2Z"}"></path></svg>`;
});
export {
  Component as default
};
