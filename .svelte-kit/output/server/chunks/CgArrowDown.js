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
  )}><path d="${"M11 3.672h2V16.5l3.243-3.243 1.414 1.415L12 20.328l-5.657-5.656 1.414-1.415L11 16.5V3.672Z"}"></path></svg>`;
});
export {
  Component as default
};
