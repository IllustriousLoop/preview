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
  )}><path d="${"m13.475 5.495.004 2-4.557.01 9.603 9.585-1.412 1.415-9.63-9.61.01 4.614-2 .004-.018-8 8-.018Z"}"></path></svg>`;
});
export {
  Component as default
};
