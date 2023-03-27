import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m10.646 13.146.707.707L8.5 16.707l-2.854-2.854.707-.707L8 14.793v-3.772h1v3.772l1.646-1.647zM8 2.207v3.772h1V2.207l1.646 1.646.707-.707L8.5.293 5.646 3.146l.707.707L8 2.207zM0 8v1h17V8H0z"}"></path></svg>`;
});
export {
  Component as default
};
