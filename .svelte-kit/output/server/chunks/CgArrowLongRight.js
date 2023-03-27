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
  )}><path d="${"m23.068 11.993-4.25-4.236-1.412 1.417 1.835 1.83L.932 11v2l18.305.002-1.821 1.828 1.416 1.412 4.236-4.25Z"}"></path></svg>`;
});
export {
  Component as default
};
