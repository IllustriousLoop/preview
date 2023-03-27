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
  )}><path fill-rule="${"evenodd"}" d="${"m12.439 7 2.4-3H7v6h7.839l-2.4-3ZM19 12H7v10H5V2h14l-4 5 4 5Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
