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
  )}><path d="${"m13.366 6.543 5.092 5.456-5.092 5.456V6.543zM24 0v24H0V0h24zm-5.542 11.999 1.747-1.872L11.976 1.9l-8.227 8.228 1.747 1.871-1.747 1.871 8.227 8.229 8.228-8.229-1.746-1.871zm-7.87 5.455V6.543l-5.092 5.456 5.092 5.455z"}"></path></svg>`;
});
export {
  Component as default
};
