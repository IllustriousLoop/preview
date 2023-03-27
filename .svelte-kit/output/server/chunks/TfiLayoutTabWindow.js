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
  )}><path d="${"M12 2H0v14h17V2h-5zm4 1v2h-4V3h4zm-5 0v2H6V3h5zM1 3h4v2H1V3zm15 12H1V6h15v9z"}"></path></svg>`;
});
export {
  Component as default
};
