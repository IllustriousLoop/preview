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
  )}><path d="${"M7.757 8.464 9.172 7.05 12 9.88l2.828-2.829 1.415 1.415L12 12.707 7.757 8.464Z"}"></path><path d="${"m9.172 11.293-1.415 1.414L12 16.95l4.243-4.243-1.415-1.414L12 14.12l-2.828-2.828Z"}"></path><path fill-rule="${"evenodd"}" d="${"M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-2 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
