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
  )}><path fill-rule="${"evenodd"}" d="${"M8 12 6 7h10l2 5-2 5H6l2-5Zm.954 3 1.2-3-1.2-3h5.692l1.2 3-1.2 3H8.954Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
