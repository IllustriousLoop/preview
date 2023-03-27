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
  )}><path d="${"M19.877 1.468 24 2.534v18.942l-4.123 1.056V1.468zM6.53 10.898l4.115 1.064v8.978L6.53 22.003V10.896zM0 2.572l4.115 1.064v16.736L0 21.428V2.572zm17.455 5.62V19.3l-4.122-1.064V9.257l4.122-1.064z"}"></path></svg>`;
});
export {
  Component as default
};
