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
  )}><path d="${"M8 22.38H0l4-6.92h8zm8 0h8l-4-6.92h-8zm0-13.84-4-6.92-4 6.92 4 6.92Z"}"></path></svg>`;
});
export {
  Component as default
};
