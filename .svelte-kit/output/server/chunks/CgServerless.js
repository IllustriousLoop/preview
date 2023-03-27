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
  )}><path d="${"M11.787 6H5v3h5.695l1.092-3Zm-1.82 5H5v3h3.875l1.092-3Zm1.037 3 1.092-3H20v3h-8.996Zm-2.856 2H5v3h2.056l1.092-3Zm1.036 3 1.092-3H20v3H9.184Zm3.64-10 1.092-3H20v3h-7.176Z"}"></path></svg>`;
});
export {
  Component as default
};
