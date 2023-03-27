import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 20 20" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M9 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"}"></path><path fill-rule="${"evenodd"}" d="${"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-13a4 4 0 0 0-3.446 6.032l-2.261 2.26a1 1 0 1 0 1.414 1.415l2.261-2.261A4 4 0 1 0 11 5z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
