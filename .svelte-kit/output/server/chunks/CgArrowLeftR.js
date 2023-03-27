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
  )}><path d="${"m11.948 14.829-1.414 1.414L6.29 12l4.243-4.243 1.414 1.415L10.12 11h7.537v2H10.12l1.828 1.829Z"}"></path><path fill-rule="${"evenodd"}" d="${"M23 19a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14Zm-4 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
