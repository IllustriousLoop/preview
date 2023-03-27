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
  )}><path d="${"M10.243 16.314 6 12.07l1.414-1.414 2.829 2.828 5.656-5.657 1.415 1.415-7.071 7.07Z"}"></path><path fill-rule="${"evenodd"}" d="${"M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
