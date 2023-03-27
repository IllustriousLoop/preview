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
  )}><path d="${"M9.172 6.455 7.757 5.041 12 .798l4.243 4.243-1.415 1.414L13 4.627v14.746l1.828-1.828 1.415 1.414L12 23.202l-4.243-4.243 1.415-1.414L11 19.373V4.627L9.172 6.455Z"}"></path></svg>`;
});
export {
  Component as default
};
