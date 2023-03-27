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
  )}><path d="${"m14.829 14.828 1.414-1.414L12 9.172l-4.243 4.242 1.415 1.415L12 12l2.829 2.828Z"}"></path><path fill-rule="${"evenodd"}" d="${"M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12Zm11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
