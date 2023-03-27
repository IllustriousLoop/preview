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
  )}><path d="${"M7.12 11.084a.683.683 0 0 0-1.16.126L.075 22.974a.703.703 0 0 0 .63 1.018h8.19a.678.678 0 0 0 .63-.39c1.767-3.65.696-9.203-2.406-12.52zM11.434.386a15.515 15.515 0 0 0-.906 15.317l3.95 7.9a.703.703 0 0 0 .628.388h8.19a.703.703 0 0 0 .63-1.017L12.63.38a.664.664 0 0 0-1.196.006z"}"></path></svg>`;
});
export {
  Component as default
};
