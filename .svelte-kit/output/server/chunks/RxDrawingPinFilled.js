import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M9.621 1.136a.5.5 0 0 1 .707 0l1.061 1.06 1.414 1.415 1.06 1.06a.5.5 0 1 1-.706.708l-.653-.653-3.637 4.848 1.108 1.108a.5.5 0 0 1-.707.707L7.854 9.975l-1.061-1.06-3.27 3.27a.5.5 0 1 1-.708-.708l3.27-3.27-1.06-1.06-1.414-1.415a.5.5 0 1 1 .707-.707l1.108 1.108 4.848-3.637-.653-.653a.5.5 0 0 1 0-.707Z"}" clip-rule="${"evenodd"}"></path><path fill-rule="${"evenodd"}" d="${"M9.621 1.136a.5.5 0 0 1 .707 0l1.061 1.06 1.414 1.415 1.06 1.06a.5.5 0 1 1-.706.708l-.653-.653-3.637 4.848 1.108 1.108a.5.5 0 0 1-.707.707L7.854 9.975l-1.061-1.06-3.27 3.27a.5.5 0 1 1-.708-.708l3.27-3.27-1.06-1.06-1.414-1.415a.5.5 0 1 1 .707-.707l1.108 1.108 4.848-3.637-.653-.653a.5.5 0 0 1 0-.707Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
