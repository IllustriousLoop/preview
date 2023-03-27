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
  )}><path d="${"M10.9 8a4.055 4.055 0 0 1 1.352.135 2.511 2.511 0 0 1-.7 4.863.5.5 0 0 0 0 1 3.508 3.508 0 0 0 2.944-5.2A3.557 3.557 0 0 0 11.434 7H5.59a3.5 3.5 0 0 0-.19 7c.724.041 1.458 0 2.183 0a.5.5 0 0 0 0-1c-1.323 0-2.915.262-3.891-.843A2.522 2.522 0 0 1 5.59 8Z"}"></path><path d="${"M18.41 17a3.5 3.5 0 0 0 .192-6.994c-.724-.041-1.458 0-2.183 0a.5.5 0 0 0 0 1c1.323 0 2.915-.262 3.891.843A2.522 2.522 0 0 1 18.41 16H13.1a4.055 4.055 0 0 1-1.352-.135 2.511 2.511 0 0 1 .7-4.863.5.5 0 0 0 0-1 3.508 3.508 0 0 0-2.944 5.2A3.557 3.557 0 0 0 12.566 17Z"}"></path></svg>`;
});
export {
  Component as default
};
