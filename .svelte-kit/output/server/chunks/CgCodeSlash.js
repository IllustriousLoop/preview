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
  )}><path d="${"M13.325 3.05 8.667 20.432l1.932.518 4.658-17.382-1.932-.518ZM7.612 18.36l1.36-1.448-.001-.019-5.094-4.78 4.79-5.105-1.458-1.369-6.16 6.563 6.563 6.159Zm8.776 0-1.36-1.448.001-.019 5.094-4.78-4.79-5.105 1.458-1.369 6.16 6.563-6.563 6.159Z"}"></path></svg>`;
});
export {
  Component as default
};
