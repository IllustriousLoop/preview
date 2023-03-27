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
  )}><path d="${"M24 12c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12C0 5.372 5.372 0 12 0c6.627 0 12 5.372 12 12zM12 2.92A9.08 9.08 0 0 0 2.92 12 9.08 9.08 0 0 0 12 21.08 9.08 9.08 0 0 0 21.081 12 9.08 9.08 0 0 0 12 2.92zm0 16.722A7.64 7.64 0 0 1 4.36 12 7.64 7.64 0 0 1 12 4.36 7.64 7.64 0 0 1 19.641 12a7.64 7.64 0 0 1-7.64 7.641z"}"></path></svg>`;
});
export {
  Component as default
};
