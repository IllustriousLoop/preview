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
  )}><path d="${"M24 .467 9.01 20.217h11.53a3.46 3.46 0 0 0 3.46-3.46V.468zM3.459 3.783C1.585 3.783 0 5.153 0 7.1v16.433l15.063-19.75H3.459Z"}"></path></svg>`;
});
export {
  Component as default
};
