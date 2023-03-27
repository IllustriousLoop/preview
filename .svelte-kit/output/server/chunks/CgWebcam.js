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
  )}><path d="${"M13 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"}"></path><path fill-rule="${"evenodd"}" d="${"M13 14.9A5.002 5.002 0 0 0 12 5a5 5 0 0 0-1 9.9V17H7v2h10v-2h-4v-2.1ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
