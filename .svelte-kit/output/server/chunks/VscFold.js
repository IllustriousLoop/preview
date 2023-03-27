import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M11.952 2.381 7.976 6.357 4 2.381 3.38 3l4.286 4.285h.619L12.57 3l-.618-.619zM3.904 14l4.072-4.072L12.047 14l.62-.619L8.284 9h-.619l-4.381 4.381.619.619z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
