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
  )}><path fill-rule="${"evenodd"}" d="${"M3.02 7.98 8 3l4.98 4.98L8 12.96 3.02 7.98zM8 10.77l2.79-2.79L8 5.19 5.21 7.98 8 10.77z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
